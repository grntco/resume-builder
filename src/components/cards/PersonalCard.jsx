import { Card } from "./Card";
import { CardHeader } from "./CardHeader";
import { Form } from "./Form";
import { TextInput } from "./TextInput";
import { useState } from "react";

export function PersonalCard() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    function handleToggle() {
        setIsCollapsed(!isCollapsed);
    }

    return(
        <Card>
            <CardHeader
                title="Personal Details"
                onClick={handleToggle}
                isCollapsed={isCollapsed}
            ></CardHeader>
            <Form isCollapsed={isCollapsed}>
                <TextInput label="Full Name"></TextInput>
                <TextInput label="Email"></TextInput>
                <TextInput label="Phone Number"></TextInput>
                <TextInput label="Location"></TextInput>
            </Form>
        </Card>
    )
}