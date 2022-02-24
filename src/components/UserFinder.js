import { Fragment, useState, useEffect, Component } from 'react';
import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
  {id: 'u1', name: 'Max'},
  {id: 'u2', name: 'Tony'},
  {id: 'u3', name: 'Julia'},
]

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUser: DUMMY_USERS,
      searchTerm: '',
    }
  }

  componentDidUpdate(prevProps, prerState) {
    if (prerState.searchTerm !== this.state.searchTerm) {
     this.setState({
      filteredUser: DUMMY_USERS.filter(user => user.name.includes(this.state.searchTerm))
    })
   }
  }

  searchChangeHandler(event) {
    this.setState({searchTerm:  event.target.value})
  }

  render(){
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUser} />
      </Fragment>
    )
  }
}

//const UserFinder = () => {
//  const [filteredUser, setFilteredUser] = useState(DUMMY_USERS);
//  const [searchTerm, setSearchTerm] = useState('');

//  useEffect(() => {
//    setFilteredUser(
//      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//    )
//  }, [searchTerm])
  
//  const searchChangeHandler = (event) => {
//    setSearchTerm(event.target.value)
//  }

//  return (
//    <Fragment>
//      <div className={classes.finder} >
//        <input type='search' onChange={searchChangeHandler} />
//      </div>
//      <Users users={filteredUser} />
//    </Fragment>
//  )
//}


export default UserFinder;
