import axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { inputs } from "./axios";

const Create = () => {
    const [values, setValues] = useState({})
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        //axios.post("http://localhost:3000/address",values)
        inputs.post(values)
            .then(res => {
                console.log(res.data);
                navigate("/home");
            })
            .catch(err => console.log(err))
    }
    return (
        <Container id="demo1">
            <h1>create</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="id1" placeholder="Enter Name" onChange={e => setValues({ ...values, name: e.target.value })} /><br /><br />
                <input type="email" id="id2" placeholder="Enter Email" onChange={e => setValues({ ...values, email: e.target.value })} /><br /><br />
                <input type="number" id="id3" placeholder="Enter PhoneNumber" onChange={e => setValues({ ...values, phone: e.target.value })} /><br /><br />
                <button type="submit" className='btn btn-primary' id="btn1">submit</button>
                <Link to={"/home"}><button className='btn btn-secondary' id="btn2">Back</button></Link>
            </form>
        </Container>
    )
}
export default Create;