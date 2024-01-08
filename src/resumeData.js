export const resumeData = [
    {
        title: "Personal Details",
        fieldsets: [
            [{
                label: "Full Name", 
                value: "John Doe",
            },      
            {
                label: "Email", 
                value: "johndoe@example.com",
            },      
            {
                label: "Phone Number", 
                value: "(999) 999–9999",
            },      
            {
                label: "Location", 
                value: "New York City, NY",
            }] 
        ]
    },
    {
        title: "Work Experience",
        buttonText: "Experience",
        fieldsetLimit: 3,
        fieldsets: [
            [{
                label: "Company", 
                value: "[Company]",
            },      
            {
                label: "Position", 
                value: "[Position]",
            },      
            {
                label: "Location", 
                value: "[Location]",
            },      
            {
                label: "Start Date", 
                value: "[Start Date]",
            },   
            {
                label: "End Date", 
                value: "[End Date]",
            },
            {
                label: "Responsibilities",
                responsibilities: [
                    "did this thing",
                    "did another thing",
                    "did one more thing"
                ]
            }]   
        ]
    },
    {
        title: "Education",
        buttonText: "Education",
        fieldsetLimit: 2,
        fieldsets: [
            [{
                label: "University", 
                value: "",
            },      
            {
                label: "Degree", 
                value: "",
            },      
            {
                label: "Location", 
                value: "",
            },      
            {
                label: "Start Date", 
                value: "",
            },   
            {
                label: "End Date", 
                value: "",
            },
            {
                label: "Responsibilities",
                responsibilities: [
                    "Earned degree",
                    "6.9 GPA",
                    "Honors Stoodant"
                ]
            }]     
        ]
    },
    {
        title: "Skills",
        buttonText: "Skill",
        fieldsetLimit: 15,
        fieldsets: [
            [{
                label: "Skill", 
                value: "",
            }]
        ]
    }
]