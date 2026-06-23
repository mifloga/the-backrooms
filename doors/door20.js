const door20 = {

    number: 20,

    name: "LEVEL 20",

    briefing:
        "Has llegado a una cámara de control antes de la siguiente sección. Varias rutas convergen frente a una única puerta. Completa el nivel para avanzar.",

    digits: ["6", "5", "8"],

    code: "658",

    challengeA: {

        name: "LEVEL 20",

        questions: [

            {
                q: "The doctor ___ examining a patient right now.",
                answers: ["are", "is", "can"],
                correct: 1
            },

            {
                q: "A helicopter is ___ than a bus.",
                answers: ["faster", "fast", "fastest"],
                correct: 0
            },

            {
                q: "There ___ three museums in the city.",
                answers: ["is", "are", "am"],
                correct: 1
            },

            {
                q: "A firefighter ___ work in dangerous situations.",
                answers: ["can't", "can", "is"],
                correct: 1
            },

            {
                q: "___ is the library located?",
                answers: ["Where", "Who", "When"],
                correct: 0
            },

            {
                q: "A giraffe is the ___ animal in the zoo.",
                answers: ["taller", "tall", "tallest"],
                correct: 2
            },

            {
                q: "The engineers ___ repairing the communication system.",
                answers: ["is", "are", "can"],
                correct: 1
            },

            {
                q: "___ discovered the problem?",
                answers: ["When", "Who", "Where"],
                correct: 1
            },

            {
                q: "There ___ a hospital near the station.",
                answers: ["is", "are", "am"],
                correct: 0
            },

            {
                q: "A train is ___ than a bicycle.",
                answers: ["fastest", "fast", "faster"],
                correct: 2
            }

        ]

    },

    challengeB: {

        name: "WORLD REVIEW",

        questions: [

            { spanish: "ESCUELA", english: "school" },
            { spanish: "MADRE", english: "mother" },
            { spanish: "FÚTBOL", english: "football" },
            { spanish: "PAN", english: "bread" },
            { spanish: "HOSPITAL", english: "hospital" },
            { spanish: "LEÓN", english: "lion" },
            { spanish: "PILOTO", english: "pilot" },
            { spanish: "AUTOBÚS", english: "bus" },
            { spanish: "BIBLIOTECA", english: "library" },
            { spanish: "INGENIERO", english: "engineer" }

        ]

    },

    challengeC: {

        name: "CASE INVESTIGATION",

        readingText: `

CASE INVESTIGATION

A review committee examined reports collected throughout several sectors connected to the facility.

Medical teams confirmed that hospitals were prepared for additional visitors. Transport specialists reported that helicopters remained the fastest option for reaching isolated areas, while buses were useful for transporting larger groups.

Inspectors evaluated public locations and found that most libraries, museums and parks were operating effectively. A few buildings needed clearer signs, but no major problems were identified.

The committee concluded that the operation succeeded because different teams shared information and cooperated efficiently. Each group contributed specific knowledge, allowing decisions to be made quickly and accurately.

`,

        questions: [

            {
                q: "Why were hospitals considered ready?",
                answers: [
                    "They could support additional visitors",
                    "They were reducing services",
                    "They were being rebuilt"
                ],
                correct: 0
            },

            {
                q: "Which transport was best for isolated areas?",
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
                    "They transported larger groups",
                    "They were the fastest vehicles",
                    "They repaired equipment"
                ],
                correct: 0
            },

            {
                q: "What can we conclude about most public locations?",
                answers: [
                    "They required major repairs",
                    "They were operating effectively",
                    "They were permanently closed"
                ],
                correct: 1
            },

            {
                q: "What issue was found in some buildings?",
                answers: [
                    "Lack of electricity",
                    "Transport difficulties",
                    "Unclear signs"
                ],
                correct: 2
            },

            {
                q: "What was the main reason for the operation's success?",
                answers: [
                    "Efficient cooperation between teams",
                    "One department solved everything",
                    "Transport replaced planning"
                ],
                correct: 0
            },

            {
                q: "Which statement is supported by the report?",
                answers: [
                    "Different teams contributed different expertise",
                    "Only medical teams were important",
                    "Public locations caused major problems"
                ],
                correct: 0
            },

            {
                q: "What is the central idea of the investigation?",
                answers: [
                    "Success depended on cooperation and shared information",
                    "Transport systems were the only priority",
                    "Public buildings should replace hospitals"
                ],
                correct: 0
            }

        ]

    }

};