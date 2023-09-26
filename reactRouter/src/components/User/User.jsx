import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {username} = useParams();
    const [userData, setUserData] = useState([])

    console.log(username);
    useEffect(() => {
       ( async ()=>{
            const data = await fetch(`https://api.github.com/users/${username}`);
            const userData = await data.json();
            setUserData(userData)
        })();
      
       
    }, [username])

  return (
   <div className="bg-cyan-500 text-center flex justify-between align-middle">
    <img width={200} className='m-4 p-4' src={userData.avatar_url} alt="" />
    <p className='flex-1'>{userData.login} : {userData.followers}</p> 
   </div>
  )
}

export default User