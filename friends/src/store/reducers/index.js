import {
  GETTING_DATA_START,
  GETTING_DATA_SUCCESS,
  GETTING_DATA_FAILURE,
  POST_DATA_START,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE,
  DELETE_DATA_START,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_FAILURE,
  PUT_DATA_START,
  PUT_DATA_SUCCESS,
  PUT_DATA_FAILURE,
} from '../actions';

const initialState = {
  data: [],
  isGetting: false,
  isDeleting: false,
  isPosting: false,
  isPutting: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_DATA_START:
      return {
        ...state,
        isGetting: true,
        error: '',
      };
    case GETTING_DATA_SUCCESS:
      return {
        ...state,
        isGetting: false,
        data: action.payload,
      };
    case GETTING_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case POST_DATA_START:
      return {
        ...state,
        isPosting: true,
        error: '',
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        isPosting: false,
      };
    case POST_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_DATA_START:
      return {
        ...state,
        isDeleting: true,
        error: '',
      };
    case DELETE_DATA_SUCCESS:
      return {
        ...state,
        isDeleting: false,
      };
    case DELETE_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case PUT_DATA_START:
      return {
        ...state,
        isPutting: true,
        error: '',
      };
    case PUT_DATA_SUCCESS:
      return {
        ...state,
        isPutting: false,
      };
    case PUT_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
