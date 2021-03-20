import * as t from "../types/gameTypes";

export const boardReducer = (state = [...Array(9).fill(null)], action) => {
  switch (action.type) {
    case t.SET_BOARD:
      return action.payload;
    case t.RESET_BOARD:
      return [...Array(9).fill(null)];
    default:
      return state;
  }
};

const initialPlayer = {
  player1: { name: "X", points: 0 },
  player2: { name: "O", points: 0 },
  isNext: true,
  noOfPlay: 1,
  winnerPlayer: null,
};

export const playerReducer = (state = initialPlayer, action) => {
  switch (action.type) {
    case t.SET_PLAYER:
      return {
        ...state,
        player1: { ...state.player1, name: action.payload.playerOne },
        player2: { ...state.player2, name: action.payload.playerTwo },
      };
    case t.SET_NEXT_PLAYER:
      return {
        ...state,
        isNext: !state.isNext,
      };
    case t.ADD_POINT_PLAYER_ONE:
      return {
        ...state,
        player1: {
          ...state.player1,
          points: state.player1.points + action.payload,
        },
      };
    case t.ADD_POINT_PLAYER_TWO:
      return {
        ...state,
        player2: {
          ...state.player2,
          points: state.player2.points + action.payload,
        },
      };
    case t.ADD_NUM_OF_PLAY:
      return {
        ...state,
        noOfPlay: state.noOfPlay + 1,
      };
    case t.RESET_PLAYER:
      return {
        ...state,
        player1: { ...state.player1, points: 0, isWinner: false },
        player2: { ...state.player2, points: 0, isWinner: false },
        isNext: true,
        noOfPlay: 1,
        winnerPlayer: null,
      };

    case t.SET_WINNER:
      return {
        ...state,
        winnerPlayer:
          state.player1.points > state.player2.points
            ? state.player1.name
            : state.player1.points < state.player2.points
            ? state.player2.name
            : null,
      };
    default:
      return state;
  }
};
