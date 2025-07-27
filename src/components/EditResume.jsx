import './EditResume.css'

function EditResume({resumeData,setResumeData})
{

    function saveData()
    {
        localStorage.setItem("resumeData",JSON.stringify(resumeData))
    }

    function addBlock(section,feilds)
    {
        setResumeData({...resumeData,[section]:[...resumeData[section],feilds]})
    }


    function removeBlock(section,index)
    {
        let data=resumeData[section].filter((_,i)=>index!=i)

        setResumeData({...resumeData,[section]:data})

    }

    function updatePersonelInfo(feild,value)
    {
        let personelInfo=resumeData["personelData"];
        personelInfo[feild]=value;
        setResumeData({...resumeData,"personelData":{...personelInfo}})
    }
    function updateFeild(feild,value)
    {
        setResumeData({...resumeData,[feild]:value})
    }

    function updateArrayFeild(section,index,feild,value)
    {
        let data=resumeData[section];

        let updatedData=data.map((item,i)=> i==index ? {...item,[feild]:value}:item);

        setResumeData({...resumeData,[section]:updatedData})
    }



    return(
        <div className="form-container">
            <div className="form-group">
                <h2>Personel Information</h2>
                <div className='grouped'>
                    <input placeholder="enter name" value={resumeData.personelData.name} onChange={(e)=>updatePersonelInfo("name",e.target.value)}></input>
                    <input placeholder="enter email" value={resumeData.personelData.email} onChange={(e)=>updatePersonelInfo("email",e.target.value)}></input>
                    <input placeholder="enter location" value={resumeData.personelData.location} onChange={(e)=>updatePersonelInfo("location",e.target.value)}></input>
                    <input placeholder="enter linked In" value={resumeData.personelData.linkedIn} onChange={(e)=>updatePersonelInfo("linkedIn",e.target.value)}></input>
                    <input placeholder="enter Github" value={resumeData.personelData.github} onChange={(e)=>updatePersonelInfo("github",e.target.value)}></input>
                    <input placeholder="enter websiteurl" value={resumeData.personelData.website} onChange={(e)=>updatePersonelInfo("website",e.target.value)}></input>
                </div>
            </div>

            <div className="form-group">
                <h2>Summary</h2>
                <textarea placeholder='enter your summary'   value={resumeData.summary} onChange={(e)=>updateFeild("summary",e.target.value)}></textarea>
            </div>


            <div className="form-group">
                <div>
                    <h2>Experience</h2>
                    <button className='add' onClick={()=>addBlock("experience",{company:"",position:"",duration:"",description:""})}>Add Experience</button>
                </div>
                {
                    resumeData.experience.map((exp,index)=>{
                        return(
                            <div key={index}>
                                <input type="text" placeholder='company name' value={exp.company} onChange={(e)=>updateArrayFeild("experience",index,"company",e.target.value)}/>
                                <input type="text" placeholder='Position' value={exp.position} onChange={(e)=>updateArrayFeild("experience",index,"position",e.target.value)}/>
                                <input type="text"  placeholder='Duration' value={exp.duration} onChange={(e)=>updateArrayFeild("experience",index,"duration",e.target.value)}/>
                                <input type="text"  placeholder='description' value={exp.description} onChange={(e)=>updateArrayFeild("experience",index,"description",e.target.value)}/>
                                <div>
                                    {
                                        resumeData.experience.length>1 &&
                                        <button className='rmv' onClick={()=>removeBlock("experience",index)}>Remove</button>
                                    }
                                </div>
                                
                            </div>
                        )
                    })

                }
            </div>




             <div className="form-group">
                <div>
                    <h2>Education</h2>
                    <button className='add' onClick={()=>addBlock("education",{school:"",duration:"",grade:""})}>Add Education</button>

                </div>
                {
                    resumeData.education.map((edu,index)=>{
                        return(
                            <div key={index} className='grouped'>
                                <input type="text" placeholder='School' value={edu.school} onChange={(e)=>updateArrayFeild("education",index,"school",e.target.value)}/>
                                <input type="text" placeholder='Duration' value={edu.duration} onChange={(e)=>updateArrayFeild("education",index,"duration",e.target.value)}/>
                                <input type="text"  placeholder='Grade' value={edu.grade} onChange={(e)=>updateArrayFeild("education",index,"grade",e.target.value)}/>

                                 <div>
                                    {
                                        resumeData.education.length>1 &&
                                        <button className='rmv' onClick={()=>removeBlock("education",index)}>Remove</button>
                                    }
                                </div>
                            </div>
                        )
                    })
                    
                }
            </div>




            <div className="form-group">
                <div>
                    <h2>Projects</h2>
                    <button className='add' onClick={()=>addBlock("projects",{name:"",technologies:"",description:""})}>Add Projects</button>

                </div>
                {
                    resumeData.projects.map((pro,index)=>{
                        return(
                            <div key={index}>
                                <input type="text" placeholder='project name' value={pro.name} onChange={(e)=>updateArrayFeild("projects",index,"name",e.target.value)}/>
                                <input type="text" placeholder='technologies used' value={pro.technologies} onChange={(e)=>updateArrayFeild("projects",index,"technologies",e.target.value)}/>
                                <textarea placeholder='enter project description' value={pro.description} onChange={(e)=>updateArrayFeild("projects",index,"description",e.target.value)}></textarea>
                                 <div>
                                    {
                                        resumeData.projects.length>1 &&
                                        <button className='rmv' onClick={()=>removeBlock("projects",index)}>Remove</button>
                                    }
                                </div>
                            </div>
                        )
                    })

                }
            </div>


             <div className="form-group">
                <h2>Skills</h2>
                <textarea placeholder='enter your skills  (node js, ReactJs,Mysql .....)' value={resumeData.skills} onChange={(e)=>updateFeild("skills",e.target.value)}></textarea>
            </div>


                <div>
                    <button className='add' onClick={()=>saveData()}>Save Data</button>
                </div>
        </div>
    )
}

export default EditResume