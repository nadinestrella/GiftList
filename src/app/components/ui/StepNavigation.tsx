import { useSteps } from '@chakra-ui/stepper';

export const StepNavigation = ({
  goToNext,
  goToPrevious,
}: {
  step: number;
  goToNext: () => void;
  goToPrevious: () => void;
}) => {
  return (
    <div>
      <button onClick={goToPrevious}>Back</button>
      <button onClick={goToNext}>Next</button>
    </div>
  );
};
