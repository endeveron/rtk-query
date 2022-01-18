
import { useGetUsersQuery } from '../../../store/services/userAPI'

import './Users.scss'


const Users = () => {
  const { data: users = [], isLoading } = useGetUsersQuery('')

  const loadingEl = (
    <div>Loading...</div>
  )

  const userListEl = (
    <div className="user-list">
      { users.map(user => (
        <div className="user" key={ user.id } >
          <div className="user__name" >
            { user.name }
          </div>
        </div>
      )) }
    </div>
  )

  return (
    <div className="users page anim--page-appear">
      <h3>Users Page</h3>

      { isLoading ? loadingEl : userListEl }

    </div>
  )
}

export default Users;