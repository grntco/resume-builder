import '../styles/Card.css'

export function Card({ title, children }) {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            {children}
        </div>
    )
}