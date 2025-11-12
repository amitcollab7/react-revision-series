import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/amitcollab7')
    //     .then(resp => resp.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])
    
    return ( 
        <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="Git pic" width={300}/>
        </div> 
    );
}

export default Github;

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/amitcollab7');
    
    return response.json();
}