import React, { useEffect, useRef } from 'react';
import styles from './step-indicator.module.css';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps
}) => {
  const stepLineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (stepLineRef.current) {
      stepLineRef.current.style.setProperty(
        '--total-steps',
        String(totalSteps)
      );
      stepLineRef.current.style.setProperty(
        '--current-step',
        String(currentStep)
      );
    }
  }, [currentStep, totalSteps]);

  return (
    <div className={styles.stepIndicatorContainer}>
      <div className={styles.stepText}>
        Шаг {currentStep} из {totalSteps}
      </div>
      <div ref={stepLineRef} className={styles.stepLine}>
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`${styles.stepSegment} ${index < currentStep ? styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
};
