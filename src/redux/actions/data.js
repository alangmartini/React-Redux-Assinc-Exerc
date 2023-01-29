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

const TWO_SECONDS = 2000;

export const fetchData = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => {
        dispatch(fetchDataSucess(data));
        dispatch(isLoadingFalse());
      }, TWO_SECONDS);
    });
};
