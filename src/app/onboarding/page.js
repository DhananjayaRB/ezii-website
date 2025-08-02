"use client";
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Registration from './components/Registration';
import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import './onboarding.module.scss';

const Onboarding = () => {
  return (
    <>
      <Navbar />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Registration />
        </PersistGate>
      </Provider>
      <Footer />
    </>
  );
};

export default Onboarding;