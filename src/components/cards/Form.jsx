import '../../styles/Form.css'
import { FormHeader } from './FormHeader'
import { useState } from 'react';

export function Form({ title, children }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    function handleToggle(e) {
        e.preventDefault();
        setIsCollapsed(!isCollapsed);
    }

    return(
        <form className="form" autoComplete='off'>
            <FormHeader
                title={title}
                isCollapsed={isCollapsed}
                onClick={handleToggle}
            ></FormHeader>
            {!isCollapsed && (
                <ul className='form__inputs-container'>
                    {!isCollapsed && children}
                </ul>
            )}
        </form>
    )
}