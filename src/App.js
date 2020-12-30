import {Redirect, Route, Switch} from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Services from "./Component/Services";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

function App() {
  return (
<>
<Navbar/>
<Switch>
<Route exact path="/" component={Home}></Route>
<Route  exact path="/service" component={Services}></Route>
<Route exact path="/contact" component={Contact}></Route>
<Route exact path="/about" component={About}></Route>
<Redirect to="/"/>
</Switch>
<Footer/>
</>
  );
}

export default App;
