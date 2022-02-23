import { Fragment, useState, useEffect } from 'react';
import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
  {id: 'u1', name: 'Max'},
  {id: 'u2', name: 'Tony'},
  {id: 'u3', name: 'Julia'},
]

const UserFinder = () => {
  const [filteredUser, setFilteredUser] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUser(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    )
  }, [searchTerm])
  
  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <Fragment>
      <div className={classes.finder} >
        <input type='search' onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUser} />
    </Fragment>
  )
}


export default UserFinder;
