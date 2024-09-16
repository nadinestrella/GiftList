import { useSteps } from '@chakra-ui/stepper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const StepNavigation = ({
  goToNext,
  goToPrevious,
}: {
  step: number;
  goToNext: () => void;
  goToPrevious: () => void;
}) => {
  return (
    <div className="flex flex-row justify-around pt-11 text-3xl text-background3">
      <button onClick={goToPrevious} className="hover:text-red-600">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button onClick={goToNext} className="hover:text-red-600">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};
