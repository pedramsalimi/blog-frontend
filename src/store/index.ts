import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
  EnhancedStore,
  AnyAction,
  Middleware,
  Dispatch,
} from "@reduxjs/toolkit";
import { isServer } from "@utils/helpers";
import user from "./slices/user";
import scroll from "./slices/scroll";

const reducers = combineReducers({ user, scroll });

export type RootState = ReturnType<typeof reducers>;

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    thunk: false,
  }),
];
// if (enableReduxDevTools) {
//   const { logger } = require("redux-logger");
//   middleware.push(logger);
// }

function makeStore() {
  return configureStore({
    reducer: reducers,
    middleware,
    devTools: false,
  });
}
let store: EnhancedStore<
  RootState,
  AnyAction,
  Middleware<Record<string, never>, any, Dispatch<AnyAction>>[]
>;
export const initializeStore = () => {
  const _store = store ?? makeStore();
  // For SSG and SSR always create a new store
  if (isServer()) return _store;

  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};
export default initializeStore();
