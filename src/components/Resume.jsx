import '../styles/Resume.css'

export function Resume() {
    return (
        <div className="resume">
            <div className="resume__section">
                <h2 className="resume__name">Grant Collins</h2>
                <ul className="resume__contact-info-container">
                    <li className="email">grantcollins03@gmail.com</li>
                    <li className="phone-number">(803) 445-3607</li>
                    <li className="location">Greenville, SC</li>
                </ul>
            </div>
            <div className="resume__section">
                <h3 className="resume__section-title">Work Experience</h3>
                {/* Experience Container will get repeated */}
                <div className="resume__experience-container">
                    <div className="resume__details-container">
                        <h4>Amazon</h4>
                        <p>Aug. 2020 - Jan. 2024</p>
                    </div>
                    <div className="resume__details-container">
                        <p>Jr. Software Developer</p>
                        <p>Remote</p>
                    </div>
                    <ul className="resume__responsibilities-container">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
            </div>
            <div className="resume__section">
                <h3 className="resume__section-title">Education</h3>
                {/* <div className="experience-container">
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
                </div> */}
            </div>
            <div className="resume__section">
                <h3 className="resume__section-title">Skills</h3>
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