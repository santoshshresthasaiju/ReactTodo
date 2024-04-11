import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Counter from './components/Counter.jsx'
import Navbar from './Navbar.jsx';
import TodoApp from './components/TodoApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
        
        <route path="/Navbar" component={Navbar}/>
        <Route path="/TodoApp" exact component={TodoApp} />bv
        <Route path="/about" component={About} />
  </Routes>
  </BrowserRouter>
    
      
      <App/>
    
    {/* <App/> */}
  </React.StrictMode>,
)
