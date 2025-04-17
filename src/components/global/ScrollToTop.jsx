import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that manages scroll behavior throughout the application
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped
 */
function ScrollToTop({ children }) {
  const { pathname, hash } = useLocation();
  const scrolledRef = useRef(false);
  const scrollAttemptsRef = useRef(0);
  const maxAttempts = 5;

  useEffect(() => {
    // Reset refs when route changes
    scrolledRef.current = false;
    scrollAttemptsRef.current = 0;
    
    // Stop any previous scroll animations
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      window.scrollTo(0, 0);
    }
    
    const scrollToElement = () => {
      if (scrolledRef.current || scrollAttemptsRef.current >= maxAttempts) return;
      
      scrollAttemptsRef.current += 1;
      
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          // Calculate position accounting for any fixed headers
          const headerOffset = 80; // Adjust based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          // Force scroll with native API for better browser support
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Mark as scrolled only if we're close to the target
          const checkIfScrolled = () => {
            const currentPosition = window.pageYOffset;
            const targetPosition = offsetPosition;
            
            if (Math.abs(currentPosition - targetPosition) < 50) {
              scrolledRef.current = true;
            } else if (!scrolledRef.current) {
              // Try one more precise scroll
              window.scrollTo({
                top: offsetPosition,
                behavior: 'auto'
              });
              scrolledRef.current = true;
            }
          };
          
          // Check after animation likely completed
          setTimeout(checkIfScrolled, 1000);
        } else {
          // If element not found, scroll to top
          window.scrollTo(0, 0);
          scrolledRef.current = true;
        }
      } else {
        // For regular navigation
        window.scrollTo(0, 0);
        scrolledRef.current = true;
      }
    };
    
    const attemptScrollWithBackoff = () => {
      // Initial attempt
      const initialTimer = setTimeout(() => {
        scrollToElement();
        
        // Second attempt after images might have loaded
        const secondTimer = setTimeout(() => {
          if (!scrolledRef.current) scrollToElement();
          
          // Final attempt after all possible content has loaded
          const finalTimer = setTimeout(() => {
            if (!scrolledRef.current) scrollToElement();
          }, 1000);
          
          return () => clearTimeout(finalTimer);
        }, 500);
        
        return () => clearTimeout(secondTimer);
      }, 300);
      
      return () => clearTimeout(initialTimer);
    };
    
    window.addEventListener('load', scrollToElement);
    

    const cleanup = attemptScrollWithBackoff();
    
    return () => {
      window.removeEventListener('load', scrollToElement);
      cleanup();
    };
  }, [pathname, hash]);
  
  return children;
}

export default ScrollToTop;