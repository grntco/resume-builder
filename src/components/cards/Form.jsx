import '../../styles/Form.css'
import { FormHeader } from './FormHeader'
import { TextInput } from './TextInput';
import { ResponsibilitiesContainer } from './ResponsibilitiesContainer';
import { useState } from 'react';


export function Form({ form, handleInputChange, handleAddFieldset, handleDeleteFieldset, handleAddResponsibility, handleDeleteResponsibility, handleTextAreaChange }) {
    const [isCollapsed, setIsCollapsed] = useState(true)

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
                                            value={input.value}
                                        />
                                    } else {
                                        return <ResponsibilitiesContainer
                                            key={inputIndex} 
                                            form={form}
                                            fieldset={fieldset}
                                            input={input}
                                            inputIndex={inputIndex}
                                            handleTextAreaChange={handleTextAreaChange}
                                            handleAddResponsibility={handleAddResponsibility}
                                            handleDeleteResponsibility={handleDeleteResponsibility}
                                            // placeholder={input.responsibilities}
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