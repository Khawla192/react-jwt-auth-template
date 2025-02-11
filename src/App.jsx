import { Routes, Route } from 'react-router';
import { useState } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path='/' element={<Landing />} />
        <Route path='/sign-up' element={<SignUpForm />} />
      </Routes>
    </>
  );
};

export default App;
