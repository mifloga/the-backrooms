const door16 = {

    number: 16,

    name: "LEVEL 16",

    briefing:
        "Las cámaras muestran actividad en varios sectores. La siguiente puerta sigue cerrada. Completa el nivel para avanzar.",

    digits: ["8", "4", "1"],

    code: "841",

    challengeA: {

        name: "LEVEL 16",

        questions: [

            {
                q: "The security guards ___ the monitors right now.",
                answers: ["is watching", "watches", "are watching"],
                correct: 2
            },

            {
                q: "I ___ a report at the moment.",
                answers: ["am writing", "write", "is writing"],
                correct: 0
            },

            {
                q: "They ___ through the corridor now.",
                answers: ["walk", "are walking", "is walking"],
                correct: 1
            },

            {
                q: "Look! The engineer ___ a damaged panel.",
                answers: ["repairs", "repairing", "is repairing"],
                correct: 2
            },

            {
                q: "We ___ the control room this morning.",
                answers: ["are checking", "check", "is checking"],
                correct: 0
            },

            {
                q: "The nurses ___ new patients now.",
                answers: ["are helping", "help", "is helping"],
                correct: 0
            },

            {
                q: "Why ___ you ___ that screen?",
                answers: ["do / watch", "are / watching", "is / watching"],
                correct: 1
            },

            {
                q: "The pilot ___ instructions from mission control.",
                answers: ["receives", "are receiving", "is receiving"],
                correct: 2
            },

            {
                q: "Our team ___ information from different sectors.",
                answers: ["is collecting", "collects", "are collects"],
                correct: 0
            },

            {
                q: "The workers ___ equipment into the vehicle.",
                answers: ["load", "is loading", "are loading"],
                correct: 2
            }

        ]

    },

    challengeB: {

        name: "ACTIVE SYSTEMS REVIEW",

        questions: [

            { spanish: "MÉDICO", english: "doctor" },
            { spanish: "HOSPITAL", english: "hospital" },
            { spanish: "LEÓN", english: "lion" },
            { spanish: "JIRAFA", english: "giraffe" },
            { spanish: "INGENIERO", english: "engineer" },
            { spanish: "PILOTO", english: "pilot" },
            { spanish: "AUTOBÚS", english: "bus" },
            { spanish: "TREN", english: "train" },
            { spanish: "FIEBRE", english: "fever" },
            { spanish: "BOMBERO", english: "firefighter" }

        ]

    },

    challengeC: {

        name: "LIVE MONITORING REPORT",

        readingText: `

LIVE MONITORING REPORT

The control room is receiving updates from several sectors of the facility.

One team is inspecting a corridor where unusual sounds were reported earlier today. Another group is moving equipment to a storage area that recently became accessible.

Meanwhile, engineers are repairing communication systems and testing connections between different sectors. The monitoring staff are watching camera feeds carefully and recording any unusual activity.

According to the latest update, all teams are progressing as planned. Although several tasks are taking place at the same time, communication remains clear and no major problems have been reported.

`,

        questions: [

            {
                q: "Why is one team inspecting a corridor?",
                answers: [
                    "Equipment was lost there",
                    "Unusual sounds were reported",
                    "The corridor is being closed"
                ],
                correct: 1
            },

            {
                q: "What can we conclude about the storage area?",
                answers: [
                    "It was inaccessible before",
                    "It is permanently locked",
                    "It contains communication equipment"
                ],
                correct: 0
            },

            {
                q: "What are the engineers mainly doing?",
                answers: [
                    "Watching cameras",
                    "Repairing communication systems",
                    "Inspecting corridors"
                ],
                correct: 1
            },

            {
                q: "Why are monitoring staff watching camera feeds?",
                answers: [
                    "To record unusual activity",
                    "To repair connections",
                    "To transport equipment"
                ],
                correct: 0
            },

            {
                q: "What does the latest update suggest?",
                answers: [
                    "Several teams are facing serious problems",
                    "The operation is progressing normally",
                    "Communication has failed"
                ],
                correct: 1
            },

            {
                q: "Which statement is supported by the report?",
                answers: [
                    "Only one task is taking place",
                    "Multiple activities are happening simultaneously",
                    "The facility has been evacuated"
                ],
                correct: 1
            },

            {
                q: "What appears to be helping the teams succeed?",
                answers: [
                    "Clear communication",
                    "Working independently",
                    "Closing the control room"
                ],
                correct: 0
            },

            {
                q: "What is the main purpose of the report?",
                answers: [
                    "To describe current activities across the facility",
                    "To compare transport methods",
                    "To rank the staff members"
                ],
                correct: 0
            }

        ]

    }

};