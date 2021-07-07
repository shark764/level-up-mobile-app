import React from 'react';
import { Provider } from 'react-redux';
import MainNavigation from '@navigation/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastProvider } from 'react-native-fast-toast';
import { LogBox } from 'react-native';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import rootReducer from '@state/reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['appData']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});

let persistor = persistStore(store);

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  return (
    <ToastProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider>
            <MainNavigation />
          </PaperProvider>
        </PersistGate>
      </Provider>
    </ToastProvider>
  );
};

export default App;
