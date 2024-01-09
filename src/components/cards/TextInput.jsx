import '../../styles/Form.css'

export function TextInput({ label, form, fieldsetIndex, inputIndex, handleInputChange, value }) {
    const id = `${form.title}-${label}-${fieldsetIndex}-${inputIndex}`
    return (
        <li className="input-item">
            { (label !== "Skill") && (
                <label htmlFor={id} className="input-label">{label}</label>
            )}
            <input 
                type="text"
                id={id}
                className="input"
                value={value}
                onChange={(e) => { handleInputChange(e, form, fieldsetIndex, inputIndex) }} 
            />
        </li>
    )
}