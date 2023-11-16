import React from 'react'
import Card from '../../Card/Card'
import classes from './UsersList.module.css'

const UsersList = props => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map(user => (
          <li key={user.id}>
            {user.name} | <b>{user.age}</b> years old
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UsersList