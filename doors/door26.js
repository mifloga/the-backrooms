const door26 = {

    number: 26,

    name: "LEVEL 26",

    briefing:
        "Has llegado a una sala de planificación cerca de la salida. Varias rutas futuras aparecen marcadas en los paneles. Completa el nivel para avanzar.",

    digits: ["7", "2", "9"],

    code: "729",

    challengeA: {

        name: "LEVEL 26",

        questions: [

            {
                q: "The team ___ explore the northern corridor tomorrow.",
                answers: ["will", "is", "was"],
                correct: 0
            },

            {
                q: "We ___ receive the mission details next week.",
                answers: ["receiving", "will", "received"],
                correct: 1
            },

            {
                q: "The engineers ___ repair the system soon.",
                answers: ["repaired", "repairing", "will"],
                correct: 2
            },

            {
                q: "I think the expedition ___ be successful.",
                answers: ["will", "was", "is"],
                correct: 0
            },

            {
                q: "They ___ arrive at the checkpoint tomorrow morning.",
                answers: ["will", "arrived", "arriving"],
                correct: 0
            },

            {
                q: "The guide ___ show us a new route.",
                answers: ["showed", "will", "showing"],
                correct: 1
            },

            {
                q: "Our team ___ complete the investigation next month.",
                answers: ["completing", "completed", "will"],
                correct: 2
            },

            {
                q: "The weather ___ probably improve later.",
                answers: ["will", "improves", "improved"],
                correct: 0
            },

            {
                q: "We ___ need additional equipment for the mission.",
                answers: ["needed", "will", "needing"],
                correct: 1
            },

            {
                q: "The researchers ___ publish their findings soon.",
                answers: ["publishing", "will", "published"],
                correct: 1
            }

        ]

    },

    challengeB: {

        name: "WORLD REVIEW",

        questions: [

            { spanish: "ESCUELA", english: "school" },
            { spanish: "HOSPITAL", english: "hospital" },
            { spanish: "BOSQUE", english: "forest" },
            { spanish: "AUTOBÚS", english: "bus" },
            { spanish: "DOCTOR", english: "doctor" },
            { spanish: "MONTAÑA", english: "mountain" },
            { spanish: "PILOTO", english: "pilot" },
            { spanish: "PARQUE", english: "park" },
            { spanish: "FÚTBOL", english: "football" },
            { spanish: "BIBLIOTECA", english: "library" }

        ]

    },

    challengeC: {

        name: "MISSION BRIEFING",

        readingText: `

MISSION BRIEFING

A planning team prepared a proposal for the next stage of exploration beyond the current facility zone.

According to the briefing, several routes will be examined during the coming weeks. Some areas have already been mapped, while others remain largely unexplored. The objective is to identify the safest and most efficient path forward.

Specialists reviewed previous expedition reports before creating the plan. They used information gathered from earlier missions to avoid known hazards and improve travel efficiency.

The final briefing stated that success will depend on preparation, communication and careful decision-making throughout the operation.

`,

        questions: [

            {
                q: "Why were previous expedition reports reviewed?",
                answers: [
                    "To improve future planning",
                    "To replace the new mission",
                    "To cancel exploration activities"
                ],
                correct: 0
            },

            {
                q: "What can we infer about some of the routes?",
                answers: [
                    "All of them are fully explored",
                    "Some still contain unknown areas",
                    "None have been studied before"
                ],
                correct: 1
            },

            {
                q: "What is the main goal of the proposal?",
                answers: [
                    "To increase competition between teams",
                    "To locate additional equipment",
                    "To find the best path forward"
                ],
                correct: 2
            },

            {
                q: "Why did specialists use information from earlier missions?",
                answers: [
                    "To avoid known problems",
                    "To shorten historical records",
                    "To redesign the facility"
                ],
                correct: 0
            },

            {
                q: "What does the briefing suggest about preparation?",
                answers: [
                    "It is an important factor for success",
                    "It is less important than luck",
                    "It is no longer necessary"
                ],
                correct: 0
            },

            {
                q: "What can we conclude about the planning team?",
                answers: [
                    "They relied only on guesswork",
                    "They based decisions on available evidence",
                    "They ignored previous missions"
                ],
                correct: 1
            },

            {
                q: "Why are communication and decision-making mentioned?",
                answers: [
                    "They are expected to support the operation",
                    "They caused problems in every mission",
                    "They are unrelated to exploration"
                ],
                correct: 0
            },

            {
                q: "What is the central idea of the briefing?",
                answers: [
                    "Exploration should stop immediately",
                    "Future success depends on careful planning",
                    "All routes are equally safe"
                ],
                correct: 1
            }

        ]

    }

};