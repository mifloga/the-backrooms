const door30 = {

    number: 30,

    name: "LEVEL 30",

    briefing:
        "La Exit Gate está delante de ti. Los registros finales contienen la información necesaria para abrir el último bloqueo. Completa el nivel para avanzar.",

    digits: ["7", "4", "1"],

    code: "741",

    challengeA: {

        name: "LEVEL 30",

        questions: [

            {
                q: "The team found a route ___ leads directly to the Exit Gate.",
                answers: ["who", "which", "where"],
                correct: 1
            },

            {
                q: "The engineer ___ repaired the system submitted the report.",
                answers: ["which", "where", "who"],
                correct: 2
            },

            {
                q: "The forest ___ the expedition took place is now mapped.",
                answers: ["where", "who", "which"],
                correct: 0
            },

            {
                q: "The document ___ contains the final instructions is missing.",
                answers: ["which", "where", "who"],
                correct: 0
            },

            {
                q: "The pilot ___ guided the team received an award.",
                answers: ["where", "which", "who"],
                correct: 2
            },

            {
                q: "The cave ___ investigators found evidence was difficult to reach.",
                answers: ["who", "where", "which"],
                correct: 1
            },

            {
                q: "The report ___ summarises all missions is very important.",
                answers: ["which", "who", "where"],
                correct: 0
            },

            {
                q: "The doctor ___ helped the explorers worked at the hospital.",
                answers: ["where", "who", "which"],
                correct: 1
            },

            {
                q: "The station ___ teams exchanged information remained active.",
                answers: ["where", "who", "which"],
                correct: 0
            },

            {
                q: "The researcher ___ analysed the data discovered the solution.",
                answers: ["which", "where", "who"],
                correct: 2
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

        name: "FINAL MISSION FILE",

        readingText: `

FINAL MISSION FILE

A comprehensive review was conducted after all exploration phases were completed. Investigators examined reports, mission logs and operational records collected throughout the journey.

The analysis confirmed that the most successful teams shared several characteristics. They prepared carefully, communicated effectively and adapted when unexpected difficulties appeared. Groups that combined information from different sources consistently made better decisions.

The review also showed that progress was rarely the result of a single action. Instead, success emerged from many small achievements accumulated over time.

The final mission file concluded that persistence, cooperation and continuous learning were the key factors that allowed the operation to reach its ultimate objective.

`,

        questions: [

            {
                q: "What did the review examine?",
                answers: [
                    "Only recent reports",
                    "Multiple types of operational records",
                    "Future mission plans"
                ],
                correct: 1
            },

            {
                q: "What characteristic was common among successful teams?",
                answers: [
                    "They adapted to changing situations",
                    "They avoided cooperation",
                    "They worked without preparation"
                ],
                correct: 0
            },

            {
                q: "Why did some groups make better decisions?",
                answers: [
                    "They ignored older information",
                    "They combined information from several sources",
                    "They completed fewer missions"
                ],
                correct: 1
            },

            {
                q: "What does the report suggest about progress?",
                answers: [
                    "It usually results from many small achievements",
                    "It depends on one important event",
                    "It occurs automatically"
                ],
                correct: 0
            },

            {
                q: "Why are persistence and cooperation mentioned together?",
                answers: [
                    "They contributed to reaching the objective",
                    "They delayed progress",
                    "They replaced planning"
                ],
                correct: 0
            },

            {
                q: "What can we infer about the operation?",
                answers: [
                    "It required effort over a long period",
                    "It was completed immediately",
                    "It had no major challenges"
                ],
                correct: 0
            },

            {
                q: "What does continuous learning refer to?",
                answers: [
                    "Using experience to improve future actions",
                    "Repeating the same mistakes",
                    "Avoiding new information"
                ],
                correct: 0
            },

            {
                q: "What is the central idea of the final mission file?",
                answers: [
                    "Long-term success comes from preparation, teamwork and persistence",
                    "Individual actions are more important than teamwork",
                    "Planning is less important than luck"
                ],
                correct: 0
            }

        ]

    }

};