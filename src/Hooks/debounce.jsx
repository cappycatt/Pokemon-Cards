import React from 'react'

function useDebounce(value, delay = 300) {
      const [debounceValue, setDebounceValue] = React.useState(value);

      React.useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => clearTimeout(timeOut);
      },[value, delay]);

  return (
   debounceValue
  )
}

export default useDebounce