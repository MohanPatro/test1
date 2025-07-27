import  {Link,Routes,Route} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import EditResume from './components/EditResume'
import Preview from './components/preview'
import Resume from './components/template1'
import Ex from './components/ex'

import { useEffect } from 'react'
function App() {

  let [resumeData,setResumeData]=useState({
    personelData:{
      name:'',
      email:"",
      location:"",
      linkedIn:"",
      github:"",
      website:""
    },
    summary:"",
    experience:[
      {
        company:"",
        position:"",
        duration:"",
        description:""
      }
    ],
    education:[
      {
        school:"",
        duration:"",
        grade:""
      }
    ],
    projects:[
      {
        name:"",
        technologies:"",
        description:""
      }
    ],
    skills:""
  })

  useEffect(()=>{
    let data=localStorage.getItem("resumeData");

  if(data)
  {
    setResumeData(JSON.parse(data))
  }
  },[])
  
  
  return(
    <div className="app-container">
      <nav className="navBar">
        <h2 className='logo'>ResumeGen</h2>
        <div className='navLinks'>
          <Link to={"/home"}>Home</Link>
          <Link to={"/edit"}>EditResume</Link>
          <Link to={"/preview"}>Preview</Link>
        </div>
      </nav>


    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/edit' element={<EditResume resumeData={resumeData} setResumeData={setResumeData}/>}></Route>
      <Route path='/preview' element={<Preview/>}></Route>
      <Route path='/preview/template1' element={<Resume resumeData={resumeData}/>}></Route>
      <Route path='/preview/1' element={<Ex data={resumeData}/>}></Route>




      

    </Routes>
    


    </div>
  )

}

export default App
