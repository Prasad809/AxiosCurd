import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { inputs } from "./axios"

function Info(){
    const [info,setInfo]=useState([])
    useEffect(()=>{
        inputs.getAll()
        //axios.get("http://localhost:3000/address")
        .then(res=>setInfo(res.data))
        .catch(err=>console.log(err))
    },[])
    return(
        <Container>
        <div className="row">
        {info.map((data)=>
        <div className="card-body">
        <h1>Welcome {data.name} !</h1>
        <h4>Name of the Candidate:{data.name}</h4>
        <h4>Email of Candidate :{data.email}</h4>
        <h4>Phone Number of Candidate :{data.phone}</h4>
        </div>
        )}
        </div>
    </Container>
    )
}
export default Info;