import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      {/*  NavBar section  */}
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
    </div>
  );
}

export default App;
