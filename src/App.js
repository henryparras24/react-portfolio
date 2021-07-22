import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
        <Switch>
          <Route path="/projects" exact component={Projects}/>
        </Switch>
        <Switch>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
        </Router>
    </>
  )
}