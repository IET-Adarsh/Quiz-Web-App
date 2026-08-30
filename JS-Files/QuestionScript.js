let quiz_array = []

let quiz_obj_1 = {
    header: "General Knowledge Challenge",
    Qs: 15,
    MCQs: 10,
    NATs: 5,
    Topic: "General Knowledge",
    MCQs_Timer: [0, 20],
    NATs_Timer: [0, 30],

    Questions: [
        {
            type: "MCQ",
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            answer: "C"
        },

        {
            type: "MCQ",
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Mercury"],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Who wrote the Indian National Anthem?",
            options: [
                "Bankim Chandra Chattopadhyay",
                "Rabindranath Tagore",
                "Sarojini Naidu",
                "Subhas Chandra Bose"
            ],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Which is the largest ocean in the world?",
            options: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Arctic Ocean",
                "Pacific Ocean"
            ],
            answer: "D"
        },

        {
            type: "MCQ",
            question: "Which gas is most abundant in Earth's atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Who was the first person to walk on the Moon?",
            options: [
                "Yuri Gagarin",
                "Buzz Aldrin",
                "Neil Armstrong",
                "Michael Collins"
            ],
            answer: "C"
        },

        {
            type: "MCQ",
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Japan", "South Korea", "Thailand"],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Which is the largest continent by area?",
            options: ["Africa", "Europe", "Asia", "North America"],
            answer: "C"
        },

        {
            type: "MCQ",
            question: "What is the chemical symbol for gold?",
            options: ["Ag", "Gd", "Go", "Au"],
            answer: "D"
        },

        {
            type: "MCQ",
            question: "Which is the longest river in India?",
            options: ["Yamuna", "Ganga", "Godavari", "Narmada"],
            answer: "B"
        },

        {
            type: "NAT",
            question: "How many states are there in India?",
            options: [],
            answer: "28"
        },

        {
            type: "NAT",
            question: "How many continents are there on Earth?",
            options: [],
            answer: "7"
        },

        {
            type: "NAT",
            question: "How many players are there in a cricket team?",
            options: [],
            answer: "11"
        },

        {
            type: "NAT",
            question: "How many sides does a hexagon have?",
            options: [],
            answer: "6"
        },

        {
            type: "NAT",
            question: "How many planets are there in the Solar System?",
            options: [],
            answer: "8"
        }
    ]
};

quiz_array.push(quiz_obj_1)