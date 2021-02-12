import Homepage from './components/Homepage/HomepageContainer';
import Issues from './components/Issues/IssuesContainer';
import Issue from './components/Issue/IssueContainer';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/issues/:id">
            <Issues />
          </Route>
          <Route exact path="/issue/:repoid/:id">
            <Issue />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
