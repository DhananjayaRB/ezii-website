"use client";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStepperStatus, setCurrentStep } from '../store/onboardingSlice';
import GeneralDetails from './GeneralDetails';
import Features from './Features';
import PaymentConfirmationSuccess from './PaymentConfirmationSuccess';
import PaymentConfirmationFailure from './PaymentConfirmationFailure';
import SpinnerComponent from './SpinnerComponent';
import styles from '../onboarding.module.scss';

const Registration = () => {
  const dispatch = useDispatch();
  const { stepperStatus, currentStep, loading } = useSelector((state) => state.onboarding);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Initialize stepper status from localStorage or default values
      const storedStepper = {
        generalDetailsStepperStatus: 'active',
        featuresStepperStatus: 'inactive',
      };
      dispatch(setStepperStatus(storedStepper));
    }
  }, [isMounted, dispatch]);

  const handleNextStep = () => {
    if (stepperStatus.generalDetailsStepperStatus === 'active') {
      dispatch(setStepperStatus({
        generalDetailsStepperStatus: 'completed',
        featuresStepperStatus: 'active',
      }));
      dispatch(setCurrentStep('features'));
    }
  };

  const handleStepClick = (step) => {
    if (step === 'generalDetails') {
      dispatch(setStepperStatus({
        generalDetailsStepperStatus: 'active',
        featuresStepperStatus: 'inactive',
      }));
      dispatch(setCurrentStep('generalDetails'));
    } else if (step === 'features') {
      dispatch(setStepperStatus({
        generalDetailsStepperStatus: 'completed',
        featuresStepperStatus: 'active',
      }));
      dispatch(setCurrentStep('features'));
    }
  };

  if (!isMounted) return null;

  return (
    <div className={styles.bg}>
      {loading && <SpinnerComponent text="Processing your payment. Do not close or refresh your page..." />}
      
      <div className={styles.contentWrapper}>
        {stepperStatus.generalDetailsStepperStatus === 'active' && (
          <p className={styles.pageTitle}>
            Streamline Your Payroll: Register with Ease!
          </p>
        )}
        {stepperStatus.featuresStepperStatus === 'active' && (
          <p className={styles.pageTitle}>
            Unlock Efficiency: Discover the Power of Advanced Resolvepay Features!
          </p>
        )}
        
        <div className={styles['stepper-wrapper']}>
          <div
            className={`${styles['stepper-item']} ${
              stepperStatus.generalDetailsStepperStatus === 'active' ||
              stepperStatus.generalDetailsStepperStatus === 'completed'
                ? styles.active
                : styles.inactive
            } ${styles.cursor}`}
            onClick={() => handleStepClick('generalDetails')}
          >
            <div className={styles['step-counter']}>
              {stepperStatus.generalDetailsStepperStatus === 'completed' ? (
                <div className={styles['stepper-completed']}>
                  <img src="/checkmark.svg" alt="Completed" />
                </div>
              ) : (
                <div
                  className={
                    stepperStatus.generalDetailsStepperStatus === 'active'
                      ? styles['step-number-selected']
                      : styles['step-number']
                  }
                >
                  1
                </div>
              )}
            </div>
            <div className={styles['step-name']}>General Details</div>
          </div>

          <div
            className={`${styles['stepper-item']} ${
              stepperStatus.featuresStepperStatus === 'active' ||
              stepperStatus.featuresStepperStatus === 'completed'
                ? styles.active
                : styles.inactive
            } ${styles.cursor}`}
            onClick={() => handleStepClick('features')}
          >
            <div className={styles['step-counter']}>
              {stepperStatus.featuresStepperStatus === 'completed' ? (
                <div className={styles['stepper-completed']}>
                  <img src="/checkmark.svg" alt="Completed" />
                </div>
              ) : (
                <div
                  className={
                    stepperStatus.featuresStepperStatus === 'active'
                      ? styles['step-number-selected']
                      : styles['step-number']
                  }
                >
                  2
                </div>
              )}
            </div>
            <div className={styles['step-name']}>Features</div>
          </div>
        </div>

        {/* Conditional Rendering of Components */}
        {currentStep === 'generalDetails' && (
          <GeneralDetails onNext={handleNextStep} />
        )}
        
        {currentStep === 'features' && (
          <Features />
        )}
        
        {currentStep === 'paymentSuccess' && (
          <PaymentConfirmationSuccess />
        )}
        
        {currentStep === 'paymentFailure' && (
          <PaymentConfirmationFailure />
        )}
      </div>
    </div>
  );
};

export default Registration; 