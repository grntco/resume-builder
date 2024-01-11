import '../styles/Header.css';
import { DocumentCheckIcon } from '@heroicons/react/24/outline';
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import jsPDF from 'jspdf';


export function Header() {
    return(
        <header className="header">
            <div className="header__logo">
                <DocumentCheckIcon className="header__logo-icon" height={"1.4rem"}/>
                <h1 className="header__logo-text">Resume Builder</h1>
            </div>
            <button
                className="default-btn add-btn header__download-btn"
                title="Download as PDF"
                onClick={handlePDFDownload}
            >Download as PDF<ArrowDownTrayIcon className="icon"/></button>
        </header>
    )

    function handlePDFDownload() {
        const pdf = new jsPDF();
        const resume = document.getElementById('resume');

        pdf.html(resume, {
            callback: function() {
              pdf.save("resume.pdf")
            },
            html2canvas: { scale: 0.31 },
         });
    }
}