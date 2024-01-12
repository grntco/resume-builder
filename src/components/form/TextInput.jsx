import '../../styles/Form.css'
import { useState } from 'react'

export function TextInput({ label, form, fieldset, inputIndex, handleInputChange, value }) {
    const id = `${form.title}-${label}-${form.fieldsets.indexOf(fieldset)}-${inputIndex}`
    const [ receivedInput, setReceivedInput ] = useState(false)

    return (
        <li className="input-item">
            { (label !== "Skill") && (
                <label htmlFor={id} className="input-label">{label}</label>
            )}
            <input 
                id={id}
                className="input"
                placeholder={value}
                value={receivedInput ? value : ""}
                onChange={(e) => { handleInputChange(e, form, fieldset, inputIndex, updateInputText); setReceivedInput(true) } } 
            />
        </li>
    )

    function updateInputText(e, fieldset, inputIndex) {
        return [
            ...fieldset.slice(0, inputIndex),
            {
                ...fieldset[inputIndex],
                value: e.target.value,
            },
            ...fieldset.slice(inputIndex + 1),
        ];
    }
}

