import { ChevronUpIcon } from "@heroicons/react/24/outline"

export function FormHeader({ title, onClick, isCollapsed}) {
    return (
        <div className="form__header">
            <h2 className="form__header-title">{title}</h2>
            <button className="toggle-btn" onClick={onClick}>
                <div 
                    className={!isCollapsed 
                        ? "toggle-btn__arrow" 
                        : "toggle-btn__arrow active"
                    }
                >
                    <ChevronUpIcon className="icon"/>
                </div>
            </button>
        </div>
    )
}