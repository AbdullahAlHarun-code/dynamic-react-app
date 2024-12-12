import { useState } from 'react';
import Counter from './components/Counter/Counter';
import Navbar from './components/Navbar/Navbar';
import './App.css'; // Ensure you have a global CSS file if needed

const App = () => {
  const [counters, setCounters] = useState([{ id: 0, count: 0 }]);
  const [nextId, setNextId] = useState(1);

  const deleteCounter = (id) => {
    if (counters.length > 1) {
      setCounters(counters.filter(counter => counter.id !== id));
    }
  };

  const addCounter = () => {
    setCounters([...counters, { id: nextId, count: 0 }]);
    setNextId(nextId + 1);
  };

  const updateCounter = (id, count) => {
    setCounters(counters.map(counter => counter.id === id ? { ...counter, count } : counter));
  };

  return (
    <div className='app-container'>
      <Navbar />
      <div className='counter-container flex flex-col items-center'>
        {counters.map((counter, index) => (
          <Counter
            key={counter.id}
            id={counter.id}
            index={index + 1}
            count={counter.count}
            onDelete={counters.length > 1 ? deleteCounter : null}
            onUpdate={updateCounter}
          />
        ))}
        <button 
          onClick={addCounter} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Add Counter
        </button> 
      </div>
    </div>
  );
};

export default App;