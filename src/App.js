import { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css';
import './css/index.css';

function App() {
  const [advice, setAdvice] = useState('');
  const getAdvice = async() => {
    return fetch("https://api.adviceslip.com/advice")
    .then((resp) => resp.json())
    .then((data) => setAdvice(data.slip));
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="container">
      <Card advice={advice} getAdvice={getAdvice} />
    </div>
  );
}

export default App;
