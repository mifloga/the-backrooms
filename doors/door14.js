const door14 = {

    number: 14,

    name: "LEVEL 14",

    briefing:
        "Has encontrado una puerta de seguridad bloqueada. Un panel muestra varios requisitos de acceso. Completa el nivel para avanzar.",

    digits: ["3", "8", "6"],

    code: "386",

    challengeA: {

        name: "LEVEL 14",

        questions: [

            {
                q: "A pilot ___ fly an airplane.",
                answers: ["can't", "can", "is"],
                correct: 1
            },

            {
                q: "A fish ___ climb a tree.",
                answers: ["can't", "can", "does"],
                correct: 0
            },

            {
                q: "Firefighters ___ work in dangerous situations.",
                answers: ["are", "can't", "can"],
                correct: 2
            },

            {
                q: "A baby ___ drive a car.",
                answers: ["can't", "can", "does"],
                correct: 0
            },

            {
                q: "Engineers ___ solve technical problems.",
                answers: ["can", "can't", "are"],
                correct: 0
            },

            {
                q: "A teacher ___ help students learn.",
                answers: ["is", "can", "can't"],
                correct: 1
            },

            {
                q: "A snake ___ fly.",
                answers: ["can", "is", "can't"],
                correct: 2
            },

            {
                q: "Doctors ___ treat sick people.",
                answers: ["can", "can't", "do"],
                correct: 0
            },

            {
                q: "A pilot ___ repair every machine in the facility.",
                answers: ["can't", "can", "is"],
                correct: 0
            },

            {
                q: "A police officer ___ protect people.",
                answers: ["does", "can't", "can"],
                correct: 2
            }

        ]

    },

    challengeB: {

        name: "MISSION ROLES",

        questions: [

            { spanish: "MÉDICO", english: "doctor" },
            { spanish: "ENFERMERA", english: "nurse" },
            { spanish: "PROFESOR", english: "teacher" },
            { spanish: "POLICÍA", english: "police officer" },
            { spanish: "BOMBERO", english: "firefighter" },
            { spanish: "PILOTO", english: "pilot" },
            { spanish: "INGENIERO", english: "engineer" },
            { spanish: "COCINERO", english: "cook" },
            { spanish: "VETERINARIO", english: "vet" },
            { spanish: "CONDUCTOR", english: "driver" }

        ]

    },

    challengeC: {

        name: "MISSION REQUIREMENTS",

        readingText: `

MISSION REQUIREMENTS

A team must enter a restricted area of the facility.

The mission requires several different skills. A pilot can transport people quickly between distant sectors. An engineer can repair damaged systems and open blocked routes. A firefighter can work safely in dangerous conditions and help during emergencies.

The report also states that a doctor should be available in case someone becomes injured. Team members must cooperate because no single person has every skill required for the mission.

According to the mission coordinator, success depends on combining abilities and assigning the right task to each specialist.

`,

        questions: [

            {
                q: "Who would be most useful for repairing damaged systems?",
                answers: [
                    "Pilot",
                    "Engineer",
                    "Doctor"
                ],
                correct: 1
            },

            {
                q: "Why is a pilot valuable to the mission?",
                answers: [
                    "Can transport people quickly",
                    "Can treat injuries",
                    "Can repair equipment"
                ],
                correct: 0
            },

            {
                q: "Which specialist is most prepared for emergencies?",
                answers: [
                    "Doctor",
                    "Engineer",
                    "Firefighter"
                ],
                correct: 2
            },

            {
                q: "Why should a doctor be available?",
                answers: [
                    "To repair routes",
                    "To help injured people",
                    "To transport the team"
                ],
                correct: 1
            },

            {
                q: "What can we conclude about the mission?",
                answers: [
                    "One person can do everything",
                    "Different specialists are needed",
                    "Only engineers are important"
                ],
                correct: 1
            },

            {
                q: "What does the report suggest about teamwork?",
                answers: [
                    "Cooperation is necessary",
                    "Teams slow missions down",
                    "Specialists work alone"
                ],
                correct: 0
            },

            {
                q: "What determines mission success?",
                answers: [
                    "Finding the fastest worker",
                    "Assigning tasks to the right people",
                    "Using only one specialist"
                ],
                correct: 1
            },

            {
                q: "What is the main idea of the report?",
                answers: [
                    "Every mission needs many different skills",
                    "Pilots are the most important workers",
                    "Restricted areas are impossible to enter"
                ],
                correct: 0
            }

        ]

    }

};