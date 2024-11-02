import React from 'react';
 import {Route, HashRouter} from "react-router-dom";
 import Portfolio from './components/Pages/Portfolio/portfolio';
 import About from './components/Pages/About/about';
 import Home from './components/Pages/Home/home';
 import  { useEffect } from 'react';

 import './App.css';

 function App() {
  useEffect(() => {
    document.title = 'Warner Web Development';
  }, []);
   return (
     <HashRouter basename='/'>
    <div>
     <Route exact path="/" component={Home} />
     <Route exact path="/portfolio" component={Portfolio} />
     <Route path="/about" component={About}exact />
    </div>
   </HashRouter>
   );
 }
export default App;