import React, {useEffect, useState} from 'react';
import { useLoaderData } from 'react-router-dom';



function Github() {
    const data = useLoaderData();
   /* const [data, setData] = useState([])
    useEffect( () => {
        fetch("https://github.com/Jitendra9430/React-Series.git")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    },[])*/
    
    return (
        <div className='bg-gray-600 text-center m-4 p-4 text-white text-3 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Jitendra9430");
    return response.json();

}