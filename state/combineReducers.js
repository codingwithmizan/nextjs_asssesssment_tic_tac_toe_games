import { combineReducers } from "redux";
import { boardReducer, playerReducer } from "./reducer/gameReducers";

export const rootReducer = combineReducers({
  board: boardReducer,
  players: playerReducer,
});
