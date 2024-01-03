import { Card } from "./Card";
import { Form } from "./Form";
import { TextInput } from "./TextInput";
import { useState } from "react";

const formLabels = ["Company", "Position", "Location", "Start Date", "End Date"]

export function WorkCard() {
    const [formLabelsList, setFormLabelsList] = useState([formLabels]);

    function handleAddForm() {
        if (formLabelsList.length < 3) {
            setFormLabelsList([...formLabelsList, formLabels])
        }
    }

    return(
        <Card>
            <Form title="Work Experience">
                {
                    formLabelsList.map((labels, index) => {
                        return (
                        <fieldset key={index}>
                            {labels.map((label, index) => {
                                return <TextInput label={label} key={index}>{label}</TextInput>
                            })}
                        </fieldset>
                        )
                    })
                }
            </Form>
            <button onClick={handleAddForm}>Add Experience</button>
        </Card>
    )
}