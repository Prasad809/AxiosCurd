import axios from "axios";
import { useState } from "react";
import { Col, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { inputs } from "./components/axios";

function Home(){
    const [data,setData]=useState([])
        //axios.get("http://localhost:3000/address")
        inputs.getAll()
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    // const handleDelete=(id)=>{
    //         axios.delete("http://localhost:3000/address/"+id)
    //         .then(res=>console.log(res.data))
    //         .catch(err=>console.log(err))
    //     }
    return(
        <Container>
        <div className="row"> 
            <Col className="col-6">
            <h1>List of Users</h1>
            </Col>
            <Col className="col-6">
            <Link to={"/create"}><button className='btn btn-primary'>Add+</button></Link>
            </Col>
        </div>
            <div id="table">
                <Table striped bordered hover variant="dark">
                    <thead>
                        {/* {
                            getHeadings(data[0]).map((hi)=>
                            <th key={hi.id}>{hi}</th>)
                        } */}
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            {data.map((user)=>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td><Link to={`/read/${user.id}`}><button className='btn btn-primary'>Read</button></Link>
                                <Link to={`/update/${user.id}`}><button className='btn btn-secondary'>Update</button></Link>
                                {/* <button onClick={()=>handleDelete(user.id)}className='btn btn-warning'>Delete</button> */}
                                <button onClick={()=>inputs.delet(user.id)}className='btn btn-warning'>Delete</button></td>
                                </tr>
                            )}
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}
export default Home;
function getHeadings(obj){
    let array=[];
    for(let head in obj){
        array.push(head)
    }
    array.push("Action")
    return array
}