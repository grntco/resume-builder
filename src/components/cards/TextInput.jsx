import '../../styles/Form.css'

export function TextInput({ label }) {
    return (
        <li className="input-item">
            { (label !== "Skill") && (
                <label htmlFor={label} className="input-label">{label}</label>
            )}
            <input type="text" id={label} className="input"/>
            {/* id needs to be something else. label concat key? */}
        </li>
    )
}