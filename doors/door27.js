const door27 = {

    number: 27,

    name: "LEVEL 27",

    briefing:
        "Los paneles de control muestran planes para las próximas rutas. Varias operaciones están preparándose al mismo tiempo. Completa el nivel para avanzar.",

    digits: ["3", "6", "1"],

    code: "361",

    challengeA: {

        name: "LEVEL 27",

        questions: [

            {
                q: "The team is going to ___ the eastern route tomorrow.",
                answers: ["explore", "explored", "exploring"],
                correct: 0
            },

            {
                q: "We are going to ___ a new report next week.",
                answers: ["publishing", "publish", "published"],
                correct: 1
            },

            {
                q: "The engineers are going to ___ the damaged system.",
                answers: ["repairing", "repaired", "repair"],
                correct: 2
            },

            {
                q: "She is going to ___ the expedition records.",
                answers: ["review", "reviewed", "reviewing"],
                correct: 0
            },

            {
                q: "They are going to ___ near the lake tonight.",
                answers: ["camp", "camping", "camped"],
                correct: 0
            },

            {
                q: "The guide is going to ___ us a safer route.",
                answers: ["showing", "show", "showed"],
                correct: 1
            },

            {
                q: "Our team is going to ___ the mission soon.",
                answers: ["completed", "completing", "complete"],
                correct: 2
            },

            {
                q: "I am going to ___ the equipment checklist.",
                answers: ["check", "checked", "checking"],
                correct: 0
            },

            {
                q: "The researchers are going to ___ more information.",
                answers: ["collecting", "collect", "collected"],
                correct: 1
            },

            {
                q: "We are going to ___ the mountain path tomorrow.",
                answers: ["using", "used", "use"],
                correct: 2
            }

        ]

    },

    challengeB: {

        name: "WORLD REVIEW",

        questions: [

            { spanish: "MADRE", english: "mother" },
            { spanish: "AUTOBÚS", english: "bus" },
            { spanish: "BOSQUE", english: "forest" },
            { spanish: "DOCTOR", english: "doctor" },
            { spanish: "FÚTBOL", english: "football" },
            { spanish: "MONTAÑA", english: "mountain" },
            { spanish: "INGENIERO", english: "engineer" },
            { spanish: "PARQUE", english: "park" },
            { spanish: "LEÓN", english: "lion" },
            { spanish: "BIBLIOTECA", english: "library" }

        ]

    },

    challengeC: {

        name: "OPERATIONS PLAN",

        readingText: `

OPERATIONS PLAN

A coordination team prepared a detailed plan for several upcoming missions. The document identified locations that require further investigation and listed the resources needed for each operation.

According to the plan, some teams will examine areas that were previously inaccessible due to weather conditions. Other groups will focus on verifying information collected during earlier expeditions.

The planners also included backup routes in case unexpected obstacles appear. Their goal was to reduce delays and maintain progress even if conditions change.

The final recommendation stated that flexibility and preparation will be essential for completing future objectives successfully.

`,

        questions: [

            {
                q: "Why were some locations not examined before?",
                answers: [
                    "Weather conditions prevented access",
                    "The maps were destroyed",
                    "The teams forgot about them"
                ],
                correct: 0
            },

            {
                q: "What can we infer about the coordination team?",
                answers: [
                    "They expected no challenges",
                    "They prepared for different possibilities",
                    "They avoided making plans"
                ],
                correct: 1
            },

            {
                q: "Why will some groups review earlier information?",
                answers: [
                    "To replace old reports",
                    "To verify previous findings",
                    "To cancel future missions"
                ],
                correct: 1
            },

            {
                q: "What is the purpose of backup routes?",
                answers: [
                    "To help maintain progress if problems occur",
                    "To increase travel distance",
                    "To avoid collecting information"
                ],
                correct: 0
            },

            {
                q: "What does the plan suggest about future missions?",
                answers: [
                    "They may face unexpected obstacles",
                    "They will have no risks",
                    "They are already completed"
                ],
                correct: 0
            },

            {
                q: "Why is flexibility mentioned in the recommendation?",
                answers: [
                    "Conditions may change during operations",
                    "Maps are no longer useful",
                    "Teams will work alone"
                ],
                correct: 0
            },

            {
                q: "What can we conclude about the planners' approach?",
                answers: [
                    "It was based on preparation and risk reduction",
                    "It depended mostly on luck",
                    "It ignored previous experience"
                ],
                correct: 0
            },

            {
                q: "What is the central idea of the operations plan?",
                answers: [
                    "Future success requires preparation and adaptability",
                    "Exploration should be postponed indefinitely",
                    "Previous missions were unsuccessful"
                ],
                correct: 0
            }

        ]

    }

};