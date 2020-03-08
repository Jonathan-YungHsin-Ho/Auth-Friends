import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const GETTING_DATA_START = 'GETTING_DATA_START';
export const GETTING_DATA_SUCCESS = 'GETTING_DATA_SUCCESS';
export const GETTING_DATA_FAILURE = 'GETTING_DATA_FAILURE';

export const POST_DATA_START = 'POST_DATA_START';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';

export const DELETE_DATA_START = 'DELETE_DATA_START';
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS';
export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE';

export const PUT_DATA_START = 'PUT_DATA_START';
export const PUT_DATA_SUCCESS = 'PUT_DATA_SUCCESS';
export const PUT_DATA_FAILURE = 'PUT_DATA_FAILURE';

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

export const deleteData = id => dispatch => {
  dispatch({ type: DELETE_DATA_START });
  axiosWithAuth()
    .delete(`/friends/${id}`)
    .then(res => dispatch({ type: DELETE_DATA_SUCCESS }))
    .catch(err =>
      dispatch({ type: DELETE_DATA_FAILURE, payload: err.response.message }),
    );
};

export const putData = (id, data) => dispatch => {
  dispatch({ type: PUT_DATA_START });
  axiosWithAuth()
    .put(`/friends/${id}`, data)
    .then(res => dispatch({ type: PUT_DATA_SUCCESS }))
    .catch(err =>
      dispatch({ type: PUT_DATA_FAILURE, payload: err.response.message }),
    );
};
