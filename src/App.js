import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

const TopicList = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Topic List Page</h1>
      <Link to={`${props.match.url}/12`}>Topic 12</Link>
      <Link to={`${props.match.url}/13`}>Topic 13</Link>
      <Link to={`${props.match.url}/14`}>Topic 14</Link>
    </div>
  );
};

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <Link to="/topics">Topics</Link>
      <h1>Topic Detail Page : {props.match.params.topicId} </h1>
    </div>
  );
};


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/topics' component={TopicList} />
        <Route path='/topics/:topicId' component={TopicDetail} />
        <Route path='/blog/topics/:topicId' component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;
