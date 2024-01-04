import '../../styles/Form.css'
import { FormHeader } from './FormHeader'
import { TextInput } from './TextInput';
import { useState } from 'react';

export function Form({ data, fieldsetLimit = 1 }) {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [fieldsetList, setFieldsetList] = useState(data.fieldsets)

    return(
        <form className="form" autoComplete='off'>
            <FormHeader
                title={data.title}
                isCollapsed={isCollapsed}
                onClick={handleToggle}
            ></FormHeader>
            { !isCollapsed && (
                fieldsetList.map((fieldset, fieldsetIndex) => {
                    return (
                        <ul className="form__fieldset" key={fieldsetIndex}>
                            {fieldset.map((input, inputIndex) => {
                                return <TextInput label={input.label} key={inputIndex} />
                            })}
                        </ul>
                    )
                })
            )}
            <div className="btn-container">
                {
                    (!isCollapsed && fieldsetLimit > 1) && (
                        <button className='default-btn'
                            onClick={handleAddFieldset}
                            disabled={data.fieldsets.length >= fieldsetLimit}
                        >Add {data.buttonText}</button>
                    )
                }
                {
                    (!isCollapsed && fieldsetList.length > 1) && (
                        <button className='default-btn'
                        onClick={handleDeleteFieldset}
                        >Delete {data.buttonText}</button>
                    )
                }
            </div>
        </form>
    )

    function handleToggle(e) {
        e.preventDefault();
        setIsCollapsed(!isCollapsed);
    }

    function handleAddFieldset(e) {
        e.preventDefault();
        if (fieldsetList.length < fieldsetLimit) {
            setFieldsetList([...fieldsetList, ...data.fieldsets])
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