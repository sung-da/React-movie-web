import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          {/* URL을 "/" Home Route 렌더링 */}
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
