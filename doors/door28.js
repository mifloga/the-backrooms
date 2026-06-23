const door28 = {

    number: 28,

    name: "LEVEL 28",

    briefing:
        "Las pantallas muestran movimientos programados para los próximos días. Varias rutas ya tienen horarios asignados. Completa el nivel para avanzar.",

    digits: ["6", "8", "3"],

    code: "683",

    challengeA: {

        name: "LEVEL 28",

        questions: [

            {
                q: "The team is meeting the guide tomorrow morning.",
                answers: ["Present Simple", "Present Continuous for Future", "Past Simple"],
                correct: 1
            },

            {
                q: "We are travelling to the northern sector next week.",
                answers: ["Present Continuous for Future", "Past Continuous", "Will"],
                correct: 0
            },

            {
                q: "The engineers are inspecting the route on Friday.",
                answers: ["Past Simple", "Going To", "Present Continuous for Future"],
                correct: 2
            },

            {
                q: "I am visiting the monitoring station tomorrow.",
                answers: ["Present Continuous for Future", "Present Perfect", "Past Simple"],
                correct: 0
            },

            {
                q: "They are checking the equipment this afternoon.",
                answers: ["Will", "Present Continuous for Future", "Past Continuous"],
                correct: 1
            },

            {
                q: "The researchers are presenting their findings next Monday.",
                answers: ["Present Perfect", "Past Simple", "Present Continuous for Future"],
                correct: 2
            },

            {
                q: "We are using the eastern route tomorrow.",
                answers: ["Present Continuous for Future", "Past Continuous", "Present Simple"],
                correct: 0
            },

            {
                q: "The pilot is flying to the island next week.",
                answers: ["Past Simple", "Present Continuous for Future", "Will"],
                correct: 1
            },

            {
                q: "Our team is exploring the valley on Saturday.",
                answers: ["Going To", "Will", "Present Continuous for Future"],
                correct: 2
            },

            {
                q: "She is reviewing the expedition plan tonight.",
                answers: ["Present Continuous for Future", "Past Simple", "Present Perfect"],
                correct: 0
            }

        ]

    },

    challengeB: {

        name: "WORLD REVIEW",

        questions: [

            { spanish: "ESCUELA", english: "school" },
            { spanish: "HOSPITAL", english: "hospital" },
            { spanish: "MONTAÑA", english: "mountain" },
            { spanish: "DOCTOR", english: "doctor" },
            { spanish: "PARQUE", english: "park" },
            { spanish: "AUTOBÚS", english: "bus" },
            { spanish: "INGENIERO", english: "engineer" },
            { spanish: "BOSQUE", english: "forest" },
            { spanish: "BIBLIOTECA", english: "library" },
            { spanish: "PILOTO", english: "pilot" }

        ]

    },

    challengeC: {

        name: "SCHEDULE REPORT",

        readingText: `

SCHEDULE REPORT

Mission coordinators prepared a schedule for several upcoming operations. The report listed activities planned for the next two weeks and assigned responsibilities to different teams.

One group is examining a series of routes that were recently discovered during earlier expeditions. Another team is visiting several monitoring stations to verify collected data. A transport unit is also travelling to remote locations to deliver equipment.

The schedule includes extra time between operations because planners expect possible delays caused by weather conditions.

The final report stated that careful organisation should help all teams complete their objectives efficiently while maintaining flexibility when necessary.

`,

        questions: [

            {
                q: "Why was extra time included in the schedule?",
                answers: [
                    "Planners expected possible delays",
                    "The teams wanted longer holidays",
                    "The operations were cancelled"
                ],
                correct: 0
            },

            {
                q: "What can we infer about the coordinators?",
                answers: [
                    "They ignored potential risks",
                    "They tried to prepare for problems",
                    "They reduced all planning activities"
                ],
                correct: 1
            },

            {
                q: "Why are teams visiting monitoring stations?",
                answers: [
                    "To verify information that was collected",
                    "To build new stations",
                    "To replace transport units"
                ],
                correct: 0
            },

            {
                q: "What is the role of the transport unit?",
                answers: [
                    "Investigating new routes",
                    "Delivering equipment",
                    "Preparing weather forecasts"
                ],
                correct: 1
            },

            {
                q: "What does the report suggest about future operations?",
                answers: [
                    "They require coordination between different groups",
                    "Only one team is involved",
                    "They have already finished"
                ],
                correct: 0
            },

            {
                q: "Why are recently discovered routes being examined?",
                answers: [
                    "To learn more about them",
                    "To close them permanently",
                    "To remove them from maps"
                ],
                correct: 0
            },

            {
                q: "What can we conclude about the schedule?",
                answers: [
                    "It was designed to balance efficiency and flexibility",
                    "It focused only on speed",
                    "It ignored weather conditions"
                ],
                correct: 0
            },

            {
                q: "What is the central idea of the report?",
                answers: [
                    "Successful operations depend on organised planning",
                    "Transport is more important than investigation",
                    "Future missions should be postponed"
                ],
                correct: 0
            }

        ]

    }

};