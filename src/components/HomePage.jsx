import { useNavigate } from "react-router-dom";
import './HomePage.css'
import { Link } from "react-router-dom";
function HomePage()
{
    return(
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Craft Your Professional Resume</h1>
                <p className="hero-subtitle">
                Build, preview, and download your resume using beautiful templates.
                </p>
                <Link to="/edit" className="cta-button">Get Started</Link>
            </div>
        </div>
        
    )
}

export default HomePage