import '../../styles/Form.css'
import { FormHeader } from './FormHeader'
import { TextInput } from './TextInput';
import { useState } from 'react';

export function Form({ data, formIndex}) {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [fieldsetList, setFieldsetList] = useState(data[formIndex].fieldsets)

    return(
        <form className="form" autoComplete='off'>
            <FormHeader
                title={data[formIndex].title}
                isCollapsed={isCollapsed}
                onClick={handleToggle}
            ></FormHeader>
            { 
                !isCollapsed && (
                    fieldsetList.map((fieldset, fieldsetIndex) => {
                        return (
                            <ul className="form__fieldset" key={fieldsetIndex}>
                                {fieldset.map((input, inputIndex) => {
                                    return <TextInput
                                        label={input.label}
                                        key={inputIndex} 
                                        formIndex={formIndex} 
                                        fieldsetIndex={fieldsetIndex}
                                        inputIndex={inputIndex}
                                        value={input.value} 
                                        data={data}/>
                                })}
                            </ul>
                        )
                    })
                )}
            {
                (!isCollapsed && data[formIndex].fieldsetLimit > 1) && (
                    <button className='default-btn'
                        onClick={handleAddFieldset}
                        // disabled={data[formIndex].fieldsets.length >= data[formIndex].fieldsetLimit}
                    >Add {data[formIndex].buttonText} (max: {data[formIndex].fieldsetLimit})</button>
                )
            }
            {
                (!isCollapsed && fieldsetList.length > 1) && (
                    <button className='default-btn'
                    onClick={handleDeleteFieldset}
                    >Delete {data[formIndex].buttonText}</button>
                )
            }
        </form>
    )
    
    function handleToggle(e) {
        e.preventDefault();
        setIsCollapsed(!isCollapsed);
    }

    function handleAddFieldset(e) {
        e.preventDefault();
        if (fieldsetList.length < data[formIndex].fieldsetLimit) {
            setFieldsetList([...fieldsetList, ...data[formIndex].fieldsets])
        }
        console.log(fieldsetList);
    }

    function handleDeleteFieldset(e) {
        e.preventDefault();
        if (fieldsetList.length > 1) {
            const fieldsetListCopy = fieldsetList;
            fieldsetListCopy.pop();
            setFieldsetList([...fieldsetListCopy]);
        }
    }
}