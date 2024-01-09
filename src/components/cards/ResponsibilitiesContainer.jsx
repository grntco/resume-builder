export function ResponsibilitiesContainer({form, fieldset, input, inputIndex, handleTextAreaChange, handleAddResponsibility, handleDeleteResponsibility}) {
    return (
        <li key={inputIndex} className="responsibilities-container">
            <label htmlFor="" className="input-label">{input.label}</label>    
            <div className="textarea-container">
                {
                    input.responsibilities.map((responsibility, i) => {
                        return (
                            <textarea
                                key={i}
                                name=""
                                id=""
                                className="textarea"
                                onChange={(e) => handleTextAreaChange(e, form, fieldset, i)}
                            />
                        )
                    })    
                }
            </div>
            <button 
                className="default-btn add-btn"
                onClick={(e) => handleAddResponsibility(e, form, fieldset)}
                disabled={input.responsibilities.length >= input.responsibilitiesLimit}
            >Add Responsibilities (max: {input.responsibilitiesLimit})</button>
            {
                (input.responsibilities.length > 1) && (
                    <button
                        className="default-btn delete-btn"
                        onClick={(e) => handleDeleteResponsibility(e, form ,fieldset)}>Delete Responsibilities</button>
                )
            }
        </li>
    )
}