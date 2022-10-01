import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  // console.log(users);
  const handelSubmit = (event) => {
    event.preventDefault() // submit korber somy jate page reload na hoea jai
    const name = event.target.name.value
    const email = event.target.email.value
    const user = { name, email }
    console.log(user);
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => setUsers([...users, data]))



  }
  return (
    <div>
      <h2>We have {users.length}</h2>
      <form action="" onSubmit={handelSubmit}>
        <input type="text" name='name' required />
        <input type="text" name='email' required />
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
};

export default App;