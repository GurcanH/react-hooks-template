import { useState, useEffect } from 'react';
import { useForm } from './useForm';
import { Hello } from './Hello';
import { useFetch } from './useFetch';
const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: ''
  });
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem('count'))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);
  // const [showHello, setShowHello] = useState(true);
  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e);
  //   };
  //   window.addEventListener('mousemove', onMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log('mount 1');
  // }, []);
  // useEffect(() => {
  //   console.log('mount 2');
  // }, []);
  return (
    <div>
      <div>{!data ? 'loading...' : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
      {/* <button onClick={() => setShowHello(!showHello)}>toggle</button> */}
      {/* {showHello && <Hello />} */}
      <input name='email' value={values.email} onChange={handleChange} />
      <input
        name='firstName'
        placeholder='firstName'
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
