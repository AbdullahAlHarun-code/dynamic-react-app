import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import "./Counter.css";
import { PlusIcon, MinusIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Counter = ({ id, index, count: initialCount, onDelete, onUpdate }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onUpdate(id, newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onUpdate(id, newCount);
  };

  return (
    <div className="counter mb-3 relative">
      {onDelete && (
        <button onClick={() => onDelete(id)} className="absolute top-0 right-0 mt-2 mr-2">
          <XMarkIcon className="w-6 h-6 text-red-500" />
        </button>
      )}
      <h1 className="counter-title">Counter App {index}</h1>
      <div className="counter-value">{count}</div>
      <div className="counter-buttons">
        <button onClick={increment} className="counter-button increment">
          Increment <PlusIcon className="w-6 h-6 text-black-500 inline" />
        </button>
        <button onClick={decrement} className="counter-button decrement">
          Decrement <MinusIcon className="w-6 h-6 text-black-500 inline" />
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func.isRequired,
};

export default Counter;