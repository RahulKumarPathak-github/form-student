import { useState } from 'react'

import './App.css'

function App() {
  
const [input , setSInupt] =  useState({
  prn: '',
  firstname: '',
  lastname: '',
  email: '',
  date: '',
  gender: '',
  phonenumber: '',
  address: '',
  coursename: '',
  branchname: ''
});
const handle= (e)=>{
  setSInupt({...input, [e.target.name]:[e.target.value]})
 console.log(input)
}

const greet = (e)=>{
  e.preventDefault()
  console.log(input)
 }
  return (
    <>
    <div className='container'>
      <h1>Student form</h1>
<form onSubmit={greet}>
  <label htmlFor="prn">Prn</label>
  <input type="text"  placeholder='Enter  id' name="prn" onChange={(e)=> handle(e)}/>

  
  <label htmlFor="firstname">First-name</label>
  <input type="text"  placeholder='Enter first-name' name="firstname"  onChange={(e)=> handle(e)}/>

  
  
  <label htmlFor="lastname">Last-name</label>
  <input type="text"  placeholder='Enter last-name' name="lastname" onChange={(e)=> handle(e)}/>

  
  
  <label htmlFor="email">email</label>
  <input type="text"  placeholder='Enter email' name="email" onChange={(e)=> handle(e)}/>

  
  
  <label htmlFor="date">date</label>
  <input type="date"  placeholder="date"  name="date" onChange={(e)=> handle(e)}/>

  
  
  <label htmlFor="gender">Gender</label>
  <input type="text"  placeholder='Enter gender' name="gender" onChange={(e)=> handle(e)}/>

  
  
  <label htmlFor="phonenumber">Phone-number</label>
  <input type="text"  placeholder='Enter phone-number' name="phone-number" onChange={(e)=> handle(e)}/>

  
  
  <label htmlFor="address">Address</label>
  <input type="text"  placeholder='Enter address' name="address" onChange={(e)=> handle(e)}/>

  
  
  <label htmlFor="coursename">Course_name</label>
  <input type="text"  placeholder='Enter course-name' name="course_name" onChange={(e)=> handle(e)}/>

  
  
  <label htmlFor="branchname">Branch_name</label>
  <input type="text"  placeholder='branch-name' name="branch_name" onChange={(e)=> handle(e)}/>

  
  <button   >subimt</button>

</form>
    </div>

    </>
  )
}

export default App
