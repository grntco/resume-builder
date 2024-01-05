import '../../styles/Form.css'
import { useState } from 'react'
import { resumeData } from '../../resumeData';

export function TextInput({ label, data, formIndex, fieldsetIndex, inputIndex }) {
    const [inputData, setInputData] = useState(data[formIndex].fieldsets[fieldsetIndex][inputIndex]);
    // const [updatedData, setUpdatedData] = useState(data);
    console.log(inputData.value, resumeData[formIndex].fieldsets[fieldsetIndex][inputIndex]);

    return (
        <li className="input-item">
            { (label !== "Skill") && (
                <label htmlFor={label} className="input-label">{label}</label>
            )}
            <input type="text" id={label} className="input" onChange={handleInputChange} value={inputData.value}/>
            {/* id needs to be something else. label concat key? */}
        </li>
    )

    function handleInputChange(e) {
        setInputData({...setInputData, value: e.target.value})
    }
}
