import React, { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Card from "react-bootstrap/Card";

//Defines Box component and gets JSON data based on userid got from the Home component
const Box = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const {id}  = useParams();
  const userid = id[0]

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get("https://jsonplaceholder.typicode.com/users/" + userid);
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  //Extras one user (one Javascript object) as a list.  Contains also elements needed to create Boostrap Card.	
  return (
   <div>
 
		<p><a href="/">Back to home</a></p>
   
   <h1>More Information About the user</h1>
   
	{loading && <div>Loading</div>}
    {!loading && (
	  <div> 
	  <Card className="flex-fill" style={{ width: '30rem' }}>
	  <Card.Body>
	  <Card.Text>
	  
        <ul id="boxlist">
			<li>{"name: " + data.name}</li>
			<li>{"username: " + data.username}</li>
			<li>{"email: " + data.email}</li>
			<li>{"phone: " + data.phone}</li>
			<li>{"company: " + data.company.name}</li>
			<li>{"website: " + data.website}</li>
			<li>address:</li>
			 <div id="innerList">
			  <li>{"street: " + data.address.street}</li>
			  <li>{"suite: " + data.address.suite}</li>
			  <li>{"city: " + data.address.city}</li>
			  <li>{"zipcode: " + data.address.zipcode}</li>
			 </div>
	    </ul>
	 </Card.Text>
	 </Card.Body>
	 </Card>
      </div>
    )}
    </div>
  )
}
export default Box;