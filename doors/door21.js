const door21 = {

    number: 21,

    name: "LEVEL 21",

    briefing:
        "Has encontrado una ruta que atraviesa salas oscuras y silenciosas. Algunas puertas muestran registros antiguos de exploración. Completa el nivel para avanzar.",

    digits: ["4", "7", "2"],

    code: "472",

    challengeA: {

        name: "LEVEL 21",

        questions: [

            {
                q: "The team ___ the forest yesterday.",
                answers: ["explored", "explore", "exploring"],
                correct: 0
            },

            {
                q: "Last week, we ___ a river near the camp.",
                answers: ["cross", "crossed", "crossing"],
                correct: 1
            },

            {
                q: "The explorers ___ many photographs during the trip.",
                answers: ["take", "taking", "took"],
                correct: 2
            },

            {
                q: "She ___ a map before the expedition started.",
                answers: ["studied", "study", "studies"],
                correct: 0
            },

            {
                q: "The group ___ the mountain very carefully.",
                answers: ["climbed", "climb", "climbing"],
                correct: 0
            },

            {
                q: "Yesterday, the guide ___ the safest route.",
                answers: ["choose", "chose", "choosing"],
                correct: 1
            },

            {
                q: "The weather ___ worse during the afternoon.",
                answers: ["became", "become", "becoming"],
                correct: 0
            },

            {
                q: "They ___ several animals near the lake.",
                answers: ["see", "seeing", "saw"],
                correct: 2
            },

            {
                q: "The expedition ___ at sunrise.",
                answers: ["started", "start", "starting"],
                correct: 0
            },

            {
                q: "We ___ tired after the long journey.",
                answers: ["was", "were", "are"],
                correct: 1
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

        name: "EXPEDITION REPORT",

        readingText: `

EXPEDITION REPORT

An exploration team travelled through a remote valley to investigate an old route marked on several maps. The journey lasted three days. During the first day, the team crossed a river and reached a forest where they established a temporary camp.

On the second day, heavy rain slowed their progress. Although the weather created difficulties, the explorers continued carefully and collected useful information about the area.

The final day was more successful. The team discovered a waterfall hidden behind a group of trees and found evidence that previous travellers had used the same route many years earlier.

The report concluded that the route was challenging but valuable for future expeditions.

`,

        questions: [

            {
                q: "Why was the journey probably considered difficult?",
                answers: [
                    "The team faced bad weather during part of the trip",
                    "The route was completely unknown",
                    "The explorers had no maps"
                ],
                correct: 0
            },

            {
                q: "What can we infer about the explorers?",
                answers: [
                    "They stopped working after the rain started",
                    "They remained committed to their objective",
                    "They abandoned the valley"
                ],
                correct: 1
            },

            {
                q: "Why was the waterfall discovery important?",
                answers: [
                    "It showed that the forest was dangerous",
                    "It helped prove the area had useful features",
                    "It ended the expedition early"
                ],
                correct: 1
            },

            {
                q: "What suggests that other people travelled there before?",
                answers: [
                    "The team found evidence of earlier travellers",
                    "The weather improved",
                    "The camp was abandoned"
                ],
                correct: 0
            },

            {
                q: "Which statement best describes the second day?",
                answers: [
                    "The team made rapid progress",
                    "The explorers returned home",
                    "Conditions became more difficult"
                ],
                correct: 2
            },

            {
                q: "Why might future expeditions use this route?",
                answers: [
                    "The report considered it valuable",
                    "The valley was empty",
                    "The route avoided all natural obstacles"
                ],
                correct: 0
            },

            {
                q: "What can we conclude about the team's planning?",
                answers: [
                    "They were completely unprepared",
                    "They adapted to challenges during the journey",
                    "They travelled without equipment"
                ],
                correct: 1
            },

            {
                q: "What is the main idea of the report?",
                answers: [
                    "A difficult expedition produced useful results",
                    "The valley should never be visited again",
                    "The weather was the only important event"
                ],
                correct: 0
            }

        ]

    }

};