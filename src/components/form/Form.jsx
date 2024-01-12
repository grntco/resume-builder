import '../../styles/Form.css'
import { FormHeader } from './FormHeader';
import { TextInput } from './TextInput';
import { ResponsibilitiesContainer } from './ResponsibilitiesContainer';
import { useState } from 'react';

export function Form({ form, handleUpdateForm }) {
    const [isActive, setIsActive] = useState(form.title === 'Personal Details');

    return(
        <form className="form" autoComplete='off'>
            <FormHeader
                title={form.title}
                isActive={isActive}
                handleToggle={handleToggle}
            ></FormHeader>
            { 
                isActive && (
                    form.fieldsets.map((fieldset, i) => {
                        return (
                            <ul key={i} className="form__fieldset">
                                {fieldset.map((input, j) => {
                                    if (input.label !== "Responsibilities") {
                                        return <TextInput
                                            key={j} 
                                            form={form}
                                            fieldset={fieldset}
                                            input={input}
                                            handleUpdateForm={handleUpdateForm}
                                        />
                                    }
                                    return <ResponsibilitiesContainer
                                        key={j} 
                                        form={form}
                                        fieldset={fieldset}
                                        input={input}
                                        handleUpdateForm={handleUpdateForm}
                                    />
                                })}
                            </ul>
                        )
                    })
                )
            }
            {
                (isActive && form.fieldsetLimit > 1) && (
                    <button className='default-btn add-btn'
                        onClick={(e) => handleUpdateForm(e, form, addFieldset)}
                        disabled={form.fieldsets.length >= form.fieldsetLimit}
                    >Add {form.buttonText} (max: {form.fieldsetLimit})</button>
                )
            }
            {
                (isActive && form.fieldsets.length > 1) && (
                    <button className='default-btn delete-btn'
                    onClick={(e) => handleUpdateForm(e, form, deleteFieldset)}
                    >Delete {form.buttonText}</button>
                )
            }
        </form>
    )

    function handleToggle(e) {
        e.preventDefault();
        setIsActive(!isActive);
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
        const newFieldsets = [...form.fieldsets, emptyFieldset]
        return updateFieldsets(newFieldsets)
    }

    function deleteFieldset(form) {
        const newFieldsets = [...form.fieldsets.slice(0, form.fieldsets.length - 1)]
        return updateFieldsets(newFieldsets)
    }

    function updateFieldsets(newFieldsets) {
        return {
            ...form,
            fieldsets: newFieldsets,
        }
    }
}