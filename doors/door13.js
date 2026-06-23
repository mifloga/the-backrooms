const door13 = {

    number: 13,

    name: "LEVEL 13",

    briefing:
        "Has llegado a una sala de evaluación vacía. La puerta del siguiente sector sigue cerrada. Completa el nivel para avanzar.",

    digits: ["5", "9", "4"],

    code: "594",

    challengeA: {

        name: "LEVEL 13",

        questions: [

            {
                q: "Who is the ___ worker in the report?",
                answers: ["most efficient", "more efficient", "efficient"],
                correct: 0
            },

            {
                q: "This is the ___ mission of the month.",
                answers: ["dangerous", "most dangerous", "more dangerous"],
                correct: 1
            },

            {
                q: "Emma is the ___ technician on the team.",
                answers: ["smart", "smarter", "smartest"],
                correct: 2
            },

            {
                q: "Today is the ___ day of the operation.",
                answers: ["longest", "longer", "long"],
                correct: 0
            },

            {
                q: "Jake is the ___ explorer in the group.",
                answers: ["bravest", "braver", "brave"],
                correct: 0
            },

            {
                q: "This is the ___ report in the archive.",
                answers: ["important", "most important", "more important"],
                correct: 1
            },

            {
                q: "The engineer is the ___ person for this task.",
                answers: ["careful", "more careful", "most careful"],
                correct: 2
            },

            {
                q: "That was the ___ route available.",
                answers: ["safest", "safer", "safe"],
                correct: 0
            },

            {
                q: "Olivia is the ___ communicator on the team.",
                answers: ["good", "best", "better"],
                correct: 1
            },

            {
                q: "This is the ___ room in the facility.",
                answers: ["quiet", "quieter", "quietest"],
                correct: 2
            }

        ]

    },

    challengeB: {

        name: "PERSONNEL FILES",

        questions: [

            { spanish: "MÉDICO", english: "doctor" },
            { spanish: "ENFERMERA", english: "nurse" },
            { spanish: "PROFESOR", english: "teacher" },
            { spanish: "POLICÍA", english: "police officer" },
            { spanish: "BOMBERO", english: "firefighter" },
            { spanish: "COCINERO", english: "cook" },
            { spanish: "VETERINARIO", english: "vet" },
            { spanish: "PILOTO", english: "pilot" },
            { spanish: "INGENIERO", english: "engineer" },
            { spanish: "CONDUCTOR", english: "driver" }

        ]

    },

    challengeC: {

        name: "PERSONNEL RANKING",

        readingText: `

PERSONNEL RANKING

A review team evaluated several workers who recently helped with missions inside the facility.

Olivia received the highest communication score. Her reports were clear, accurate and always delivered on time.

Marcus completed more field missions than anyone else. He worked in difficult conditions and consistently achieved his objectives.

Emma solved the most technical problems. She repaired equipment quickly and often found solutions that other workers missed.

The final evaluation explains that each worker excelled in a different area. The ranking committee concluded that strong teams need different skills rather than one person who does everything.

`,

        questions: [

            {
                q: "Who achieved the highest communication score?",
                answers: [
                    "Marcus",
                    "Emma",
                    "Olivia"
                ],
                correct: 2
            },

            {
                q: "What was Marcus most successful at?",
                answers: [
                    "Field missions",
                    "Technical repairs",
                    "Writing reports"
                ],
                correct: 0
            },

            {
                q: "Why was Emma highly rated?",
                answers: [
                    "She completed the most missions",
                    "She solved technical problems",
                    "She managed communication"
                ],
                correct: 1
            },

            {
                q: "What can we conclude about Olivia?",
                answers: [
                    "She is reliable when sharing information",
                    "She avoids deadlines",
                    "She prefers technical work"
                ],
                correct: 0
            },

            {
                q: "Which worker would be most useful for repairing equipment?",
                answers: [
                    "Marcus",
                    "Olivia",
                    "Emma"
                ],
                correct: 2
            },

            {
                q: "What does the report suggest about Marcus?",
                answers: [
                    "He has extensive field experience",
                    "He rarely leaves the office",
                    "He focuses on communication"
                ],
                correct: 0
            },

            {
                q: "What is the main conclusion of the committee?",
                answers: [
                    "One worker should do every task",
                    "Different skills are important",
                    "Technical work is the only useful skill"
                ],
                correct: 1
            },

            {
                q: "What is the overall purpose of the ranking?",
                answers: [
                    "To identify different strengths among workers",
                    "To choose a single winner for every mission",
                    "To reduce the size of the team"
                ],
                correct: 0
            }

        ]

    }

};