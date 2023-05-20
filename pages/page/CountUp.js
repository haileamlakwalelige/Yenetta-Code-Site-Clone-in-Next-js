import { useState, useEffect } from 'react';

function CountUp({ end, duration }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = Math.round((end / duration) * 100);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / 100);
    
    return () => clearInterval(timer);
  }, [end, duration]);
  
  return <span>{count}</span>;
}

export default CountUp;