const door03 = {

    number: 3,

    name: "LOCATION GRID",

    briefing:
        "Hay demasiadas puertas. Una lleva a la salida. Completa el nivel para avanzar.",

    digits: ["5", "8", "2"],

    code: "582",

    challengeA: {

        name: "LEVEL 03",

        questions: [

            {
                q: "The laptop is ___ the desk.",
                answers: ["under", "on", "behind"],
                correct: 1
            },

            {
                q: "The shoes are ___ the bed.",
                answers: ["between", "under", "on"],
                correct: 1
            },

            {
                q: "The lamp is ___ the sofa and the table.",
                answers: ["behind", "between", "in"],
                correct: 1
            },

            {
                q: "The chair is ___ the desk.",
                answers: ["next to", "under", "in"],
                correct: 0
            },

            {
                q: "The cat is ___ the box.",
                answers: ["behind", "between", "in"],
                correct: 2
            },

            {
                q: "The bookshelf is ___ the door.",
                answers: ["under", "behind", "on"],
                correct: 1
            },

            {
                q: "The television is ___ the sofa.",
                answers: ["behind", "between", "in front of"],
                correct: 2
            },

            {
                q: "The picture is ___ the bed.",
                answers: ["above", "under", "in"],
                correct: 0
            },

            {
                q: "The desk is ___ the window.",
                answers: ["between", "near", "behind"],
                correct: 1
            },

            {
                q: "The rug is ___ the table.",
                answers: ["above", "under", "behind"],
                correct: 1
            }

        ]

    },

    challengeB: {

        name: "ROOM DATABASE",

        questions: [

            { spanish: "COCINA", english: "kitchen" },
            { spanish: "SALÓN", english: "living room" },
            { spanish: "DORMITORIO", english: "bedroom" },
            { spanish: "BAÑO", english: "bathroom" },
            { spanish: "JARDÍN", english: "garden" },
            { spanish: "GARAJE", english: "garage" },
            { spanish: "PASILLO", english: "hall" },
            { spanish: "VENTANA", english: "window" },
            { spanish: "PUERTA", english: "door" },
            { spanish: "ESCALERAS", english: "stairs" }

        ]

    },

    challengeC: {

        name: "LEVEL MAP ANALYSIS",

        readingText: `

BACKROOMS TRAINING REPORT

A player entered a training area called Level 0.

The spawn room is near the entrance.

A puzzle room is next to the spawn room.

Behind the puzzle room there is a checkpoint room.

A Rubik's Cube station is between the checkpoint room and the chess room.

The chess room is usually the quietest area of the map.

One player spent most of the session in the puzzle room solving challenges.

Another player explored the rooms at the back of the map.

No problems were reported in the spawn room or the chess room.

However, several players got lost near the Rubik's Cube station.

The report recommends adding better signs in that area.

`,

    questions: [

        {
            q: "Why are new signs recommended?",
            answers: [
                "The room was closed",
                "Players got lost there",
                "The chess room moved"
            ],
            correct: 1
        },

        {
            q: "Which room is probably closest to the entrance?",
            answers: [
                "Spawn room",
                "Checkpoint room",
                "Chess room"
            ],
            correct: 0
        },

        {
            q: "What can we conclude about the chess room?",
            answers: [
                "It is near the entrance",
                "It is always crowded",
                "It is usually a calm place"
            ],
            correct: 2
        },

        {
            q: "Why did one player stay in the puzzle room?",
            answers: [
                "To repair signs",
                "To solve challenges",
                "To play chess"
            ],
            correct: 1
        },

        {
            q: "Which area seems most confusing for players?",
            answers: [
                "Rubik's Cube station",
                "Entrance",
                "Spawn room"
            ],
            correct: 0
        },

        {
            q: "What can we conclude about the second player?",
            answers: [
                "He stayed in one room",
                "He explored the back of the map",
                "He repaired the checkpoint"
            ],
            correct: 1
        },

        {
            q: "Which room is located between two other rooms?",
            answers: [
                "Checkpoint room",
                "Chess room",
                "Rubik's Cube station"
            ],
            correct: 2
        },

        {
            q: "Which statement is supported by the report?",
            answers: [
                "The map was closed",
                "Most areas worked correctly",
                "The chess room was dangerous"
            ],
            correct: 1
        }

        ]

    }

};