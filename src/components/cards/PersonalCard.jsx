import { Card } from "./Card";
import { Form } from "./Form";
import { TextInput } from "./TextInput";

export function PersonalCard() {
    return(
        <Card>
            <Form title="Personal Details">
                <TextInput label="Full Name"></TextInput>
                <TextInput label="Email"></TextInput>
                <TextInput label="Phone Number"></TextInput>
                <TextInput label="Location"></TextInput>
            </Form>
        </Card>
    )
}