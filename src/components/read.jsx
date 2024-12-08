import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { inputs } from "./axios";

const Read = () => {
    const [data, setData] = useState({})
    const { id } = useParams();
    useEffect(() => {
        inputs.get(id)
            //axios.get("http://localhost:3000/address/"+id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <Container>
            <div className="card-body">
                <h1>Welcome {data.name} !</h1>
                <h4>Name of the Candidate:{data.name}</h4>
                <h4>Email of Candidate :{data.email}</h4>
                <h4>Phone Number of Candidate :{data.phone}</h4>
                <Link to={`/update/${data.id}`}><button className='btn btn-secondary'>Update</button></Link>
                <Link to={"/home"} ><button className='btn btn-warning'>Back</button></Link>
            </div>
        </Container>
    )
}
export default Read;