export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const ISLOADING_FALSE = 'ISLOADING_FALSE';

export const ISLOADING_TRUE = 'ISLOADING_TRUE';

export const fetchDataSucess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const isLoadingFalse = () => ({
  type: ISLOADING_FALSE,
});

export const isLoadingTrue = () => ({
  type: ISLOADING_TRUE,
});

export const fetchData = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      dispatch(fetchDataSucess(data));
      dispatch(isLoadingFalse());
    });
};
