import '../../styles/Form.css'
import { useState } from 'react'

export function TextInput({ label, form, fieldsetIndex, inputIndex, handleInputChange, value }) {
    const id = `${form.title}-${label}-${fieldsetIndex}-${inputIndex}`
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
                onChange={(e) => { handleInputChange(e, form, fieldsetIndex, inputIndex); setReceivedInput(true) } } 
            />
        </li>
    )
}

