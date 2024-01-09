import '../../styles/Form.css'
import { FormHeader } from './FormHeader'
import { TextInput } from './TextInput';
import { useState } from 'react';

export function Form({ form, handleInputChange, handleAddFieldset, handleDeleteFieldset, handleAddResponsibility, handleDeleteResponsibility, handleTextAreaChange }) {
    const [isCollapsed, setIsCollapsed] = useState(true)
    // const [fieldsetList, setFieldsetList] = useState(form.fieldsets)

    return(
        <form className="form" autoComplete='off'>
            <FormHeader
                title={form.title}
                isCollapsed={isCollapsed}
                onClick={handleToggle}
            ></FormHeader>
            { 
                !isCollapsed && (
                    form.fieldsets.map((fieldset, fieldsetIndex) => {
                        return (
                            <ul className="form__fieldset" key={fieldsetIndex}>
                                {fieldset.map((input, inputIndex) => {
                                    if (input.label !== "Responsibilities") {
                                        return <TextInput
                                            key={inputIndex} 
                                            label={input.label}
                                            form={form}
                                            fieldsetIndex={fieldsetIndex}
                                            inputIndex={inputIndex}
                                            handleInputChange={handleInputChange}
                                        ></TextInput>
                                    } else {
                                        return (
                                            <li key={inputIndex} className="responsibilities-container">
                                                <label htmlFor="" className="input-label">{input.label}</label>    
                                                <div className="textarea-container">
                                                    {
                                                        input.responsibilities.map((responsibility, i) => {
                                                            return (
                                                                <textarea key={i} name="" id="" className="textarea" onChange={(e) => handleTextAreaChange(e, form, fieldset, responsibility)}></textarea>
                                                            )
                                                        })    
                                                    }
                                                </div>
                                                <button className="default-btn add-btn" onClick={(e) => handleAddResponsibility(e, form, fieldset)}>Add Responsibilities</button>
                                                <button className="default-btn delete-btn" onClick={(e) => handleDeleteResponsibility(e, form ,fieldset)}>Delete Responsibilities</button>
                                            </li>
                                        )
                                    }
                                    
                                })}
                            </ul>
                        )
                    })
                )
            }
            {/* {
                !isCollapsed && (
                    console.log(
                        form.fieldsets.filter(fieldset => fieldset.label === "Responsibilities")
                        .responsibilities
                    )
                )
            } */}
            {
                (!isCollapsed && form.fieldsetLimit > 1) && (
                    <button className='default-btn add-btn'
                        onClick={(e) => handleAddFieldset(e, form)}
                        disabled={form.fieldsets.length >= form.fieldsetLimit}
                    >Add {form.buttonText} (max: {form.fieldsetLimit})</button>
                )
            }
            {
                (!isCollapsed && form.fieldsets.length > 1) && (
                    <button className='default-btn delete-btn'
                    onClick={(e) => handleDeleteFieldset(e, form)}
                    >Delete {form.buttonText}</button>
                )
            }
        </form>
    )
    
    function handleToggle(e) {
        e.preventDefault();
        setIsCollapsed(!isCollapsed);
    }
}