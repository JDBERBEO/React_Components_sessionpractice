
import './App.css';
import { CardContainer } from './components/Card/CardContainer';
import { CardView } from './components/Card/CardView';
import React, {useState, useEffect} from 'react'
import './App.css';
import { FaBeer } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserComponent } from './components/Users/UserComponent';
import { UserDataComponent } from './components/Users/UserDataComponent';
import { PostsComponent } from './components/Posts/PostsComponent';
import { PostsCommentsComponent } from './components/Posts/PostsCommentsComponent';
import {Button, Modal } from 'react-bootstrap'


function App() {

  return (<>
    <Router>
      <Switch>
        <Route path="/users/:id" children={<UserDataComponent />} />
        <Route path="/users" component={UserComponent} />
        <Route path="/posts/:id/comments" children={<PostsCommentsComponent />} />
        <Route path="/posts" component={PostsComponent} />
      </Switch>
    </Router>
    <div className="appcontainer">
      <h1>Testimonials</h1>
      <CardContainer />
    </div>
    
    </>
  );
}

export default App;

