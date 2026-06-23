const door24 = {

    number: 24,

    name: "LEVEL 24",

    briefing:
        "Una secuencia de registros muestra eventos superpuestos en distintos momentos. Varias piezas de información parecen conectadas. Completa el nivel para avanzar.",

    digits: ["5", "1", "7"],

    code: "517",

    challengeA: {

        name: "LEVEL 24",

        questions: [

            {
                q: "The team ___ through the forest when they found an old camp.",
                answers: ["was walking", "walked", "were walking"],
                correct: 2
            },

            {
                q: "While the players ___ football, it started to rain.",
                answers: ["were playing", "played", "play"],
                correct: 0
            },

            {
                q: "The guide ___ a map before the journey began.",
                answers: ["was studying", "studied", "study"],
                correct: 1
            },

            {
                q: "We ___ near the river when we heard a strange sound.",
                answers: ["were camping", "camped", "camp"],
                correct: 0
            },

            {
                q: "The expedition ___ at sunrise.",
                answers: ["was starting", "starts", "started"],
                correct: 2
            },

            {
                q: "While the researchers ___ the area, they discovered a cave.",
                answers: ["investigated", "were investigating", "investigate"],
                correct: 1
            },

            {
                q: "The match ___ after the storm ended.",
                answers: ["resumed", "was resuming", "resume"],
                correct: 0
            },

            {
                q: "While she ___ her report, new evidence arrived.",
                answers: ["wrote", "was writing", "writes"],
                correct: 1
            },

            {
                q: "The team ___ the mountain last weekend.",
                answers: ["climbed", "were climbing", "climb"],
                correct: 0
            },

            {
                q: "While they ___ to the stadium, traffic became heavy.",
                answers: ["travelled", "travel", "were travelling"],
                correct: 2
            }

        ]

    },

    challengeB: {

        name: "WORLD REVIEW",

        questions: [

            { spanish: "FÚTBOL", english: "football" },
            { spanish: "BALONCESTO", english: "basketball" },
            { spanish: "TENIS", english: "tennis" },
            { spanish: "NATACIÓN", english: "swimming" },
            { spanish: "CARRERA", english: "running" },
            { spanish: "CICLISMO", english: "cycling" },
            { spanish: "VOLEIBOL", english: "volleyball" },
            { spanish: "GIMNASIA", english: "gymnastics" },
            { spanish: "ESTADIO", english: "stadium" },
            { spanish: "EQUIPO", english: "team" }

        ]

    },

    challengeC: {

        name: "INVESTIGATION FILE",

        readingText: `

INVESTIGATION FILE

Investigators reviewed reports related to an unusual event that occurred during a regional sports competition.

While several teams were competing, officials noticed that communication between two checkpoints suddenly stopped. At first, organisers believed the problem was temporary. However, the interruption continued for several minutes.

While technicians were checking equipment, a security team examined the route between the checkpoints. They discovered that a fallen branch had damaged a cable used by the communication system.

Repairs were completed quickly, and the competition continued without further problems. The final investigation concluded that good coordination between different groups prevented a minor issue from becoming a serious disruption.

`,

        questions: [

            {
                q: "Why did officials become concerned?",
                answers: [
                    "Communication between checkpoints stopped",
                    "The competition ended early",
                    "Several teams left the event"
                ],
                correct: 0
            },

            {
                q: "What can we infer about the organisers at first?",
                answers: [
                    "They expected the issue to solve itself",
                    "They immediately cancelled the competition",
                    "They knew the exact cause"
                ],
                correct: 0
            },

            {
                q: "Why were technicians checking equipment?",
                answers: [
                    "They were preparing a new competition",
                    "They were investigating the interruption",
                    "They were training new staff"
                ],
                correct: 1
            },

            {
                q: "What ultimately caused the communication problem?",
                answers: [
                    "Heavy traffic",
                    "A damaged cable",
                    "Bad weather forecasts"
                ],
                correct: 1
            },

            {
                q: "What role did the security team play?",
                answers: [
                    "They located the source of the problem",
                    "They repaired the cable",
                    "They organised the competition"
                ],
                correct: 0
            },

            {
                q: "What suggests the incident was relatively minor?",
                answers: [
                    "Repairs were completed quickly",
                    "The event was permanently cancelled",
                    "Multiple systems failed"
                ],
                correct: 0
            },

            {
                q: "What can we conclude about cooperation during the event?",
                answers: [
                    "It created confusion",
                    "It helped resolve the issue efficiently",
                    "It delayed the investigation"
                ],
                correct: 1
            },

            {
                q: "What is the main idea of the file?",
                answers: [
                    "A competition was cancelled because of equipment failures",
                    "A communication issue was solved through coordinated action",
                    "Sports teams repaired all technical systems"
                ],
                correct: 1
            }

        ]

    }

};