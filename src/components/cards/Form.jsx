import '../../styles/Form.css'
import { FormHeader } from './FormHeader'
import { TextInput } from './TextInput';
import { useState } from 'react';

export function Form({ title, fieldsetLabels, fieldsetLimit }) {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [labelsList, setLabelsList] = useState([fieldsetLabels])

    return(
        <form className="form" autoComplete='off'>
            <FormHeader
                title={title}
                isCollapsed={isCollapsed}
                onClick={handleToggle}
            ></FormHeader>
            { !isCollapsed && (
                labelsList.map((labels, index) => {
                    return (
                        <ul key={index} className="form__fieldset">
                            {labels.map((label, index) => {
                                return <TextInput label={label} key={index}>{label}</TextInput>
                            })}
                        </ul>
                    )
                })
            )}
            {
                (!isCollapsed && fieldsetLimit > 1) && (
                    <button
                        onClick={handleAddFieldset}
                        disabled={labelsList.length >= fieldsetLimit}
                    >Add {title}</button>
                )
            }
            
            {
                (!isCollapsed && labelsList.length > 1) && (
                    <button
                    onClick={handleDeleteFieldset}
                    >Delete {title}</button>
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
        if (labelsList.length < fieldsetLimit) {
            setLabelsList([...labelsList, fieldsetLabels])
        }
    }

    function handleDeleteFieldset(e) {
        e.preventDefault();
        if (labelsList.length > 1) {
            const labelsListCopy = labelsList;
            labelsListCopy.pop();
            setLabelsList([...labelsListCopy]);
        }
    }
}