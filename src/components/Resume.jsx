import '../styles/Resume.css'

export function Resume({ data }) {
    return (
        <div className="resume">
            <div className="resume__section">
                <h2 className="resume__name">{data[0].fieldsets[0][0].value}</h2>
                <ul className="resume__contact-info-container">
                    <li className="email">{data[0].fieldsets[0][1].value}</li>
                    <li className="phone-number">{data[0].fieldsets[0][2].value}</li>
                    <li className="location">{data[0].fieldsets[0][3].value}</li>
                </ul>
            </div>
            <div className="resume__section">
                <h3 className="resume__section-title">Work Experience</h3>
                {/* <div className="resume__experience-container">
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
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat veniam natus fugit! Incidunt labore libero sapiente, tempore assumenda ut ea?</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div> */}
                { 
                    data.filter(form => form.title === 'Work Experience')[0]
                    .fieldsets.map((fieldset, fieldsetIndex) => (
                            <div key={fieldsetIndex} className="resume__experience-container">
                                <div className="resume__details-container">
                                    <h4>{fieldset[0].value}</h4>
                                    <p>{fieldset[3].value} - {fieldset[4].value}</p>
                                </div>
                                <div className="resume__details-container">
                                    <p>{fieldset[1].value}</p>
                                    <p>{fieldset[2].value}</p>
                                </div>
                                <ul className="resume__responsibilities-container">
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                        )
                    )
                }
                {/* <div className="resume__experience-container">
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
                </div> */}
            </div> 
            <div className="resume__section">
                <h3 className="resume__section-title">Education</h3>
                <div className="resume__experience-container">
                    <div className="resume__details-container">
                        <h4>Greenville Technical College</h4>
                        <p>Aug. 2017 - May 2020</p>
                    </div>
                    <div className="resume__details-container">
                        <p>B.S. in Computer Science</p>
                        <p>Greenville, SC</p>
                    </div>
                    <ul className="resume__responsibilities-container">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div className="resume__experience-container">
                    <div className="resume__details-container">
                        <h4>Greenville Technical College</h4>
                        <p>Aug. 2017 - May 2020</p>
                    </div>
                    <div className="resume__details-container">
                        <p>B.S. in Computer Science</p>
                        <p>Greenville, SC</p>
                    </div>
                    <ul className="resume__responsibilities-container">
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum eum, alias possimus eius, natus suscipit inventore saepe rem doloremque assumenda optio aspernatur minima in illo.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
            </div>
            <div className="resume__section">
                <h3 className="resume__section-title">Skills</h3>
                <ul className="resume__skills-container">
                    <li className="resume__skill-item">HTML/CSS</li>
                    <li className="resume__skill-item">JavaScript</li>
                    <li className="resume__skill-item">React</li>
                    <li className="resume__skill-item">Git</li>
                    <li className="resume__skill-item">Webpack</li>
                    <li className="resume__skill-item">VS Code</li>
                    <li className="resume__skill-item">HTML/CSS</li>
                    <li className="resume__skill-item">JavaScript</li>
                    <li className="resume__skill-item">React</li>
                    <li className="resume__skill-item">Git</li>
                    <li className="resume__skill-item">Webpack</li>
                    <li className="resume__skill-item">VS Code</li>
                    <li className="resume__skill-item">Webpack</li>
                    <li className="resume__skill-item">VS Code</li>
                    <li className="resume__skill-item">HTML/CSS</li>
                </ul>
            </div>
        </div>
    )
}