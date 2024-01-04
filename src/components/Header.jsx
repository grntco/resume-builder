import '../styles/Header.css';
import { DocumentCheckIcon } from '@heroicons/react/24/outline';

export function Header() {
    return(
        <header className="header">
            <div className="header__logo">
                <DocumentCheckIcon className="header__logo-icon" height={"1.4rem"}/>
                <h1 className="header__logo-text">Resume Builder</h1>
            </div>
        </header>
    )
}