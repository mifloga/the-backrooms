const door19 = {

    number: 19,

    name: "LEVEL 19",

    briefing:
        "Has encontrado una sala llena de grabaciones y declaraciones. La puerta del siguiente sector permanece cerrada. Completa el nivel para avanzar.",

    digits: ["4", "8", "2"],

    code: "482",

    challengeA: {

        name: "LEVEL 19",

        questions: [

            {
                q: "___ is the engineer working today?",
                answers: ["Where", "Who", "When"],
                correct: 0
            },

            {
                q: "___ repaired the communication system?",
                answers: ["Who", "When", "Where"],
                correct: 0
            },

            {
                q: "___ are the supplies stored?",
                answers: ["Who", "When", "Where"],
                correct: 2
            },

            {
                q: "___ did the team arrive?",
                answers: ["Where", "Who", "When"],
                correct: 2
            },

            {
                q: "___ is checking the security cameras?",
                answers: ["When", "Who", "Where"],
                correct: 1
            },

            {
                q: "___ is the hospital located?",
                answers: ["Who", "Where", "When"],
                correct: 1
            },

            {
                q: "___ does the next mission begin?",
                answers: ["When", "Where", "Who"],
                correct: 0
            },

            {
                q: "___ discovered the hidden passage?",
                answers: ["Where", "Who", "When"],
                correct: 1
            },

            {
                q: "___ are the transport vehicles waiting?",
                answers: ["Who", "When", "Where"],
                correct: 2
            },

            {
                q: "___ did the alarm sound?",
                answers: ["When", "Who", "Where"],
                correct: 0
            }

        ]

    },

    challengeB: {

        name: "INVESTIGATION REVIEW",

        questions: [

            { spanish: "DOCTOR", english: "doctor" },
            { spanish: "LEÓN", english: "lion" },
            { spanish: "PILOTO", english: "pilot" },
            { spanish: "AUTOBÚS", english: "bus" },
            { spanish: "MUSEO", english: "museum" },
            { spanish: "FIEBRE", english: "fever" },
            { spanish: "INGENIERO", english: "engineer" },
            { spanish: "HELICÓPTERO", english: "helicopter" },
            { spanish: "BIBLIOTECA", english: "library" },
            { spanish: "BOMBERO", english: "firefighter" }

        ]

    },

    challengeC: {

        name: "WITNESS STATEMENTS",

        readingText: `

WITNESS STATEMENTS

Several witnesses provided information about an unusual event inside the facility.

Olivia reported hearing a loud noise near a storage corridor shortly before noon. She immediately informed the control room.

Marcus stated that he was inspecting equipment nearby when the sound occurred. He checked the area but did not find any damaged systems.

Emma reviewed security recordings and discovered that a supply cart had fallen over. No one was injured and no equipment was lost.

The final investigation concluded that the incident was minor. The quick actions of the witnesses helped the team identify the cause and avoid unnecessary concern.

`,

        questions: [

            {
                q: "Who first reported the unusual noise?",
                answers: [
                    "Marcus",
                    "Emma",
                    "Olivia"
                ],
                correct: 2
            },

            {
                q: "What was Marcus doing when the sound occurred?",
                answers: [
                    "Inspecting equipment",
                    "Reviewing recordings",
                    "Moving supplies"
                ],
                correct: 0
            },

            {
                q: "How was the cause of the incident discovered?",
                answers: [
                    "By interviewing visitors",
                    "By reviewing security recordings",
                    "By checking hospital records"
                ],
                correct: 1
            },

            {
                q: "What actually caused the noise?",
                answers: [
                    "A damaged machine",
                    "A supply cart falling over",
                    "A communication failure"
                ],
                correct: 1
            },

            {
                q: "What can we conclude about the incident?",
                answers: [
                    "It was not serious",
                    "It caused major damage",
                    "It stopped all operations"
                ],
                correct: 0
            },

            {
                q: "Why were the witnesses helpful?",
                answers: [
                    "They repaired the equipment",
                    "They quickly shared information",
                    "They transported supplies"
                ],
                correct: 1
            },

            {
                q: "Which statement is supported by the report?",
                answers: [
                    "Nobody was injured",
                    "Several systems failed",
                    "The corridor was closed permanently"
                ],
                correct: 0
            },

            {
                q: "What is the main idea of the investigation?",
                answers: [
                    "A minor incident was explained through cooperation",
                    "A dangerous accident damaged the facility",
                    "Security recordings were unavailable"
                ],
                correct: 0
            }

        ]

    }

};