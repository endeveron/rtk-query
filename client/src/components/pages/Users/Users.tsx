
import { Button } from '@mui/material'
import { useGetUsersQuery, useAddUserMutation } from '../../../store/services/userAPI'

import './Users.scss'


const Users = () => {
  const { data: users = [], isLoading: isGetUsersLoading } = useGetUsersQuery('')
  const [addUser, { isLoading: isAddUserLoading }] = useAddUserMutation()


  const addUserHandler = async () => {
    try {
      const payload = await addUser({
        name: 'New User'
      }).unwrap()
      console.log('fulfilled', payload)
    } catch (error) {
      console.log('rejected', error)
    }
  }

  const loadingEl = (
    <div>Loading...</div>
  )

  const userListEl = (
    <div className="user-list">
      { isGetUsersLoading ? loadingEl :
        users.map(user => (
          <div className="user" key={ user.id } >
            <div className="user__name" >
              { user.name }
            </div>
          </div>
        )) }
    </div>
  )

  const addUserEl = (
    <div className="add-user" style={ { padding: '1rem 0' } }>
      { isAddUserLoading ? loadingEl : (
        <div className="add-user__action-wrapper">
          <Button
            variant="contained"
            onClick={ addUserHandler }
          >
            Add User
          </Button>
        </div>
      ) }
    </div>
  )

  return (
    <div className="users page anim--page-appear">
      <h3>Users Page</h3>
      { userListEl }
      { addUserEl }
    </div>
  )
}

export default Users;