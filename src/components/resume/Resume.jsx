import '../../styles/Resume.css'
import '../../styles/mediaQueries.css'
import { ResumeExperience } from './ResumeExperience'
// import { useState } from 'react'

export function Resume({ data }) {
    // const [ firstLoad, setFirstLoad ] = useState(true)

    // const resume
    
    return (
        <div className="resume" id="resume">
            <div className="resume__section">
                <h2 className="resume__name">{data[0].fieldsets[0][0].value}</h2>
                <ul className="resume__contact-info">
                    <li>{data[0].fieldsets[0][1].value}</li>
                    <li>{data[0].fieldsets[0][2].value}</li>
                    <li>{data[0].fieldsets[0][3].value}</li>
                </ul>
            </div>
            <div className="resume__section">
                <h3 className="resume__section-title">Work Experience</h3>
                <ResumeExperience data={data} title={"Work Experience"} />
            </div> 
            <div className="resume__section">
                <h3 className="resume__section-title">Education</h3>
                <ResumeExperience data={data} title={"Education"} />
            </div>
            <div className="resume__section">
                <h3 className="resume__section-title">Skills</h3>
                <ul className="resume__skills-container">
                    {
                        data.filter(form => form.title === "Skills")[0]
                        .fieldsets
                        .flat()
                        .map((input, i) => {
                            if (input.value !== "") {
                                return <li key={i} className="resume__skill-item">{input.value}</li>
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    )
}