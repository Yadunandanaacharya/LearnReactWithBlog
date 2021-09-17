import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const title = 'Welcome to react blog';
  const likes = 50;
  // const link = 'https://www.youtube.com/';
  // const personInfo = {name:'ram' , age:30}

  return (
    <Router>
    <div className="App"> 
    <NavBar></NavBar>
      <div className="content">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* you can use either like above or <Home /> */}
        <h1> {title} </h1>
        <p>Likes {likes} times </p>
        {/* <p> {personInfo}  </p> */}
        <p>{' string Yadu'}</p>
        <h2>{' string Software developer '}</h2>
        {/* <a href="" >{1}</a>
        <p>[1, 2, 4]</p> */}
        {/* <a href={link} >Youtube</a> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
