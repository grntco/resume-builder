import { Form } from "./Form"

export function Card({ title }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <Form />
        </div>
    )
}