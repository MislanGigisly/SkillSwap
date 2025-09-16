import React, { useState, FC } from 'react';
import { StepIndicator } from '@shared/ui/StepIndicator/step-indicator';
import styles from './register.module.css';
import RegistrationDescription from '@shared/ui/RegistrationDescription/registration-description';
import RegistrationFormStep2 from '@shared/ui/RegistrationFormStep2/RegistrationFormStep2';
import RegistrationFormStep3 from '@shared/ui/RegistrationFormStep3/RegistrationFormStep3';
import RegistrationFormStep1 from '@shared/ui/RegistrationFormStep1/RegistrationFormStep1';
import { TRegisterData } from '@api/types';
import {
  selectSuccessModal,
  selectUserLoading
} from '@entities/UserCards/model/selectors';
import { resetSuccessModal, userThunk } from '@entities';
import { useDispatch, useSelector } from '@app/store/store';
import { Preloader } from '@shared/ui/preloader';
import { ConfirmModal } from '@widgets';
import { useNavigate } from 'react-router-dom';
import mockAvatar from '../../../public/images/03a69e3af2677c18576441e05e66092043930940.jpg';

export const Register: FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [formData, setFormData] = useState<TRegisterData>({} as TRegisterData);
  const disp = useDispatch();
  const navigate = useNavigate();

  const exchangeLoading = useSelector(selectUserLoading);
  const exchangeSuccessModal = useSelector(selectSuccessModal);

  const handleStepChange = (newStep: number) => {
    if (newStep >= 1 && newStep <= totalSteps) {
      setStep(newStep);
    }
  };

  const handleNextStep = () => {
    handleStepChange(step + 1);
  };

  const handlePrevStep = () => {
    handleStepChange(step - 1);
  };

  const mockData = {
    email: 'test@mail.ru',
    password: '1111',
    name: 'Василий',
    city: 'Томск',
    age: '33',
    description:
      'Позволяет моментально исчезнуть из любой неловкой ситуации, если вслух произнести саркастическую фразу вроде:«О, ну конечно, что может пойти не так?»',
    gender: 'Мужской',
    avatar: mockAvatar,
    photos: [],
    skillName: 'Саркастическое телепортирование',
    skillCanTeachCategory: '1',
    skillCanTeachSubCategory: '1',
    skillWants: ['1'],
    skillId: '1'
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.stepIndicator}>
        <StepIndicator currentStep={step} totalSteps={totalSteps} />
      </div>
      <div className={styles.content}>
        {exchangeLoading && (
          <div className={styles.loaderOverlay}>
            <Preloader />
          </div>
        )}

        {exchangeSuccessModal && (
          <div className={styles.loaderOverlay}>
            <ConfirmModal
              onClose={() => disp(resetSuccessModal())}
              data={mockData}
              submit={() => {
                navigate('/offered');
                disp(userThunk.register(formData));
              }}
            />
          </div>
        )}
        <div className={styles.leftColumn}>
          {step === 1 && (
            <RegistrationFormStep1
              onNextStep={handleNextStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 2 && (
            <RegistrationFormStep2
              onNextStep={handleNextStep}
              onPrevStep={handlePrevStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 3 && (
            <RegistrationFormStep3
              onNextStep={handleNextStep}
              onPrevStep={handlePrevStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
        </div>
        <div className={styles.rightColumn}>
          <RegistrationDescription step={step} />
        </div>
      </div>
    </div>
  );
};
