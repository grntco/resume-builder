import { useState } from "react";

export function ResponsibilitiesContainer({form, fieldset, input, inputIndex, handleUpdateForm }) {
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
                            onChange={(e) => { handleUpdateForm(e, form, updateTextAreaText, fieldset, i,); setReceivedInput(true) }}
                            placeholder={responsibility}
                            value={receivedInput ? responsibility : ""}
                        />
                    )
                })    
            }
            <button 
                className="default-btn add-btn"
                onClick={(e) => handleUpdateForm(e, form, addResponsibility, fieldset)}
                disabled={input.responsibilities.length >= input.responsibilitiesLimit}
            >Add Responsibilities (max: {input.responsibilitiesLimit})</button>
            {
                (input.responsibilities.length > 1) && (
                    <button
                        className="default-btn delete-btn"
                        onClick={(e) => handleUpdateForm(e, form, deleteResponsibility, fieldset)}>Delete Responsibilities</button>
                )
            }
        </li>
    )

    function updateTextAreaText(form, currentFieldset, responsibilityIndex, e) {
        return {
            ...form,
            fieldsets: form.fieldsets.map(fieldset => {
                if (fieldset === currentFieldset) {
                    // _______
                    return fieldset.map(input => {
                        if (input.label === "Responsibilities") {
                            return {...input, responsibilities: input.responsibilities.map((responsibility, i) => {
                                if (i === responsibilityIndex) {
                                    responsibility = e.target.value;
                                }
                                return responsibility;
                            })}
                        } 
                        return input;
                    })
                }
                return fieldset;
            }),
        };
    }

    // ______________________



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