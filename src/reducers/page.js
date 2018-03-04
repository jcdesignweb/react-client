import {
    REQUEST_USERS,
    RECEIVE_USERS
  } from '../constants/Page'
  
  const initialState = {
    isFetched: false,
    users: [],
    displayedUsers: []
  }
  
  export default function users(state = initialState, action) {
  
    switch (action.type) {
      case REQUEST_USERS:
        return {
          ...state,
          isFetched: true
        }
  
      case RECEIVE_USERS:
      
        let users = action.users.map(user => {
          
          return user
        })
  
        return {
          ...state,
          users,
          displayedUsers: users.slice(0, 60),
          isFetched: false
        }
        
      default:
        return state
    }
  
  }