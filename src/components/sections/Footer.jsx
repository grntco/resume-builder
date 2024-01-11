import '../../styles/Footer.css'
import ghIcon from '../../assets/icons/github-mark.svg'

export function Footer() {
    return(
        <footer className="footer">
            <a href="https://github.com/grntco" target="_blank" rel="noreferrer" className="footer__link">
            Made by grntco
            <img src={ghIcon} className="icon"></img>
            </a>
        </footer>
    )
}

