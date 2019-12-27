import rootReducer from './reducers/rootReducer';
import storage from 'redux-persist/lib/storage';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: storage, // Store the data in storage file
  whitelist: ['blogReducer'] // Whitelisting blogReducer to Store in persistedReducer
};

const pReducer = persistReducer(persistConfig, rootReducer); // create a persist reducer
const store = createStore(pReducer); // creating a store to save Posts/Data
const persistor = persistStore(store);
// creating a persisted Reducer and storing the data that we received inside it to fetch it after page is reloaded

export { persistor, store };
