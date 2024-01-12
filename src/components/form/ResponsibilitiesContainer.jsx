import { useState } from "react";

export function ResponsibilitiesContainer({form, fieldset, input, inputIndex, handleTextAreaChange, handleUpdateResponsibilities}) {
    const [ receivedInput, setReceivedInput ] = useState(false)

    return (
        <li key={inputIndex} className="input-item textarea-item">
            <label htmlFor="" className="input-label">{input.label}</label>    
            {
                input.responsibilities.map((responsibility, i) => {
                    return (
                        <textarea
                            key={i}
                            name=""
                            id=""
                            className="textarea"
                            onChange={(e) => {handleTextAreaChange(e, form, fieldset, i); setReceivedInput(true)}}
                            placeholder={responsibility}
                            value={receivedInput ? responsibility : ""}
                        />
                    )
                })    
            }
            <button 
                className="default-btn add-btn"
                onClick={(e) => handleUpdateResponsibilities(e, form, fieldset, addResponsibility)}
                disabled={input.responsibilities.length >= input.responsibilitiesLimit}
            >Add Responsibilities (max: {input.responsibilitiesLimit})</button>
            {
                (input.responsibilities.length > 1) && (
                    <button
                        className="default-btn delete-btn"
                        onClick={(e) => handleUpdateResponsibilities(e, form, fieldset, deleteResponsibility)}>Delete Responsibilities</button>
                )
            }
        </li>
    )

    function addResponsibility(form, currentFieldset) {
        return {
            ...form,
            fieldsets: form.fieldsets.map(fieldset => {
                if (fieldset === currentFieldset) {
                    return fieldset.map(input => {
                        if (input.label === "Responsibilities") {
                            return {...input, responsibilities: [...input.responsibilities, ""] }
                        }
                        return input;
                    })
                }
                return fieldset;
            })
        }
    }

    function deleteResponsibility(form, currentFieldset) {
        return {
            ...form,
            fieldsets: form.fieldsets.map(fieldset => {
                if (fieldset === currentFieldset) {
                    return fieldset.map(input => {
                        if (input.label === "Responsibilities") {
                            return {...input, responsibilities: [...input.responsibilities.slice(0, input.responsibilities.length - 1)] }
                        }
                        return input;
                    })
                }
                return fieldset;
            })
        }
    }
}