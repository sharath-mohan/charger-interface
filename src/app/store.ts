import { configureStore } from "@reduxjs/toolkit";
import chargerReducer from "../features/chargerSlice";
import stageReducer from "../features/chargerStageSlice";
import chargeOptionReducer from "../features/chargeOptionSlice";
export const store = configureStore({
  reducer: {
    charger: chargerReducer,
    stage: stageReducer,
    options: chargeOptionReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
