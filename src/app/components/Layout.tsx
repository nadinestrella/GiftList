import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const steps = [
  '/',
  '/kidswelcome',
  '/categories',
  '/listtoy',
  '/selectedtoys',
  '/finallist',
];

export default function Layout({ children }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(steps[currentStepIndex]);
  }, [currentStepIndex]);

  return (
    <>
      <div className="actions">
        <div className="actions__wrapper">
          {currentStepIndex > 0 && currentStepIndex < steps.length ? (
            <button
              className="actions__button"
              onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          ) : null}
        </div>
        <div className="actions__wrapper">
          {currentStepIndex !== steps.length - 1 ? (
            <button
              className="actions__button"
              onClick={() => {
                setCurrentStepIndex(currentStepIndex + 1);
              }}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          ) : null}
        </div>
      </div>
      {children}
    </>
  );
}
