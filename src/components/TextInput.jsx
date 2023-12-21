export function TextInput({ label }) {
    return (
        <li className="input-container">
            <label htmlFor={label} className="input-label">{label}</label>
            <input type="text" id={label} className="input"/>
        </li>
    )
}