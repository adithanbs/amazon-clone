
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from "./Header";
import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
              <Switch>

                <Route path="/">
                  <Header/>
                </Route>
                
              </Switch>
      </div>
    </Router>
  );
}

export default App;