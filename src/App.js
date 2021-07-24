import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"  component={Home}/>
        </Switch>
        <Switch>
          <Route exact path="/projects"  component={Projects}/>
        </Switch>
        <Switch>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
        <Footer />
        </Router>
    </>
  )
}