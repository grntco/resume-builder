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
            </div> 
            <div className="resume__section">
                <h3 className="resume__section-title">Education</h3>
                { 
                    data.filter(form => form.title === 'Education')[0]
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