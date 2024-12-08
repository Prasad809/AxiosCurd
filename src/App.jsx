import {  Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './home'
import Create from './components/create'
import Read from './components/read'
import Update from './components/update'
import Info from './components/info'
// import RecipeReviewCard from './components/fetching'

function App() {
  return (
    <>
      <h1>CURD Oparations</h1>
      <Link to={"/home"}><button className='btn btn-primary'>Home</button></Link>
      <Link to={"/info"}><button className='btn btn-secondary'>Info</button></Link>
      {/* <RecipeReviewCard/> */}
      <Routes>
        <Route path='/home'element={<Home/>}></Route>
        <Route path='/create'element={<Create/>}></Route>
        <Route path='/read/:id'element={<Read/>}></Route>
        <Route path='/update/:id'element={<Update/>}></Route>
        <Route path='/info'element={<Info/>}></Route>
      </Routes>
    </>
  )
}

export default App
