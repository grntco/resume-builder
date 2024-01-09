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
                value: "(999) 999-9999",
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
                value: "Amazon",
            },      
            {
                label: "Position", 
                value: "Web Developer",
            },      
            {
                label: "Location", 
                value: "Remote",
            },      
            {
                label: "Start Date", 
                value: "Jan 2024",
            },   
            {
                label: "End Date", 
                value: "Present",
            },
            {
                label: "Responsibilities",
                responsibilitiesLimit: 5,
                responsibilities: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
                value: "Example University",
            },      
            {
                label: "Degree", 
                value: "Computer Science",
            },      
            {
                label: "Location", 
                value: "New York City, NY",
            },      
            {
                label: "Start Date", 
                value: "Aug 2019",
            },   
            {
                label: "End Date", 
                value: "May 2023",
            },
            {
                label: "Responsibilities",
                responsibilitiesLimit: 5,
                responsibilities: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
                value: "Javascript",
            }],
            [{
                label: "Skill", 
                value: "React",
            }],
            [{
                label: "Skill", 
                value: "HTML/CSS",
            }]
        ]
    }
]