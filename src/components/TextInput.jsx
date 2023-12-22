import '../styles/Form.css'

export function TextInput({ label }) {
    return (
        <li className="input-item">
            <label htmlFor={label} className="input-label">{label}</label>
            <input type="text" id={label} className="input"/>
        </li>
    )
}