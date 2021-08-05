import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';
import Nav from './components/Nav';

class App extends React.Component {
 
  render() {
  
    return (
    <div className="App">
          <Router> 
          <Nav/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/About" component={About}/>
              <Route exact path="/Books" component={Books}/>
              <Route component={Error}/>
            </Switch>
      </Router>

    </div>
  );
 }
}

export default App;
