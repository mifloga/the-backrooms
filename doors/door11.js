const door11 = {

    number: 11,

    name: "LEVEL 11",

    briefing:
        "Las luces parpadean al final del pasillo. Una puerta metálica bloquea el siguiente sector. Completa el nivel para avanzar.",

    digits: ["4", "7", "2"],

    code: "472",

    challengeA: {

        name: "LEVEL 11",

        questions: [

            {
                q: "The doctor ___ a patient right now.",
                answers: ["is examining", "examines", "are examining"],
                correct: 0
            },

            {
                q: "We ___ in the waiting room at the moment.",
                answers: ["is sitting", "are sitting", "sit"],
                correct: 1
            },

            {
                q: "Look! The nurse ___ to room 12.",
                answers: ["walks", "walking", "is walking"],
                correct: 2
            },

            {
                q: "I ___ my hands now.",
                answers: ["am washing", "wash", "are washing"],
                correct: 0
            },

            {
                q: "They ___ medicine to the patient.",
                answers: ["gives", "are giving", "is giving"],
                correct: 1
            },

            {
                q: "Listen! Someone ___ for help.",
                answers: ["shouts", "are shouting", "is shouting"],
                correct: 2
            },

            {
                q: "My brother ___ in bed because he is ill.",
                answers: ["is resting", "rests", "are resting"],
                correct: 0
            },

            {
                q: "The patients ___ for the doctor.",
                answers: ["wait", "are waiting", "is waiting"],
                correct: 1
            },

            {
                q: "Why ___ you ___ a mask?",
                answers: ["do / wear", "are / wearing", "is / wearing"],
                correct: 1
            },

            {
                q: "The ambulance ___ outside the hospital.",
                answers: ["are stopping", "stops", "is stopping"],
                correct: 2
            }

        ]

    },

    challengeB: {

        name: "MEDICAL SUPPLIES",

        questions: [

            { spanish: "DOCTOR", english: "doctor" },
            { spanish: "ENFERMERA", english: "nurse" },
            { spanish: "HOSPITAL", english: "hospital" },
            { spanish: "DOLOR DE CABEZA", english: "headache" },
            { spanish: "FIEBRE", english: "fever" },
            { spanish: "MEDICINA", english: "medicine" },
            { spanish: "BRAZO", english: "arm" },
            { spanish: "PIERNA", english: "leg" },
            { spanish: "DIENTE", english: "tooth" },
            { spanish: "ESTÓMAGO", english: "stomach" }

        ]

    },

    challengeC: {

        name: "HOSPITAL REPORT",

        readingText: `

HOSPITAL REPORT

A small medical team is working in a temporary hospital inside the facility.

Dr. Reed is examining several visitors who arrived this morning. Most of them have minor problems and do not need to stay overnight.

Nurse Olivia is checking temperatures and recording information. She is also helping younger visitors who feel nervous.

Meanwhile, another team is preparing medicine and delivering supplies to different rooms. Everyone is working quickly because more visitors are expected later today.

According to the report, the situation is under control. The staff are cooperating well and the hospital is ready to help additional people if necessary.

`,

        questions: [

            {
                q: "What is Dr. Reed mainly doing?",
                answers: [
                    "Preparing supplies",
                    "Examining visitors",
                    "Recording temperatures"
                ],
                correct: 1
            },

            {
                q: "What can we conclude about most visitors?",
                answers: [
                    "Their problems are serious",
                    "They need surgery",
                    "They will probably leave soon"
                ],
                correct: 2
            },

            {
                q: "Why is Nurse Olivia helping younger visitors?",
                answers: [
                    "They feel nervous",
                    "They are delivering medicine",
                    "They work at the hospital"
                ],
                correct: 0
            },

            {
                q: "Why is the staff working quickly?",
                answers: [
                    "More visitors are expected",
                    "The hospital is closing",
                    "The report is unfinished"
                ],
                correct: 0
            },

            {
                q: "Which activity belongs to the second team?",
                answers: [
                    "Examining patients",
                    "Preparing medicine",
                    "Checking temperatures"
                ],
                correct: 1
            },

            {
                q: "What does the report suggest about teamwork?",
                answers: [
                    "The teams are cooperating effectively",
                    "The staff disagree frequently",
                    "Only one person is working"
                ],
                correct: 0
            },

            {
                q: "What is the overall condition of the hospital?",
                answers: [
                    "It is struggling to operate",
                    "It is under control",
                    "It is being evacuated"
                ],
                correct: 1
            },

            {
                q: "What can we infer about the hospital's readiness?",
                answers: [
                    "It cannot accept more visitors",
                    "It only helps children",
                    "It can support additional visitors if needed"
                ],
                correct: 2
            }

        ]

    }

};