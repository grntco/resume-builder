export function ResumeExperience({ data, title }) {
    return (
        data.filter(form => form.title === title)[0]
        .fieldsets.map((fieldset, fieldsetIndex) => {
            return (
                <div key={fieldsetIndex} className="resume__experience-container">
                    <div className="resume__details-container">
                        <h4>{fieldset[0].value}</h4>
                        <p>{fieldset[3].value} {fieldset[3].value !== "" && fieldset[4].value !== "" ? "-" : ""} {fieldset[4].value}</p>
                    </div>
                    <div className="resume__details-container">
                        <p>{fieldset[1].value}</p>
                        <p>{fieldset[2].value}</p>
                    </div>
                    <ul className="resume__responsibilities-container">
                        {
                            fieldset.filter(input => input.label === "Responsibilities")[0]
                            .responsibilities.map((responsibility, i) => {
                                if (responsibility !== "") {
                                    return <li key={i}>{responsibility}</li>
                                }
                            })
                        }
                    </ul>
                </div>
            )
        }
    ))
}