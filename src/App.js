import './App.css';
import RenderCards from './Cards';
import Form from './addCard';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(true)
  useEffect(()=>{},[state])
  return (
    <div className='all'>
    <RenderCards />
    <Form 
    setState = {setState}
    state = {state}
    />

    </div>
  );
}

export default App;
