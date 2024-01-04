import '../styles/Resume.css'

export function Resume() {
    return (
        <div className="resume">
            <div className="resume__personal-details">
                <h2>Grant Collins</h2>
                <div className="contact-info-container">
                    <div className="email">grantcollins03@gmail.com</div>
                    <div className="phone-number">(803) 445-3607</div>
                    <div className="location">Greenville, SC</div>
                </div>
            </div>
            <div className="work-container">
                <h3>Work Experience</h3>
                {/* Experience Container will get repeated */}
                <div className="experience-container">
                    <div>
                        <h4 className="experience-institution">Amazon</h4>
                        <p className="experience-dates">August 2020-January 2024</p>
                    </div>
                    <div className="position-container">
                        <p className="position-title">Jr. Software Developer</p>
                        <p className="position-location">Remote</p>
                        <ul className="position-responsibilities">
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="education-container">
                <h3>Education</h3>
                <div className="experience-container">
                    <div>
                        <h4 className="experience-institution">Greenville Technical College</h4>
                        <p className="experience-dates">August 2017-May 2020</p>
                    </div>
                    <div className="position-container">
                        <p className="position-title-degree">B.S. in Computer Science</p>
                        <p className="position-location">Greenville, SC</p>
                        <ul className="position-responsibilities">
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="resume__skills">
                <h3>Skills</h3>
                <div className="skills-container">
                    <ul>
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Git</li>
                        <li>Webpack</li>
                        <li>VS Code</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}