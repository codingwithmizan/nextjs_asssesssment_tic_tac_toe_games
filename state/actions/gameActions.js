import * as t from "../types/gameTypes";

export const setBoard = (board) => (dispatch) => {
  dispatch({
    type: t.SET_BOARD,
    payload: board,
  });
};
export const resetBoard = () => (dispatch) => {
  dispatch({
    type: t.RESET_BOARD,
  });
};

export const setPlayer = (playerOne, playerTwo) => (dispatch) => {
  dispatch({
    type: t.SET_PLAYER,
    payload: { playerOne, playerTwo },
  });
};

export const setNextPlayer = () => (dispatch) => {
  dispatch({
    type: t.SET_NEXT_PLAYER,
  });
};

export const addPointToPlayerOne = (points) => (dispatch) => {
  dispatch({
    type: t.ADD_POINT_PLAYER_ONE,
    payload: points,
  });
};
export const addPointToPlayerTwo = (points) => (dispatch) => {
  dispatch({
    type: t.ADD_POINT_PLAYER_TWO,
    payload: points,
  });
};

export const addnumOfPlay = () => (dispatch) => {
  dispatch({
    type: t.ADD_NUM_OF_PLAY,
  });
};

export const resetPlayer = () => (dispatch) => {
  dispatch({
    type: t.RESET_PLAYER,
  });
};

export const setWinner = () => (dispatch) => {
  dispatch({
    type: t.SET_WINNER,
  });
};
