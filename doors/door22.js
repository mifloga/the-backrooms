const door22 = {

    number: 22,

    name: "LEVEL 22",

    briefing:
        "Has entrado en una zona abandonada con señales antiguas en las paredes. Algunos registros describen lugares que ya no existen. Completa el nivel para avanzar.",

    digits: ["8", "3", "5"],

    code: "835",

    challengeA: {

        name: "LEVEL 22",

        questions: [

            {
                q: "There ___ a river near the settlement many years ago.",
                answers: ["was", "were", "are"],
                correct: 0
            },

            {
                q: "There ___ several trees around the old camp.",
                answers: ["was", "were", "is"],
                correct: 1
            },

            {
                q: "There ___ a cave behind the mountain.",
                answers: ["were", "was", "are"],
                correct: 1
            },

            {
                q: "There ___ many animals in the valley.",
                answers: ["were", "was", "is"],
                correct: 0
            },

            {
                q: "There ___ an island in the middle of the lake.",
                answers: ["were", "are", "was"],
                correct: 2
            },

            {
                q: "There ___ two waterfalls near the forest.",
                answers: ["was", "were", "is"],
                correct: 1
            },

            {
                q: "There ___ a large tree beside the river.",
                answers: ["was", "are", "were"],
                correct: 0
            },

            {
                q: "There ___ many flowers in the area.",
                answers: ["is", "was", "were"],
                correct: 2
            },

            {
                q: "There ___ a small beach near the camp.",
                answers: ["was", "were", "are"],
                correct: 0
            },

            {
                q: "There ___ three caves on the mountain.",
                answers: ["were", "was", "is"],
                correct: 0
            }

        ]

    },

    challengeB: {

        name: "WORLD REVIEW",

        questions: [

            { spanish: "BOSQUE", english: "forest" },
            { spanish: "RÍO", english: "river" },
            { spanish: "MONTAÑA", english: "mountain" },
            { spanish: "LAGO", english: "lake" },
            { spanish: "ÁRBOL", english: "tree" },
            { spanish: "FLOR", english: "flower" },
            { spanish: "CUEVA", english: "cave" },
            { spanish: "ISLA", english: "island" },
            { spanish: "PLAYA", english: "beach" },
            { spanish: "CASCADA", english: "waterfall" }

        ]

    },

    challengeC: {

        name: "HISTORICAL SITE REPORT",

        readingText: `

HISTORICAL SITE REPORT

Researchers examined an old campsite located near a mountain lake. Historical records suggested that travellers used the area regularly many years ago.

The team discovered signs of previous activity, including stone paths and the remains of small shelters. Although most structures had disappeared over time, enough evidence remained to understand how people lived there.

Investigators also found that the nearby forest provided protection from strong winds. The lake supplied fresh water, making the location practical for extended stays.

The final report concluded that the site was carefully chosen because it offered safety, resources and access to important travel routes.

`,

        questions: [

            {
                q: "Why did researchers believe people used the area in the past?",
                answers: [
                    "Historical records and physical evidence supported it",
                    "The lake was recently created",
                    "The forest was completely new"
                ],
                correct: 0
            },

            {
                q: "What can we infer about the shelters?",
                answers: [
                    "They are still fully intact",
                    "Most no longer exist",
                    "They were built last year"
                ],
                correct: 1
            },

            {
                q: "Why was the forest valuable?",
                answers: [
                    "It protected travellers from strong winds",
                    "It made travel impossible",
                    "It prevented access to water"
                ],
                correct: 0
            },

            {
                q: "What made the site suitable for long stays?",
                answers: [
                    "It was far from all routes",
                    "It provided useful resources",
                    "It contained large cities"
                ],
                correct: 1
            },

            {
                q: "What does the remaining evidence allow researchers to do?",
                answers: [
                    "Predict future weather",
                    "Understand how people lived there",
                    "Identify new animal species"
                ],
                correct: 1
            },

            {
                q: "Why was the lake important?",
                answers: [
                    "It supplied fresh water",
                    "It created strong winds",
                    "It blocked travellers"
                ],
                correct: 0
            },

            {
                q: "What can we conclude about the site's location?",
                answers: [
                    "It was selected without planning",
                    "It offered several advantages",
                    "It was difficult to reach and use"
                ],
                correct: 1
            },

            {
                q: "What is the central idea of the report?",
                answers: [
                    "The site was a carefully chosen and useful location",
                    "Researchers failed to understand the area",
                    "The forest was more important than everything else"
                ],
                correct: 0
            }

        ]

    }

};