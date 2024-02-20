import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const steps = ['/', '/listtoy'];

export default function Layout({ children }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log({ currentStepIndex, url: steps[currentStepIndex] });
    navigate(steps[1]);
  }, [currentStepIndex]);

  return (
    <>
      {children}
      <button
        style={{ margin: '50px' }}
        onClick={() => {
          setCurrentStepIndex(currentStepIndex + 1);
        }}
      >
        next
      </button>
    </>
  );
}
