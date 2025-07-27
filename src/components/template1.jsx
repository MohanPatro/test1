import  './template1.css'
export default function Resume({resumeData}) {
  return (
    <div className='container'>
      {/* Header */}
      <div className='header'>
        <h1 className='name'>
          {resumeData.personelData.name}
        </h1>
        <div  className='contactInfo'>
          <span>{resumeData.personelData.email}</span>
          <span>{resumeData.personelData.location}</span>
          {resumeData.personelData.linkedIn && (
            <span>{resumeData.personelData.linkedIn}</span>
          )}
          {resumeData.personelData.github && (
            <span>{resumeData.personelData.github}</span>
          )}
          {resumeData.personelData.website && (
            <span>{resumeData.personelData.website}</span>
          )}
        </div>
      </div>

      {/* Summary */}
      {resumeData.summary && (
        <section className='section'>
          <h2 className="sectionTitle">
            Professional Summary
          </h2>
          <p className='summary'>
            {resumeData.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      <section className='section'>
        <h2 className="sectionTitle">
          Professional Experience
        </h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className='experienceItem'>
            <div className='experienceHeader'>
              <h3 className='positionTitle'>
                {exp.position}
              </h3>
              <span className='duration'>
                {exp.duration}
              </span>
            </div>
            <p className='company'>{exp.company}</p>
            <p className='description'>{exp.description}</p>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className='section' >
        <h2 className="sectionTitle">
          Education
        </h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className='educationItem'>
            <div className='educationHeader'>
              <div>
                <h3 className='schoolName'>
                  {edu.school}
                </h3>
                <p className='grade'>{edu.grade}</p>
              </div>
              <span className='duration'>
                {edu.duration}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className='section'>
        <h2 className="sectionTitle">
          Projects
        </h2>
        {resumeData.projects.map((project, index) => (
          <div key={index} className='projectItem'>
            <h3 className='projectName'>
              {project.name}
            </h3>
            <p className='technologies'>
              Technologies: {project.technologies}
            </p>
            <p className='description'>
              {project.description}
            </p>
          </div>
        ))}
      </section>

      {/* Skills */}
      {resumeData.skills && (
        <section className='section'>
          <h2 className="sectionTitle">
            Technical Skills
          </h2>
          <p className='skills'>
            {resumeData.skills}
          </p>
        </section>
      )}
    </div>
  );
}