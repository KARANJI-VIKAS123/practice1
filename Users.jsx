import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Users(props) {

    const[users,setUsers]=useState([{}]);

let loadusers=async()=>{

let users=await axios.get("https://randomuser.me/api/?results=50");
setUsers(users.data.results);


}

useEffect(()=>{
loadusers();

},[])


function sendUserData(user){
props.sendData(user)
}
  return (
    <div>Users


       <table className='table table-bordered shadow table-striped '>

        <thead>
            <tr>
                <th>Name</th>
                <th>City</th>
                <th>Country</th>
                <th>Postcode</th>
            </tr>
        </thead>

<tbody>
    {
        users.map(user=>
            <tr onMouseOver={()=>sendUserData(user)}>
                <td>{user.name?.first}</td>
                <td>{user.location?.city}</td>
                <td>{user.location?.country}</td>
                <td>{user.location?.postcode}</td>
            </tr>

        )
    }
</tbody>

       </table>
       
    </div>
  )
}

export default Users