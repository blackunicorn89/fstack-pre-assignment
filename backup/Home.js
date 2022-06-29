import React, { useEffect, useState} from 'react';
import axios from 'axios';
import {Route, BrowserRouter as Router, Link, Routes} from 'react-router-dom';
import App from './App';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
  

	
    <div>

	
	
    {loading && <div>Loading</div>}
    {!loading && (
	  <div>
        <h2>Doing stuff with data</h2>
        {data.map(item => (<ul>
			<li>{item.name}</li>
			<li>@{item.username}</li>
			<li>{item.website}</li>
			<li>{item.address.street}</li>
			<li><Link to="/App">More information</Link></li>
			<li><button type="button">More information</button></li>
		</ul>))}
		
		
      </div>
    )}
	
    </div>
  )
}

export default Home;