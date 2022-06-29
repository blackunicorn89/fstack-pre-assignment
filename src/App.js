import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import Home from "./Home";
import Box from "./Box";
import Customcss from  "./custom_css.css"
 
function App() {
  //Sets routes to the components Home and Box and calls home component		
  return (
    <div className="App">
		<Router>
        <div>
		  <Routes>
			<Route path="/Home" element={<Home />}></Route>
			<Route path="/:id/Box" element={<Box />} ></Route>
		  </Routes>
		  <Home />		  
        </div>
      </Router>
    </div>
  );
}
export default App;