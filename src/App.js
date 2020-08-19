import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'reactstrap'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import Post from './components/Post'
import Login from './components/Auth/Login'



function App() {
  return (
    <div className='app'>
        <div className='app__header'>
              <div className='app__logo'>
                  <strong className='logoName'><i>Seraph</i></strong>
              </div>
              
        </div>
        <div className='app__body'>

          

            <Router>
              <Switch>
                  <Route exact path = '/' component={Post}/>
                  <Route exact path = '/login' component={Login}/>
              </Switch>
            </Router>


        </div>
    </div>
  );
}

export default App;
