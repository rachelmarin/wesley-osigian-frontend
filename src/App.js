import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';
import Nav from './components/Nav';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    this.setState.fetchBook();
  }
 
  render() {
    if ( this.props.loading ) {
      return <div>Loading....</div>
    }

  
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
