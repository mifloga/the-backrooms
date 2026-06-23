const door25 = {

    number: 25,

    name: "LEVEL 25",

    briefing:
        "Has llegado a un archivo histórico cerca de una puerta sellada. Los registros combinan expediciones antiguas y actividades recientes. Completa el nivel para avanzar.",

    digits: ["2", "8", "4"],

    code: "284",

    challengeA: {

        name: "LEVEL 25",

        questions: [

            {
                q: "The explorers ___ a river during their expedition.",
                answers: ["crossed", "were crossing", "cross"],
                correct: 0
            },

            {
                q: "While the team ___ through the forest, they found an old path.",
                answers: ["walked", "were walking", "walk"],
                correct: 1
            },

            {
                q: "The players ___ the match after the storm ended.",
                answers: ["resumed", "were resuming", "resume"],
                correct: 0
            },

            {
                q: "While she ___ near the lake, she discovered a cave.",
                answers: ["was exploring", "explored", "explores"],
                correct: 0
            },

            {
                q: "The guide ___ a map before the journey started.",
                answers: ["study", "studied", "was studying"],
                correct: 1
            },

            {
                q: "While the researchers ___ photographs, they noticed unusual footprints.",
                answers: ["took", "take", "were taking"],
                correct: 2
            },

            {
                q: "The team ___ the mountain successfully last weekend.",
                answers: ["climbed", "were climbing", "climb"],
                correct: 0
            },

            {
                q: "While the athletes ___ in the stadium, the lights failed.",
                answers: ["competed", "were competing", "compete"],
                correct: 1
            },

            {
                q: "The expedition ___ valuable information about the area.",
                answers: ["collected", "was collecting", "collect"],
                correct: 0
            },

            {
                q: "While we ___ back to camp, it started to rain.",
                answers: ["travelled", "travel", "were travelling"],
                correct: 2
            }

        ]

    },

    challengeB: {

        name: "WORLD REVIEW",

        questions: [

            { spanish: "BOSQUE", english: "forest" },
            { spanish: "MONTAÑA", english: "mountain" },
            { spanish: "LAGO", english: "lake" },
            { spanish: "CUEVA", english: "cave" },
            { spanish: "CASCADA", english: "waterfall" },
            { spanish: "FÚTBOL", english: "football" },
            { spanish: "TENIS", english: "tennis" },
            { spanish: "NATACIÓN", english: "swimming" },
            { spanish: "ESTADIO", english: "stadium" },
            { spanish: "EQUIPO", english: "team" }

        ]

    },

    challengeC: {

        name: "HISTORICAL INVESTIGATION",

        readingText: `

HISTORICAL INVESTIGATION

A research group compared records from an old expedition with reports from a recent sporting event held in the same region.

Historical documents described explorers who travelled through forests, crossed rivers and mapped several mountain routes. Modern reports showed that many of those routes are now used for outdoor competitions and training activities.

Investigators discovered that both groups faced similar challenges. Difficult weather conditions affected travel in the past and also disrupted modern events. However, careful planning helped participants adapt successfully.

The final investigation concluded that although the activities were different, preparation, teamwork and problem-solving were essential in both situations.

`,

        questions: [

            {
                q: "Why were the old and modern reports compared?",
                answers: [
                    "They were connected to the same region",
                    "They described the same competition",
                    "They were written by the same people"
                ],
                correct: 0
            },

            {
                q: "What can we infer about the mountain routes?",
                answers: [
                    "They are no longer accessible",
                    "They continue to be useful today",
                    "They were never completed"
                ],
                correct: 1
            },

            {
                q: "What challenge affected both groups?",
                answers: [
                    "Equipment shortages",
                    "Communication failures",
                    "Difficult weather conditions"
                ],
                correct: 2
            },

            {
                q: "Why were participants able to continue successfully?",
                answers: [
                    "They adapted through preparation and planning",
                    "The challenges disappeared immediately",
                    "They avoided all difficult situations"
                ],
                correct: 0
            },

            {
                q: "What similarity existed between the explorers and athletes?",
                answers: [
                    "Both depended on effective teamwork",
                    "Both followed identical routes",
                    "Both competed in the same event"
                ],
                correct: 0
            },

            {
                q: "What does the investigation suggest about problem-solving?",
                answers: [
                    "It was unnecessary in modern events",
                    "It was important in both situations",
                    "It only mattered during expeditions"
                ],
                correct: 1
            },

            {
                q: "Why are the historical records still valuable?",
                answers: [
                    "They help explain how the region was used",
                    "They predict future competitions",
                    "They replace modern reports"
                ],
                correct: 0
            },

            {
                q: "What is the main idea of the investigation?",
                answers: [
                    "Outdoor activities are easier today",
                    "Historical routes should be closed",
                    "Different activities can require similar skills"
                ],
                correct: 2
            }

        ]

    }

};