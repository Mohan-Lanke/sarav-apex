import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import './index.css'; 
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import RoutingComponent from './routes/RoutingComponent';

function App() {

  return (
    <Router>
      <HeaderComponent />
      <main>
        <RoutingComponent />  {/* Use the RoutingComponent component to handle routing */}
      </main>
      <FooterComponent />
    </Router>
  )
}

export default App
