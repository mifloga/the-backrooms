const door17 = {

    number: 17,

    name: "LEVEL 17",

    briefing:
        "Has llegado a una zona desconocida del complejo. Un mapa muestra varios lugares bloqueados. Completa el nivel para avanzar.",

    digits: ["2", "6", "9"],

    code: "269",

    challengeA: {

        name: "LEVEL 17",

        questions: [

            {
                q: "There ___ a hospital near the main gate.",
                answers: ["are", "is", "am"],
                correct: 1
            },

            {
                q: "There ___ two parks in the city.",
                answers: ["are", "is", "am"],
                correct: 0
            },

            {
                q: "There ___ many shops in this area.",
                answers: ["is", "am", "are"],
                correct: 2
            },

            {
                q: "There ___ a museum next to the station.",
                answers: ["is", "are", "am"],
                correct: 0
            },

            {
                q: "There ___ three restaurants on this street.",
                answers: ["is", "are", "am"],
                correct: 1
            },

            {
                q: "There ___ a library behind the school.",
                answers: ["are", "am", "is"],
                correct: 2
            },

            {
                q: "There ___ several buses at the station.",
                answers: ["are", "is", "am"],
                correct: 0
            },

            {
                q: "There ___ a cinema near the town centre.",
                answers: ["am", "is", "are"],
                correct: 1
            },

            {
                q: "There ___ four hotels in the report.",
                answers: ["is", "am", "are"],
                correct: 2
            },

            {
                q: "There ___ a bank opposite the post office.",
                answers: ["is", "are", "am"],
                correct: 0
            }

        ]

    },

    challengeB: {

        name: "CITY LOCATIONS",

        questions: [

            { spanish: "HOSPITAL", english: "hospital" },
            { spanish: "MUSEO", english: "museum" },
            { spanish: "BIBLIOTECA", english: "library" },
            { spanish: "PARQUE", english: "park" },
            { spanish: "CINE", english: "cinema" },
            { spanish: "BANCO", english: "bank" },
            { spanish: "HOTEL", english: "hotel" },
            { spanish: "RESTAURANTE", english: "restaurant" },
            { spanish: "ESTACIÓN", english: "station" },
            { spanish: "TIENDA", english: "shop" }

        ]

    },

    challengeC: {

        name: "CITY INSPECTION",

        readingText: `

CITY INSPECTION REPORT

An inspection team visited several locations around the city connected to the facility.

The library received excellent results because it was well organised and easy to navigate. The museum attracted many visitors and provided useful information, but some signs were difficult to read.

Inspectors also visited the hospital, where staff worked efficiently and responded quickly to visitors. The central park was clean and well maintained, making it one of the most popular locations in the area.

The final report concluded that most places were operating effectively. However, a few locations would benefit from clearer information and improved visitor guidance.

`,

        questions: [

            {
                q: "Why did the library receive excellent results?",
                answers: [
                    "It was well organised",
                    "It attracted the most visitors",
                    "It had the newest equipment"
                ],
                correct: 0
            },

            {
                q: "What problem was found at the museum?",
                answers: [
                    "Poor organisation",
                    "Difficult-to-read signs",
                    "Lack of visitors"
                ],
                correct: 1
            },

            {
                q: "What can we conclude about the hospital staff?",
                answers: [
                    "They worked efficiently",
                    "They needed more training",
                    "They closed parts of the building"
                ],
                correct: 0
            },

            {
                q: "Why was the park popular?",
                answers: [
                    "It was close to the museum",
                    "It had many shops",
                    "It was clean and well maintained"
                ],
                correct: 2
            },

            {
                q: "What is the overall opinion of most locations?",
                answers: [
                    "They were operating effectively",
                    "They required major repairs",
                    "They were rarely used"
                ],
                correct: 0
            },

            {
                q: "What improvement was recommended?",
                answers: [
                    "More hospitals",
                    "Clearer information for visitors",
                    "Fewer public spaces"
                ],
                correct: 1
            },

            {
                q: "Which location appears most organised?",
                answers: [
                    "Museum",
                    "Hospital",
                    "Library"
                ],
                correct: 2
            },

            {
                q: "What is the main purpose of the report?",
                answers: [
                    "To evaluate different city locations",
                    "To compare transport methods",
                    "To rank employees"
                ],
                correct: 0
            }

        ]

    }

};