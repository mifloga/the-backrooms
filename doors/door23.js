const door23 = {

    number: 23,

    name: "LEVEL 23",

    briefing:
        "Un registro de emergencia parpadea en una sala vacía. Los eventos ocurrieron rápidamente y los informes están incompletos. Completa el nivel para avanzar.",

    digits: ["9", "4", "6"],

    code: "946",

    challengeA: {

        name: "LEVEL 23",

        questions: [

            {
                q: "The team ___ through the forest when the storm started.",
                answers: ["walked", "was walking", "walks"],
                correct: 1
            },

            {
                q: "While we ___ the river, we saw a strange light.",
                answers: ["were crossing", "crossed", "cross"],
                correct: 0
            },

            {
                q: "The guide ___ a map when the radio failed.",
                answers: ["studied", "was studying", "studies"],
                correct: 1
            },

            {
                q: "They ___ near the lake when they heard a noise.",
                answers: ["were camping", "camped", "camp"],
                correct: 0
            },

            {
                q: "The researchers ___ photographs when they suddenly heard an alarm.",
                answers: ["take", "were taking", "took"],
                correct: 1
            },

            {
                q: "While the team ___ the cave, the weather changed.",
                answers: ["explored", "exploring", "was exploring"],
                correct: 2
            },

            {
                q: "The explorers ___ equipment when the alarm sounded.",
                answers: ["were carrying", "carried", "carry"],
                correct: 0
            },

            {
                q: "While she ___ the report, new information arrived.",
                answers: ["wrote", "writes", "was writing"],
                correct: 2
            },

            {
                q: "The group ___ near the mountain during the incident.",
                answers: ["was travelling", "travelled", "travels"],
                correct: 0
            },

            {
                q: "While we ___ the area, we discovered a hidden path.",
                answers: ["investigated", "were investigating", "investigate"],
                correct: 1
            }

        ]

    },

    challengeB: {

        name: "WORLD REVIEW",

        questions: [

            { spanish: "HOSPITAL", english: "hospital" },
            { spanish: "DOCTOR", english: "doctor" },
            { spanish: "AUTOBÚS", english: "bus" },
            { spanish: "PILOTO", english: "pilot" },
            { spanish: "BIBLIOTECA", english: "library" },
            { spanish: "INGENIERO", english: "engineer" },
            { spanish: "PARQUE", english: "park" },
            { spanish: "MUSEO", english: "museum" },
            { spanish: "LEÓN", english: "lion" },
            { spanish: "HELICÓPTERO", english: "helicopter" }

        ]

    },

    challengeC: {

        name: "INCIDENT REPORT",

        readingText: `

INCIDENT REPORT

An exploration team was travelling through a remote region when an unexpected incident occurred. The group was following a marked route near a forest while another team was monitoring weather conditions from a nearby station.

During the afternoon, communication systems suddenly stopped working. Although the problem created confusion, team members remained calm and followed emergency procedures.

While technicians were examining equipment, a field team discovered that a fallen tree had damaged an important communication line. Repairs began immediately.

The final report stated that cooperation between teams helped solve the problem quickly. Normal operations resumed before the end of the day, and the expedition continued safely.

`,

        questions: [

            {
                q: "Why did the incident create difficulties?",
                answers: [
                    "Communication systems stopped working",
                    "The expedition ended immediately",
                    "The weather station disappeared"
                ],
                correct: 0
            },

            {
                q: "What can we infer about the team members?",
                answers: [
                    "They ignored safety procedures",
                    "They reacted responsibly",
                    "They abandoned the route"
                ],
                correct: 1
            },

            {
                q: "What was the likely cause of the communication problem?",
                answers: [
                    "A damaged communication line",
                    "A navigation error",
                    "A flooded river"
                ],
                correct: 0
            },

            {
                q: "Why were technicians examining equipment?",
                answers: [
                    "They were preparing to leave",
                    "They were investigating the problem",
                    "They were mapping the forest"
                ],
                correct: 1
            },

            {
                q: "What role did the field team play?",
                answers: [
                    "They discovered the source of the damage",
                    "They repaired the weather station",
                    "They cancelled the expedition"
                ],
                correct: 0
            },

            {
                q: "What suggests the situation was controlled effectively?",
                answers: [
                    "Normal operations resumed the same day",
                    "The teams stopped communicating permanently",
                    "The route was abandoned"
                ],
                correct: 0
            },

            {
                q: "What can we conclude about cooperation during the incident?",
                answers: [
                    "It delayed repairs",
                    "It helped solve the problem efficiently",
                    "It created additional confusion"
                ],
                correct: 1
            },

            {
                q: "What is the main idea of the report?",
                answers: [
                    "A communication failure was resolved through teamwork",
                    "The expedition failed because of bad planning",
                    "Weather monitoring was unnecessary"
                ],
                correct: 0
            }

        ]

    }

};