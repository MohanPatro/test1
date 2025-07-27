
import image from '../assets/image.png'
import image1 from "../assets/image1.png"
import {useNavigate} from 'react-router-dom'
import './preview.css'
function Preview()
{
    let navigate=useNavigate()
    let  templates=[
        {name:"classic",component:"template1",preview:image},
        {name:"pro",component:"template2",preview:image1},
    ]
    return(
        <div className='template-cards'>
            {
                templates.map((template,index)=>{
                    return (
                        <div className='card' onClick={()=>navigate(`/preview/${template.component}`)}>
                            <img src={template.preview} width="80%" height="90%" alt="" />
                            <div>
                                <h3>{template.name}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Preview