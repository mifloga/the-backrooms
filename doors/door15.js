const door15 = {

    number: 15,

    name: "LEVEL 15",

    briefing:
        "Has llegado a una zona de transporte abandonada. Varias rutas aparecen marcadas en un panel. Completa el nivel para avanzar.",

    digits: ["7", "2", "5"],

    code: "725",

    challengeA: {

        name: "LEVEL 15",

        questions: [

            {
                q: "A train is ___ than a bicycle.",
                answers: ["faster", "fast", "fastest"],
                correct: 0
            },

            {
                q: "A bicycle is ___ than a car.",
                answers: ["slow", "slower", "slowest"],
                correct: 1
            },

            {
                q: "A plane is ___ than a train.",
                answers: ["fast", "fastest", "faster"],
                correct: 2
            },

            {
                q: "A bicycle is ___ than a motorcycle.",
                answers: ["slower", "slow", "slowest"],
                correct: 0
            },

            {
                q: "A helicopter is ___ than a truck.",
                answers: ["fast", "faster", "fastest"],
                correct: 1
            },

            {
                q: "A ship is ___ than a plane.",
                answers: ["more slow", "slow", "slower"],
                correct: 2
            },

            {
                q: "A taxi is ___ than walking.",
                answers: ["faster", "fast", "fastest"],
                correct: 0
            },

            {
                q: "A motorcycle is ___ than a bicycle.",
                answers: ["fast", "faster", "fastest"],
                correct: 1
            },

            {
                q: "A truck is ___ than a motorcycle.",
                answers: ["slow", "slowest", "slower"],
                correct: 2
            },

            {
                q: "A plane is ___ than a bus.",
                answers: ["faster", "fastest", "fast"],
                correct: 0
            }

        ]

    },

    challengeB: {

        name: "TRANSPORT RECORDS",

        questions: [

            { spanish: "COCHE", english: "car" },
            { spanish: "AUTOBÚS", english: "bus" },
            { spanish: "TREN", english: "train" },
            { spanish: "AVIÓN", english: "plane" },
            { spanish: "BARCO", english: "ship" },
            { spanish: "BICICLETA", english: "bicycle" },
            { spanish: "MOTOCICLETA", english: "motorcycle" },
            { spanish: "HELICÓPTERO", english: "helicopter" },
            { spanish: "CAMIÓN", english: "truck" },
            { spanish: "TAXI", english: "taxi" }

        ]

    },

    challengeC: {

        name: "TRANSPORT REPORT",

        readingText: `

TRANSPORT REPORT

A logistics team evaluated different transport methods used around the facility.

Planes completed long-distance journeys in the shortest time and were useful when speed was the main priority. Trains transported large amounts of equipment efficiently between sectors.

Helicopters reached isolated areas that other vehicles could not access easily. Trucks moved heavy supplies but required more time to complete their routes.

The final report explains that no transport method was superior in every situation. The most effective choice depended on the destination, the cargo and the urgency of the mission.

`,

        questions: [

            {
                q: "Which transport was best when speed was the priority?",
                answers: [
                    "Truck",
                    "Plane",
                    "Train"
                ],
                correct: 1
            },

            {
                q: "Why were trains valuable?",
                answers: [
                    "They carried large amounts of equipment",
                    "They reached isolated areas",
                    "They were the fastest option"
                ],
                correct: 0
            },

            {
                q: "What was the main advantage of helicopters?",
                answers: [
                    "They transported the heaviest cargo",
                    "They reached difficult locations",
                    "They travelled faster than planes"
                ],
                correct: 1
            },

            {
                q: "What can we conclude about trucks?",
                answers: [
                    "They were useful for heavy supplies",
                    "They could not carry cargo",
                    "They were the fastest vehicles"
                ],
                correct: 0
            },

            {
                q: "Which transport would be most useful for an urgent long journey?",
                answers: [
                    "Truck",
                    "Train",
                    "Plane"
                ],
                correct: 2
            },

            {
                q: "What does the report suggest about transport choices?",
                answers: [
                    "Different situations require different options",
                    "Planes are always the best solution",
                    "Trucks should replace all other vehicles"
                ],
                correct: 0
            },

            {
                q: "What factor influences the best transport choice?",
                answers: [
                    "Only speed",
                    "Destination, cargo and urgency",
                    "Vehicle colour"
                ],
                correct: 1
            },

            {
                q: "What is the main idea of the report?",
                answers: [
                    "One vehicle is superior to all others",
                    "Transport methods have different strengths",
                    "Helicopters are unnecessary"
                ],
                correct: 1
            }

        ]

    }

};