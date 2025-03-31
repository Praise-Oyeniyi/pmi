import React from 'react'

const Header = () => {
  return (
    <div className='w-full bg-white '>
        <div className="header-inner w-full flex justify-between items-center px-5">
            <div className="header-left">
                <div className="logo">
                    <img src="../assets/icons/logo.svg" alt="pmi-logo" />
                </div>
                <div className="menu">
                    <ul className='text-black flex items-center gap-x-3'>
                        <li>
                            <div className='h-full px-2 bg-secondary'>About Us</div>
                        </li>
                        <li>
                            <div>Training</div>
                        </li>
                        <li>
                            <div>Special Program</div>
                        </li>
                        <li>
                            <div>Volunteering</div>
                        </li>
                        <li>
                            <div>Contact</div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="header-right">
                <div className="socials">
                    <div className="h-4 w-4 color-black"></div>
                    <div className="h-4 w-4 color-black"></div>
                    <div className="h-4 w-4 color-black"></div>
                </div>
                <button>Change Language <span>dd</span></button>
                <button>Login</button>
            </div>
            
        </div>

    </div>
  )
}

export default Header