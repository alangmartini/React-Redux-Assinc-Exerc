export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const TOGGLE_ISLOADING = 'TOGGLE_ISLOADING';

export const fetchDataSucess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const toggleIsLoading = () => ({
  type: TOGGLE_ISLOADING,
});

export const fetchData = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      dispatch(fetchDataSucess(data));
      dispatch(toggleIsLoading());
    });
};
