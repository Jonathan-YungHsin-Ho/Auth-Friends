import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const GETTING_DATA_START = 'GETTING_DATA_START';
export const GETTING_DATA_SUCCESS = 'GETTING_DATA_SUCCESS';
export const GETTING_DATA_FAILURE = 'GETTING_DATA_FAILURE';

export const POST_DATA_START = 'POST_DATA_START';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';

export const getData = () => dispatch => {
  dispatch({ type: GETTING_DATA_START });
  axiosWithAuth()
    .get('/friends')
    .then(res => dispatch({ type: GETTING_DATA_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: GETTING_DATA_FAILURE,
        payload: err.response.message,
      }),
    );
};

export const postData = data => dispatch => {
  dispatch({ type: POST_DATA_START });
  axiosWithAuth()
    .post('/friends', data)
    .then(res => dispatch({ type: POST_DATA_SUCCESS }))
    .catch(err =>
      dispatch({ type: POST_DATA_FAILURE, payload: err.response.message }),
    );
};
