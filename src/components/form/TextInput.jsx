import '../../styles/Form.css'
import { useState } from 'react'

export function TextInput({ form, fieldset, input, handleUpdateForm }) {
    const [ receivedInput, setReceivedInput ] = useState(false)
    const inputIndex = fieldset.indexOf(input);
    const id = `${form.title}-${input.label}-${form.fieldsets.indexOf(fieldset)}-${inputIndex}`

    return (
        <li className="input-item">
            { (input.label !== "Skill") && (
                <label htmlFor={id} className="input-label">{input.label}</label>
            )}
            <input 
                id={id}
                className="input"
                placeholder={input.value}
                value={receivedInput ? input.value : ""}
                onChange={(e) => { handleUpdateForm(e, form, updateInputText, fieldset, inputIndex); setReceivedInput(true) } } 
            />
        </li>
    )

    function updateInputText(form, currentFieldset, inputIndex, e) {
        return {
            ...form,
            fieldsets: form.fieldsets.map(fieldset => {
                if (fieldset === currentFieldset) {
                    return [
                        ...fieldset.slice(0, inputIndex),
                        {
                            ...fieldset[inputIndex],
                            value: e.target.value,
                        },
                        ...fieldset.slice(inputIndex + 1),
                    ];
                }
                return fieldset;
            }),
        };
    }
}

