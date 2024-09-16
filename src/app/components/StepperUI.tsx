import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout';

const steps = [
  { title: 'First', description: 'Login' },
  { title: 'Second', description: 'Choose Categories' },
  { title: 'Third', description: 'Select Toys' },
  { title: 'Fourth', description: 'Selected Toys' },
  { title: 'Fifth', description: 'Final List' },
];

export const StepperUI = ({ step }: { step: number }) => {
  return (
    <Stepper
      index={step}
      colorScheme="red"
      orientation="vertical"
      height="400px"
      gap="0"
      size="sm"
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};
