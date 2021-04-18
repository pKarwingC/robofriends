import { 
    CHANGE_SEARCH_FIELD ,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = () => (dispatch) => {
    dispatch({
        type: REQUEST_ROBOTS_PENDING
    });

    fetch('http://jsonplaceholder.typicode.com/users')
    .then(responses => responses.json())
    .then(users => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: users}))
    .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}));
};
