'use client';
import { Login } from '../components/Login';
import { Categories } from '../components/Categories';
import { ListToy } from '../components/ListToy';
import { SelectedToys } from '../components/SelectedToys';
import { FinalList } from '../components/FinalList';
// import objectToExport from '../services/localStorage';
import { StepperUI } from '../components/StepperUI';
import { useSteps } from '@chakra-ui/stepper';
import { PageLayout } from '../components/PageLayout';
import { UserProvider } from '../context/UseContext';

export default function Home() {
  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: 4,
  });

  return (
    <PageLayout
      sidebar={<StepperUI step={activeStep} />}
      content={
        <UserProvider>
          <div className="pt-11">
            {activeStep === 0 ? <Login goToNext={goToNext} /> : null}
            {activeStep === 1 ? (
              <Categories goToNext={goToNext} goToPrevious={goToPrevious} />
            ) : null}
            {activeStep === 2 ? (
              <ListToy goToNext={goToNext} goToPrevious={goToPrevious} />
            ) : null}
            {activeStep === 3 ? (
              <SelectedToys goToNext={goToNext} goToPrevious={goToPrevious} />
            ) : null}
            {activeStep === 4 ? (
              <FinalList goToPrevious={goToPrevious} />
            ) : null}
          </div>
        </UserProvider>
      }
      // navigation={
      //   <StepNavigation
      //     step={activeStep}
      //     goToNext={goToNext}
      //     goToPrevious={goToPrevious}
      //   />
      // }
    />
  );
}

// //orden
// // 1login
// //2categories
// //3listtoy
// //4selectedtoys
// //5finallist
