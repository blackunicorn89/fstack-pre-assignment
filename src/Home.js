import React, { useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//Defines Home component and gets JSON data 
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

  //Extras the array of the Javascript objects. The button directs to component that shows more information about the user based in id. Contains also 
  //elements needed to create Boostrap Cards.
  return (
	<div>
     {loading && <div>Loading</div>}
     {!loading && (
	  <div>
        <h1>Users</h1>
		
        {data.map(item => 
		(
		<Card style={{ width: '20rem' }}>
		<Card.Body>
		<ul id="homelist">
			<Card.Title><li>{item.name}</li></Card.Title>
			<Card.Text>
			<li id="homeUsername">{"@" + item.username}</li>
			<li><a href={item.website}>{"https://" + item.website}</a></li>
			</Card.Text>
			<li><a href={"/" + item.id + "/box"} ><Button variant="primary">More information</Button></a> </li>
		</ul>
		</Card.Body>
		</Card>
		))}		
      </div>
    )}
    </div>
  )
}



export default Home;