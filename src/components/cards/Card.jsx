import '../../styles/Card.css'

export function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    )
}