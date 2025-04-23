export const sendApi = async (data, endpoint) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}${endpoint}`, {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const responseText = await response.text();
        
        let result;
        try {
            result = JSON.parse(responseText);
        } catch (e) {
            result = responseText;
        }
        
        if (!response.ok) {
            return {
                success: false,
                error: result.message || 'An error occurred',
                errorCode: result.code,
                errorData: result.data
            };
        }
        
        return {
            success: true,
            data: result
        };
  
    } catch (error) {
        return {
            success: false,
            error: error.message || 'Network error',
            isNetworkError: true
        };
    }
}

export const fetchApi = async (endpoint) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}${endpoint}`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        });
  
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const res = await response.text();
        const result = JSON.parse(res);
        
        return {
            success: true,
            data: result
        };
  
    } catch (error) {
        return {
            success: false,
            error: error
        };
    }
}


export const fetchDetails = async (endpoint) => {
    try {
      const token = localStorage.getItem('authToken');
      
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}${endpoint}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const responseText = await response.text();
      
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        return {
          success: false,
          error: 'Invalid response format',
        };
      }
      

      if (!response.ok) {
        return {
          success: false,
          error: result.message || 'An error occurred',
          errorCode: result.code,
          errorData: result.data
        };
      }
      
      return {
        success: true,
        data: result
      };
  
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Network error'
      };
    }
  };