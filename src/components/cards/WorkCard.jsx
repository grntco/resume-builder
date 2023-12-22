import { Card } from "./Card";
import { Form } from "./Form";
import { TextInput } from "./TextInput";
// import { useState } from "react";

const formLabels = ["Company", "Position", "Location", "Start Date", "End Date"]

export function WorkCard() {
    return(
        <Card>
            <Form title="Work Experience">
                {formLabels.map((label, index) => {
                    return <TextInput label={label} key={index}>{label}</TextInput>
                })}
            </Form>
            <button>Add Experience</button>
        </Card>
    )
}