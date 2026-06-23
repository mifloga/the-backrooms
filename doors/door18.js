const door18 = {

    number: 18,

    name: "LEVEL 18",

    briefing:
        "Has llegado a una sala de coordinación llena de pantallas. Varias rutas hacia la salida aparecen marcadas. Completa el nivel para avanzar.",

    digits: ["9", "3", "7"],

    code: "937",

    challengeA: {

        name: "LEVEL 18",

        questions: [

            {
                q: "The nurse ___ helping a patient right now.",
                answers: ["is", "are", "can"],
                correct: 0
            },

            {
                q: "A helicopter is ___ than a bus.",
                answers: ["fast", "faster", "fastest"],
                correct: 1
            },

            {
                q: "There ___ three hospitals in the city.",
                answers: ["is", "are", "am"],
                correct: 1
            },

            {
                q: "A pilot ___ fly an airplane.",
                answers: ["can't", "is", "can"],
                correct: 2
            },

            {
                q: "The engineers ___ repairing the communication system.",
                answers: ["are", "is", "can"],
                correct: 0
            },

            {
                q: "A giraffe is ___ than a monkey.",
                answers: ["tall", "taller", "tallest"],
                correct: 1
            },

            {
                q: "There ___ a museum near the station.",
                answers: ["am", "are", "is"],
                correct: 2
            },

            {
                q: "A firefighter ___ work in dangerous situations.",
                answers: ["can", "can't", "is"],
                correct: 0
            },

            {
                q: "The doctor ___ a report at the moment.",
                answers: ["writes", "is writing", "write"],
                correct: 1
            },

            {
                q: "A helicopter is ___ than a truck.",
                answers: ["fastest", "faster", "fast"],
                correct: 1
            }

        ]

    },

    challengeB: {

        name: "ACTIVE SYSTEMS REVIEW",

        questions: [

            { spanish: "FIEBRE", english: "fever" },
            { spanish: "HOSPITAL", english: "hospital" },
            { spanish: "LEÓN", english: "lion" },
            { spanish: "JIRAFA", english: "giraffe" },
            { spanish: "INGENIERO", english: "engineer" },
            { spanish: "BOMBERO", english: "firefighter" },
            { spanish: "AUTOBÚS", english: "bus" },
            { spanish: "HELICÓPTERO", english: "helicopter" },
            { spanish: "MUSEO", english: "museum" },
            { spanish: "RESTAURANTE", english: "restaurant" }

        ]

    },

    challengeC: {

        name: "LARGE INVESTIGATION",

        readingText: `

LARGE INVESTIGATION REPORT

A coordination team reviewed information collected from several sectors connected to the facility.

Medical staff reported that local hospitals were operating efficiently and were prepared for additional visitors if necessary. Transport specialists confirmed that helicopters were the fastest option for reaching isolated locations, while buses remained useful for moving larger groups.

Inspectors also evaluated public locations around the city. Most buildings were functioning normally, although a few museums required clearer signs to help visitors.

The final investigation concluded that the operation was successful because different teams shared information effectively. No single department solved every problem, but cooperation allowed the entire mission to progress smoothly.

`,

        questions: [

            {
                q: "Why were hospitals considered prepared?",
                answers: [
                    "They could help additional visitors",
                    "They were closing soon",
                    "They only treated staff members"
                ],
                correct: 0
            },

            {
                q: "Which transport was best for isolated locations?",
                answers: [
                    "Bus",
                    "Helicopter",
                    "Train"
                ],
                correct: 1
            },

            {
                q: "Why were buses still useful?",
                answers: [
                    "They were the fastest vehicles",
                    "They could move larger groups",
                    "They reached isolated areas"
                ],
                correct: 1
            },

            {
                q: "What issue was found in some museums?",
                answers: [
                    "Lack of visitors",
                    "Poor maintenance",
                    "Unclear signs"
                ],
                correct: 2
            },

            {
                q: "What can we conclude about most public buildings?",
                answers: [
                    "They were functioning normally",
                    "They required major repairs",
                    "They were permanently closed"
                ],
                correct: 0
            },

            {
                q: "What was the main reason for the operation's success?",
                answers: [
                    "One department solved every problem",
                    "Teams shared information effectively",
                    "Transport was no longer necessary"
                ],
                correct: 1
            },

            {
                q: "Which statement is supported by the report?",
                answers: [
                    "Cooperation improved the mission",
                    "Hospitals needed emergency repairs",
                    "Museums were the most efficient locations"
                ],
                correct: 0
            },

            {
                q: "What is the central idea of the investigation?",
                answers: [
                    "Transport is more important than healthcare",
                    "Different departments contributed to success",
                    "Public buildings should replace hospitals"
                ],
                correct: 1
            }

        ]

    }

};