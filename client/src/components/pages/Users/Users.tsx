
import { Button } from '@mui/material'
import {
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation
} from '../../../store/services/userAPI'

import './Users.scss'


const Users = () => {
  const { data: users = [], isLoading: isGetUsersLoading } = useGetUsersQuery()
  const [addUser, { isLoading: isAddUserLoading }] = useAddUserMutation()
  const [updateUser, { isLoading: isUpdateUserLoading }] = useUpdateUserMutation()


  const addUserHandler = async () => {
    try {
      const payload = await addUser({
        name: 'User'
      }).unwrap()
      console.log('fulfilled', payload)
    } catch (error) {
      console.log('rejected', error)
    }
  }

  const updateUserHandler = async () => {
    try {
      const payload = await updateUser({
        id: 1,
        name: 'Updated User'
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
              { user.name + user.id }
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

  const updateUserEl = (
    <div className="update-user" style={ { padding: '1rem 0' } }>
      { isUpdateUserLoading ? loadingEl : (
        <div className="update-user__action-wrapper">
          <Button
            variant="contained"
            onClick={ updateUserHandler }
          >
            Update User
          </Button>
        </div>
      ) }
    </div>
  )

  return (
    <div className="users page anim--page-appear">
      <h3>Users Page</h3>
      { addUserEl }
      { updateUserEl }
      { userListEl }
    </div>
  )
}

export default Users;