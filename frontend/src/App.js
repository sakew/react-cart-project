import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Screen views import

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

// Components import

import NavBar from './components/NavBar';

function App() {
  return (
    <Router>

      {/*  NavBar section  */}
      <NavBar />

      {/*  SideBar section for mobile view ONLY.*/}
      {/* Backdrop placed behind the sidebar shown together with the mobile view sidebar section (will always be displayed)*/}
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
      {/* HomeScreen view */}
      {/* ProductScreen view for viewing individual products*/}
      {/* CartScreen view*/}

    </Router>
  );
}

export default App;
