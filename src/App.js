import React, {useEffect, useContext} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import CreatePage from './Pages/Create';
import View from './Pages/ViewPost';
import Post from './store/PostContext';


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
        <Router>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/create'>
            <CreatePage/>
          </Route>
          <Route path='/view'>
            <View/>
          </Route>
        </Router>
      </Post>
      
    </div>
  );
}

export default App;
