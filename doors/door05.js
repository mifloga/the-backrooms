const door05 = {

    number: 5,

    name: "LEVEL 05",

    briefing:
        "Has oído pasos en el pasillo. La siguiente puerta sigue bloqueada. Completa el nivel para avanzar.",

    digits: ["4", "8", "1"],

    code: "481",

    challengeA: {

        name: "LEVEL 05",

        questions: [

            {
                q: "This access card is mine. It is ___.",
                answers: ["his", "mine", "theirs"],
                correct: 1
            },

            {
                q: "That puzzle belongs to Sarah. It is ___.",
                answers: ["hers", "ours", "mine"],
                correct: 0
            },

            {
                q: "The mission belongs to Tom and Jack. It is ___.",
                answers: ["hers", "mine", "theirs"],
                correct: 2
            },

            {
                q: "This notebook belongs to me and my sister. It is ___.",
                answers: ["ours", "his", "yours"],
                correct: 0
            },

            {
                q: "The robot found Anna's key.",
                answers: [
                    "The key belongs to Anna",
                    "Anna found the robot",
                    "The robot belongs to Anna"
                ],
                correct: 0
            },

            {
                q: "This flashlight belongs to you. It is ___.",
                answers: ["mine", "yours", "hers"],
                correct: 1
            },

            {
                q: "Ryan's map is on the table.",
                answers: [
                    "Ryan is under the table",
                    "The map belongs to Ryan",
                    "Ryan found a table"
                ],
                correct: 1
            },

            {
                q: "Those files belong to Emma. They are ___.",
                answers: ["ours", "hers", "theirs"],
                correct: 1
            },

            {
                q: "The players' code is missing.",
                answers: [
                    "The code belongs to the players",
                    "The players are missing",
                    "The code found the players"
                ],
                correct: 0
            },

            {
                q: "This secret route belongs to us. It is ___.",
                answers: ["theirs", "ours", "his"],
                correct: 1
            }

        ]

    },

    challengeB: {

        name: "FAMILY RECORDS",

        questions: [

            { spanish: "MADRE", english: "mother" },
            { spanish: "PADRE", english: "father" },
            { spanish: "HERMANO", english: "brother" },
            { spanish: "HERMANA", english: "sister" },
            { spanish: "ABUELO", english: "grandfather" },
            { spanish: "ABUELA", english: "grandmother" },
            { spanish: "TÍO", english: "uncle" },
            { spanish: "TÍA", english: "aunt" },
            { spanish: "PRIMO", english: "cousin" },
            { spanish: "BEBÉ", english: "baby" }

        ]

    },

    challengeC: {

        name: "FAMILY FILE ANALYSIS",

        readingText: `

FAMILY RECORD REPORT

A family visited the Puzzle Facility last weekend.

Liam came with his parents and his cousin Eva. Liam spent most of the day solving logic challenges. Eva preferred exploring different training rooms and often discovered shortcuts.

Liam's father enjoyed chess puzzles and helped other visitors when they had problems. Liam's mother carefully read every instruction before entering a new area.

At the end of the visit, one family member found a hidden route, another solved the final challenge, and another explained the rules to a group of visitors. The report confirms that everyone helped in a different way.

`,

        questions: [

            {
                q: "Who is most likely to have solved the final challenge?",
                answers: [
                    "Eva",
                    "Liam",
                    "Liam's mother"
                ],
                correct: 1
            },

            {
                q: "Who probably found the hidden route?",
                answers: [
                    "Eva",
                    "Liam's father",
                    "Liam"
                ],
                correct: 0
            },

           {
    q: "Who seems most careful before starting a new activity?",
    answers: [
        "Liam's mother",
        "Eva",
        "Liam"
    ],
    correct: 0
},

            {
                q: "What can we conclude about Liam's father?",
                answers: [
                    "He likes helping people",
                    "He dislikes puzzles",
                    "He prefers exploring"
                ],
                correct: 0
            },

            {
                q: "Why was Eva useful during the visit?",
                answers: [
                    "She read all instructions",
                    "She noticed new routes",
                    "She organised the visitors"
                ],
                correct: 1
            },

            {
                q: "Which statement is supported by the report?",
                answers: [
                    "Everyone contributed differently",
                    "Only Liam completed challenges",
                    "Nobody worked together"
                ],
                correct: 0
            },

            {
                q: "Who seems most careful before starting a task?",
                answers: [
                    "Liam's mother",
                    "Eva",
                    "Liam"
                ],
                correct: 0
            },

            {
                q: "What is the main idea of the report?",
                answers: [
                    "The facility was closed",
                    "Different strengths helped the family succeed",
                    "Chess was the only activity"
                ],
                correct: 1
            }

        ]

    }

};
