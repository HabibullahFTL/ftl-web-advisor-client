import React, { useContext } from 'react';
import { UserContext } from '../../App';

const NotFound = () => {
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    // const change = ()=>{
    //     fetch(`http://localhost:3005/update-service?service_id=607d138999636e20f42f971e`,{
    //         method: "PATCH",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body: JSON.stringify({name:"Dhuru"})
    //     })
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // }
    return (
        <div className="d-flex justify-content-center align-items-center text-danger flex-column" style={{height:"400px"}}>
            <h1><i className="fas fa-trash"></i></h1>
            <h2>Not Found</h2>
            <hr/>
        </div>
    );
};

export default NotFound;