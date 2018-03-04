import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UserListCell from '../components/cells/UserListCell'
import UserListView from '../components/listviews/UsersListView'
import * as pageActions from '../actions/PageActions'
import { Table } from 'react-materialize'

class Page extends Component {
    componentDidMount() {
      this.props.pageActions.fetchUsers()
    }
  
    render() {
      let { displayedUsers, isFetched } = this.props.page
  
     
      let users = displayedUsers.map((user, index) => {
        return <UserListCell user={user} />
      })
  
      return (
        <div className="users__wrapper">
          
          <ul className="users">
            {
              isFetched
              ?
              <p>Loading...</p>
              :
              <Table class="col l8 center">
                <thead>
                    <th>ID</th>
                    <th>AVATAR</th>
                    <th>NAME</th>
                    <th>LAST NAME</th>
                </thead>
                <tbody>
                { users }
                </tbody>
              </Table>
              
            }
          </ul>
        </div>
      )
    }
  }
  
  function mapStateToProps(state) {
    return {
      page: state.page
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      pageActions: bindActionCreators(pageActions, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Page)