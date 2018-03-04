import { REQUEST_USERS, RECEIVE_USERS, SERVER_URI } from '../constants/Page'
  
function requestUsers() {
    return {
        type: REQUEST_USERS
    }
}
  
function receiveUsers(json) {

    console.dir("json");
    console.dir(json);

    return {

        type: RECEIVE_USERS,
        users: json.data
    }
}

export function fetchUsers() {
  
    return dispatch => {
      dispatch(requestUsers())
      return fetch(SERVER_URI)
        .then(response => response.json() )
        .then(json => dispatch(receiveUsers(json)))
    }
  
}
  
