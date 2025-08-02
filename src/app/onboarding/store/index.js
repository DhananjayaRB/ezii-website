import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import onboardingReducer from './onboardingSlice';

const persistConfig = {
  key: 'onboarding',
  storage,
  whitelist: ['generalDetails', 'companyInfo', 'stepperStatus', 'formData']
};

const persistedReducer = persistReducer(persistConfig, onboardingReducer);

export const store = configureStore({
  reducer: {
    onboarding: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store); 