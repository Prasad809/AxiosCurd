import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { inputs } from "./axios";

const Update = () => {
    const [values, setValues] = useState({})
    const { id } = useParams();
    useEffect(() => {
        inputs.get(id)
            //axios.get("http://localhost:3000/address/"+id)
            .then(res => setValues(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        inputs.put(id, values)
            //axios.put("http://localhost:3000/address/"+id,values)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <Container>
            <h1>Update</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="id1" placeholder="Enter Name" value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} /><br /><br />
                <input type="email" id="id2" placeholder="Enter Email" value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} /><br /><br />
                <input type="number" id="id3" placeholder="Enter PhoneNumber" value={values.phone} onChange={e => setValues({ ...values, phone: e.target.value })} /><br /><br />
                <button type="submit" className='btn btn-primary'>submit</button>
                <Link to={"/home"}><button className='btn btn-secondary'>Back</button></Link>
            </form>
        </Container>
    )
}
export default Update;