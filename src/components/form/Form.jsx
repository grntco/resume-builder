import '../../styles/Form.css'
import { FormHeader } from './FormHeader';
import { TextInput } from './TextInput';
import { ResponsibilitiesContainer } from './ResponsibilitiesContainer';
import { useState } from 'react';

export function Form({ form, handleInputChange, handleUpdateFieldsets, handleUpdateResponsibilities, handleTextAreaChange }) {
    const [isCollapsed, setIsCollapsed] = useState(form.title !== 'Personal Details');

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
                                            fieldset={fieldset}
                                            inputIndex={inputIndex}
                                            handleInputChange={handleInputChange}
                                            value={input.value}
                                        />
                                    } else {
                                        return <ResponsibilitiesContainer
                                            key={inputIndex} 
                                            form={form}
                                            fieldset={fieldset}
                                            input={input}
                                            inputIndex={inputIndex}
                                            // handleTextAreaChange={handleTextAreaChange}
                                            handleInputChange={handleInputChange}
                                            handleUpdateResponsibilities={handleUpdateResponsibilities}
                                            // handleAddResponsibility={handleAddResponsibility}
                                            // handleDeleteResponsibility={handleDeleteResponsibility}
                                        />
                                    }
                                })}
                            </ul>
                        )
                    })
                )
            }
            {
                (!isCollapsed && form.fieldsetLimit > 1) && (
                    <button className='default-btn add-btn'
                        onClick={(e) => handleUpdateFieldsets(e, form, addFieldset)}
                        disabled={form.fieldsets.length >= form.fieldsetLimit}
                    >Add {form.buttonText} (max: {form.fieldsetLimit})</button>
                )
            }
            {
                (!isCollapsed && form.fieldsets.length > 1) && (
                    <button className='default-btn delete-btn'
                    onClick={(e) => handleUpdateFieldsets(e, form, deleteFieldset)}
                    >Delete {form.buttonText}</button>
                )
            }
        </form>
    )
    
    function handleToggle(e) {
        e.preventDefault();
        setIsCollapsed(!isCollapsed);
    }

    function addFieldset(form) {
        const emptyFieldset = form.fieldsets
            .slice(0, 1)
            .flat()
            .map(input => {
                if (input.label === "Responsibilities") {
                    return {...input, responsibilities: [""]}
                }
                return { ...input, value: "" }
            });
    
        return {
            ...form,
            fieldsets: [...form.fieldsets, emptyFieldset]
        }
    }

    function deleteFieldset(form) {
        return {
            ...form,
            fieldsets: [...form.fieldsets.slice(0, form.fieldsets.length - 1)],
        }
    }
}