import './Ex.css'
function Ex({data})
{
    return(
        <div className="resume-container">
            <div className="head">
                <div className="name">
                    {data.personelData.name}
                </div>
                <div className="contact">
                    <span>{data.personelData.email}</span>
                    <span>{data.personelData.linkedIn}</span>
                    <span>{data.personelData.location}</span>
                    <span>{data.personelData.github}</span>
                    <span>{data.personelData.website}</span>
                </div>
            </div>

            <div className='block'>
                <h2 className='title'>Personel Details</h2>
                <p className='text'>{data.summary}</p>
            </div>

           {
                data.experience && <div className='block'>
                <h2 className='title'>Professional Experience</h2>
                {
                    data.experience.map((item,index)=>{
                        return(
                            <div>
                                <div className='exp-pos'>
                                    <span className='position'>{item.position}</span>
                                    <span className='time'>{item.duration}</span>
                                </div>
                                <p className='companyName'>{item.company}</p>
                                <p className='text'>{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>
           } 




           {
                data.experience && <div className='block'>
                <h2 className='title'>Education</h2>
                {
                    data.education.map((item,index)=>{
                        return(
                            <div>
                                <div className='exp-pos'>
                                    <span className='collegeName'>{item.school}</span>
                                    <span className='time'>{item.duration}</span>
                                </div>
                                <p className='companyName'>{item.grade}</p>
                                
                            </div>
                        )
                    })
                }
            </div>
           } 




            {
                data.projects && <div className='block'>
                <h2 className='title'>Projects</h2>
                {
                    data.projects.map((item,index)=>{
                        return(
                            <div>
                                <div className='exp-pos'>
                                    <span className='collegeName'>{item.name}</span>
                                </div>
                                <span className='time'>{item.technologies}</span>

                                <p className='text'>{item.description}</p>
                                
                            </div>
                        )
                    })
                }
            </div>
           } 


           <div className='block'>
                <h2 className='title'>skills</h2>
                <p className='text'>{data.skills}</p>
            </div>

        </div>
    )
}

export default  Ex