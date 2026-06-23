const door29 = {

    number: 29,

    name: "LEVEL 29",

    briefing:
        "La puerta final está cerca, pero los informes más recientes siguen bloqueados. Necesitas analizar registros acumulados durante toda la operación. Completa el nivel para avanzar.",

    digits: ["5", "9", "2"],

    code: "592",

    challengeA: {

        name: "LEVEL 29",

        questions: [

            {
                q: "The team has ___ the northern route.",
                answers: ["explore", "explored", "exploring"],
                correct: 1
            },

            {
                q: "The report is ___ detailed for a quick review.",
                answers: ["too", "enough", "very"],
                correct: 0
            },

            {
                q: "We have ___ valuable information from the expedition.",
                answers: ["collect", "collecting", "collected"],
                correct: 2
            },

            {
                q: "The equipment is good ___ for the mission.",
                answers: ["too", "enough", "very"],
                correct: 1
            },

            {
                q: "She has ___ all the investigation files.",
                answers: ["review", "reviewed", "reviewing"],
                correct: 1
            },

            {
                q: "The weather is ___ bad to continue safely.",
                answers: ["enough", "very", "too"],
                correct: 2
            },

            {
                q: "They have ___ several monitoring stations.",
                answers: ["visited", "visit", "visiting"],
                correct: 0
            },

            {
                q: "The route is safe ___ for transport vehicles.",
                answers: ["too", "very", "enough"],
                correct: 2
            },

            {
                q: "The engineers have ___ the damaged system.",
                answers: ["repaired", "repair", "repairing"],
                correct: 0
            },

            {
                q: "The team is moving ___ slowly to reach the checkpoint on time.",
                answers: ["too", "enough", "very"],
                correct: 0
            }

        ]

    },

    challengeB: {

        name: "WORLD REVIEW",

        questions: [

            { spanish: "ESCUELA", english: "school" },
            { spanish: "MADRE", english: "mother" },
            { spanish: "DOCTOR", english: "doctor" },
            { spanish: "BOSQUE", english: "forest" },
            { spanish: "AUTOBÚS", english: "bus" },
            { spanish: "MONTAÑA", english: "mountain" },
            { spanish: "FÚTBOL", english: "football" },
            { spanish: "INGENIERO", english: "engineer" },
            { spanish: "BIBLIOTECA", english: "library" },
            { spanish: "PILOTO", english: "pilot" }

        ]

    },

    challengeC: {

        name: "MAJOR INVESTIGATION",

        readingText: `

MAJOR INVESTIGATION

Investigators reviewed records gathered from multiple missions completed throughout the facility and surrounding regions.

The analysis showed that teams successfully explored new routes, mapped unknown areas and improved communication systems. Several earlier problems were resolved after information from different departments was combined and evaluated.

The report also identified situations where operations were delayed. In most cases, weather conditions or limited resources created temporary difficulties. However, teams adapted and eventually completed their objectives.

The final conclusion stated that long-term success depended on cooperation, preparation and the ability to learn from previous experiences. These factors consistently appeared in the most successful missions.

`,

        questions: [

            {
                q: "Why were different mission records reviewed together?",
                answers: [
                    "To identify overall patterns and results",
                    "To replace all previous reports",
                    "To cancel future operations"
                ],
                correct: 0
            },

            {
                q: "What can we infer about the successful teams?",
                answers: [
                    "They benefited from cooperation and preparation",
                    "They avoided all challenges",
                    "They worked completely independently"
                ],
                correct: 0
            },

            {
                q: "Why were some operations delayed?",
                answers: [
                    "Communication systems disappeared",
                    "Weather and resource limitations created difficulties",
                    "Teams refused to continue"
                ],
                correct: 1
            },

            {
                q: "What helped solve earlier problems?",
                answers: [
                    "Reducing exploration activities",
                    "Combining information from multiple groups",
                    "Ignoring previous reports"
                ],
                correct: 1
            },

            {
                q: "What does the report suggest about adaptation?",
                answers: [
                    "It helped teams complete objectives despite obstacles",
                    "It caused additional delays",
                    "It was rarely necessary"
                ],
                correct: 0
            },

            {
                q: "Why are previous experiences mentioned in the conclusion?",
                answers: [
                    "They provided lessons that improved future performance",
                    "They were no longer relevant",
                    "They replaced preparation"
                ],
                correct: 0
            },

            {
                q: "What can we conclude about long-term success?",
                answers: [
                    "It depends on several connected factors",
                    "It is determined only by resources",
                    "It occurs automatically over time"
                ],
                correct: 0
            },

            {
                q: "What is the central idea of the investigation?",
                answers: [
                    "Exploration should be reduced in the future",
                    "Successful missions share common strengths",
                    "Communication systems caused most problems"
                ],
                correct: 1
            }

        ]

    }

};