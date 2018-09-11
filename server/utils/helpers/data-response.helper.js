export const formatError = ({ code = 1, message = 'Unknown error' }, data = null) => {
    return {
      error: {
        code,
        message,
      },
      data,
    };
  };
  
  export const formatSuccess = ({ code = 0, message = 'Success' }, data = {}) => {
    return {
      error: {
        code,
        message,
      },
      data,
    };
  };
  