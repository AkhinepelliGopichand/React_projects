import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
var user_name;
function Github() {
    const userData = useLoaderData();
    const {id} = useParams();
    console.log(userData);

    console.log(id);
  return (
   <div className="bg-cyan-500 text-center flex justify-between align-middle">
    <img width={200} className='m-4 p-4' src={userData.avatar_url} alt="" />
    <p className='flex-1'>{userData.login} : {userData.followers}</p> 
   </div>
  )
}

export default Github

 export  async function getUserData(){
    // const {username} = useParams();
    const data = await fetch(`https://api.github.com/users/AkhinepelliGopichand`);
   return  data.json();
 }