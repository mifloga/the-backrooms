const door07 = {

    number: 7,

    name: "LEVEL 07",

    briefing:
        "Las luces parpadean en una sala vacía. La siguiente puerta sigue bloqueada. Completa el nivel para avanzar.",

    digits: ["9", "4", "2"],

    code: "942",

    challengeA: {

        name: "LEVEL 07",

        questions: [

            {
                q: "There are ___ apples in the storage room.",
                answers: ["some", "any", "a"],
                correct: 0
            },

            {
                q: "Are there ___ sandwiches left?",
                answers: ["some", "a", "any"],
                correct: 2
            },

            {
                q: "We need ___ water before the mission.",
                answers: ["some", "any", "many"],
                correct: 0
            },

            {
                q: "There isn't ___ juice in the fridge.",
                answers: ["some", "a", "any"],
                correct: 2
            },

            {
                q: "Can I have ___ bread, please?",
                answers: ["some", "many", "any"],
                correct: 0
            },

            {
                q: "There aren't ___ oranges on the table.",
                answers: ["some", "much", "any"],
                correct: 2
            },

            {
                q: "I bought ___ bananas after training.",
                answers: ["some", "any", "much"],
                correct: 0
            },

            {
                q: "Do you have ___ milk?",
                answers: ["many", "some", "any"],
                correct: 2
            },

            {
                q: "The team prepared ___ snacks for the trip.",
                answers: ["some", "any", "much"],
                correct: 0
            },

            {
                q: "We don't have ___ cheese today.",
                answers: ["some", "many", "any"],
                correct: 2
            }

        ]

    },

    challengeB: {

        name: "SUPPLY RECORDS",

        questions: [

            { spanish: "MANZANA", english: "apple" },
            { spanish: "PLÁTANO", english: "banana" },
            { spanish: "PAN", english: "bread" },
            { spanish: "QUESO", english: "cheese" },
            { spanish: "LECHE", english: "milk" },
            { spanish: "AGUA", english: "water" },
            { spanish: "ZUMO", english: "juice" },
            { spanish: "HUEVO", english: "egg" },
            { spanish: "SÁNDWICH", english: "sandwich" },
            { spanish: "NARANJA", english: "orange" }

        ]

    },

    challengeC: {

        name: "SUPPLY REPORT ANALYSIS",

        readingText: `

SUPPLY REPORT

A group of trainees prepared for a long exploration mission.

Emma checked the food supplies. She carefully counted every item and noticed that some important products were missing.

Lucas carried the heaviest boxes and moved equipment between different rooms. He worked quickly and finished before the others.

Sofia organised the supplies into categories and created a simple list so everyone could find what they needed.

At the end of the preparation, one trainee showed the best organisation, one demonstrated the greatest attention to detail, and one completed the most physical work. The report suggests that all three helped the mission succeed.

`,

        questions: [

            {
                q: "Who most likely showed the greatest attention to detail?",
                answers: [
                    "Lucas",
                    "Emma",
                    "Sofia"
                ],
                correct: 1
            },

            {
                q: "Who probably completed the most physical work?",
                answers: [
                    "Lucas",
                    "Emma",
                    "Sofia"
                ],
                correct: 0
            },

            {
                q: "Who seems best at organising information?",
                answers: [
                    "Emma",
                    "Lucas",
                    "Sofia"
                ],
                correct: 2
            },

            {
                q: "Why was Emma important to the mission?",
                answers: [
                    "She found missing supplies",
                    "She carried all the boxes",
                    "She created the supply list"
                ],
                correct: 0
            },

            {
                q: "What can we conclude about Lucas?",
                answers: [
                    "He prefers planning",
                    "He works efficiently with physical tasks",
                    "He counted the food supplies"
                ],
                correct: 1
            },

            {
                q: "Why was Sofia useful during preparation?",
                answers: [
                    "She organised materials clearly",
                    "She moved equipment fastest",
                    "She checked every product"
                ],
                correct: 0
            },

            {
                q: "What is the main idea of the report?",
                answers: [
                    "Only one trainee was helpful",
                    "Food supplies were not needed",
                    "Different skills helped the mission succeed"
                ],
                correct: 2
            },

            {
                q: "Which statement is supported by the report?",
                answers: [
                    "Each trainee contributed in a different way",
                    "Nobody worked together",
                    "The mission was cancelled"
                ],
                correct: 0
            }

        ]

    }

};