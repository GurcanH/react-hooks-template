import { useEffect, useRef, useState } from 'react';
import { useFetch } from './useFetch';

export const Hello = () => {
  //   useEffect(() => {
  //     console.log('render');

  //     return () => {
  //       console.log('unmount');
  //     };
  //   }, []);

  //   const renders = useRef(0);

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem('count'))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  //   console.log('hello renders', renders.current++);
  return (
    <div>
      <div>{!data ? 'loading...' : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
    </div>
  );
};
