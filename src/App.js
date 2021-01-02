import { useState, useEffect, useRef } from 'react';
import { useForm } from './useForm';
import { Hello } from './Hello';

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: ''
  });

  const inputRef = useRef();
  const hello = useRef(() => {
    console.log('hello');
  });

  const [showHello, setShowHello] = useState(true);
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
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}
      <input
        ref={inputRef}
        name='email'
        value={values.email}
        onChange={handleChange}
      />
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

      <button
        onClick={() => {
          inputRef.current.focus();
          hello.current();
        }}
      >
        focus
      </button>
    </div>
  );
};

export default App;
