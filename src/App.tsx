import { useEffect, useRef, useState } from 'react';
import './App.css';
import Bar from './components/Bar';
import Controls from './components/Controls';
import bubbleSortStep from './utils/bubbleSort';
import generateNumbers from './utils/generateNumbers';

function App() {
  const [numbers, setNumbers] = useState(generateNumbers(25));
  const [running, setRunning] = useState(false);
  const [i, setI] = useState(0)
  const [j, setJ] = useState(0);

  const timeoutRef = useRef<NodeJS.Timeout>();

  const onReset = () => {
    setRunning(false);
    setNumbers(generateNumbers(25));
    setI(0);
    setJ(0);
  };

  useEffect(() => {
    if (running === true) {
      timeoutRef.current = setTimeout(() => {
        setNumbers(numbers => bubbleSortStep(numbers, j));
  
        if (j < numbers.length - i - 1) {
          setJ(j => j+1);
        } else if (i < numbers.length - 1) {
          setI(i => i + 1);
          setJ(0);
        } else {
          setRunning(false);
        }
      }, 100);
    }

    return (() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    });

  }, [i, j, numbers, running]);

  return (
    <div className="flex w-full h-full">
      <Controls onReset={onReset} running={running} onStart={() => setRunning(isRunning => !isRunning)}></Controls>
      <div className="w-full p-4 flex flex-col justify-items-stretch">
        <h1 className='mb-4 text-3xl font-bold'>Bubble sort</h1>
        <div className="relative bars w-full flex-1">
          {numbers.map((number, index) => (
            <div style={{transform: `translate3d(${index * 100}%, 0, 0)`}} key={number} className={`bar-wrapper ${running ? 'transition-transform' : 'transition-none'} absolute bottom-0 left-0 px-2`}>
              <Bar isCurrent={index === numbers.length - i - 1} isChecked={index === j} size={number}></Bar>
              <b>{number}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
