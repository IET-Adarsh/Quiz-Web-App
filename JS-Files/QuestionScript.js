// Global Variables
let quiz_array = []
let quiz_object

let element_navbar = document.getElementById("navbar")
let element_tab1 = document.getElementById("link-1")
let element_tab2 = document.getElementById("link-2")

let element_page1 = document.getElementById("Page-1")
let element_page2 = document.getElementById("Page-2")
let element_page3 = document.getElementById("Page-3")
let element_page4 = document.getElementById("Page-4")
let current_page = element_page1

// Default Page
element_page1.hidden = false
element_page2.hidden = true
element_page3.hidden = true
element_page4.hidden = true

// Creating Quiz Objects and adding them
const quiz_obj_1 = {
    header: "General Knowledge Challenge",
    Qs: 15,
    MCQs: 10,
    NATs: 5,
    Topic: "General Knowledge",
    MCQs_Timer_in_sec: 20,
    NATs_Timer_in_sec: 30,

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

// Quiz Object 2
const quiz_obj_2 = {
    header: "Science & Technology Challenge",
    Qs: 15,
    MCQs: 10,
    NATs: 5,
    Topic: "Science & Technology",
    MCQs_Timer_in_sec: 20,
    NATs_Timer_in_sec: 30,

    Questions: [
        {
            type: "MCQ",
            question: "Which organ pumps blood throughout the human body?",
            options: ["Lungs", "Heart", "Kidney", "Liver"],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "What is the SI unit of force?",
            options: ["Joule", "Pascal", "Newton", "Watt"],
            answer: "C"
        },

        {
            type: "MCQ",
            question: "Which vitamin is mainly produced in the skin when exposed to sunlight?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            answer: "D"
        },

        {
            type: "MCQ",
            question: "What is the approximate speed of light in vacuum?",
            options: [
                "3 × 10^6 m/s",
                "3 × 10^8 m/s",
                "3 × 10^10 m/s",
                "3 × 10^12 m/s"
            ],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Which part of a computer performs most arithmetic and logical operations?",
            options: ["RAM", "Hard Disk", "CPU", "Monitor"],
            answer: "C"
        },

        {
            type: "MCQ",
            question: "Which blood cells are primarily responsible for fighting infections?",
            options: [
                "Red blood cells",
                "White blood cells",
                "Platelets",
                "Plasma cells"
            ],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Which phenomenon explains why the sky appears blue?",
            options: [
                "Reflection",
                "Refraction",
                "Rayleigh scattering",
                "Diffraction"
            ],
            answer: "C"
        },

        {
            type: "MCQ",
            question: "What does DNA stand for?",
            options: [
                "Deoxyribonucleic Acid",
                "Dinitrogen Acid",
                "Deoxyribose Nuclear Acid",
                "Double Nucleic Acid"
            ],
            answer: "A"
        },

        {
            type: "MCQ",
            question: "Which particle has no electric charge?",
            options: ["Electron", "Proton", "Neutron", "Positron"],
            answer: "C"
        },

        {
            type: "MCQ",
            question: "Which planet has the strongest surface gravity among the planets in our Solar System?",
            options: ["Earth", "Jupiter", "Saturn", "Neptune"],
            answer: "B"
        },

        {
            type: "NAT",
            question: "How many bones are there in an average adult human body?",
            options: [],
            answer: "206"
        },

        {
            type: "NAT",
            question: "What is the atomic number of carbon?",
            options: [],
            answer: "6"
        },

        {
            type: "NAT",
            question: "How many bytes are there in 1 kilobyte using the binary convention?",
            options: [],
            answer: "1024"
        },

        {
            type: "NAT",
            question: "How many chambers does the human heart have?",
            options: [],
            answer: "4"
        },

        {
            type: "NAT",
            question: "What is the boiling point of water at standard atmospheric pressure in Celsius?",
            options: [],
            answer: "100"
        }
    ]
};


// Quiz Object 3
const quiz_obj_3 = {
    header: "World History Challenge",
    Qs: 15,
    MCQs: 10,
    NATs: 5,
    Topic: "History",
    MCQs_Timer_in_sec: 20,
    NATs_Timer_in_sec: 30,

    Questions: [
        {
            type: "MCQ",
            question: "Who was the first President of the United States?",
            options: [
                "Abraham Lincoln",
                "George Washington",
                "Thomas Jefferson",
                "John Adams"
            ],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "The Great Wall is located in which country?",
            options: ["India", "China", "Japan", "Mongolia"],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Who discovered the sea route to India from Europe around the Cape of Good Hope?",
            options: [
                "Christopher Columbus",
                "Vasco da Gama",
                "Ferdinand Magellan",
                "Marco Polo"
            ],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "The French Revolution began in which year?",
            options: ["1776", "1789", "1815", "1848"],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Who was known as the Iron Chancellor of Germany?",
            options: [
                "Adolf Hitler",
                "Otto von Bismarck",
                "Napoleon Bonaparte",
                "Kaiser Wilhelm II"
            ],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Which ancient civilization developed along the Nile River?",
            options: [
                "Roman",
                "Egyptian",
                "Mayan",
                "Mesopotamian"
            ],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Who was the first emperor of the Roman Empire?",
            options: [
                "Julius Caesar",
                "Augustus",
                "Nero",
                "Constantine"
            ],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Which event is generally considered the immediate trigger of World War I?",
            options: [
                "Invasion of Poland",
                "Bombing of Pearl Harbor",
                "Assassination of Archduke Franz Ferdinand",
                "Russian Revolution"
            ],
            answer: "C"
        },

        {
            type: "MCQ",
            question: "Which empire was ruled by Genghis Khan?",
            options: [
                "Ottoman Empire",
                "Mongol Empire",
                "Roman Empire",
                "Persian Empire"
            ],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Which civilization is credited with developing democracy in ancient times?",
            options: [
                "Athens",
                "Sparta",
                "Babylon",
                "Persia"
            ],
            answer: "A"
        },

        {
            type: "NAT",
            question: "In which year did India gain independence?",
            options: [],
            answer: "1947"
        },

        {
            type: "NAT",
            question: "How many World Wars occurred during the 20th century?",
            options: [],
            answer: "2"
        },

        {
            type: "NAT",
            question: "How many years did the Hundred Years' War approximately last?",
            options: [],
            answer: "116"
        },

        {
            type: "NAT",
            question: "In which year did the Berlin Wall fall?",
            options: [],
            answer: "1989"
        },

        {
            type: "NAT",
            question: "How many pyramids are traditionally counted among the famous pyramids at Giza?",
            options: [],
            answer: "3"
        }
    ]
};


// Quiz Object 4
const quiz_obj_4 = {
    header: "Mathematics Challenge",
    Qs: 15,
    MCQs: 10,
    NATs: 5,
    Topic: "Mathematics",
    MCQs_Timer_in_sec: 20,
    NATs_Timer_in_sec: 30,

    Questions: [
        {
            type: "MCQ",
            question: "What is the square of 12?",
            options: ["124", "144", "154", "164"],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "What is the value of 15 × 8?",
            options: ["100", "110", "120", "130"],
            answer: "C"
        },

        {
            type: "MCQ",
            question: "Which of the following is a prime number?",
            options: ["21", "29", "39", "51"],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "What is the value of √144?",
            options: ["10", "11", "12", "14"],
            answer: "C"
        },

        {
            type: "MCQ",
            question: "What is the sum of the first 10 natural numbers?",
            options: ["45", "50", "55", "60"],
            answer: "C"
        },

        {
            type: "MCQ",
            question: "What is the value of 2^5?",
            options: ["16", "24", "32", "64"],
            answer: "C"
        },

        {
            type: "MCQ",
            question: "If x + 7 = 15, what is x?",
            options: ["6", "7", "8", "9"],
            answer: "C"
        },

        {
            type: "MCQ",
            question: "What is the probability of getting a head when a fair coin is tossed once?",
            options: ["0", "1/4", "1/2", "1"],
            answer: "C"
        },

        {
            type: "MCQ",
            question: "What is the HCF of 36 and 48?",
            options: ["6", "8", "12", "16"],
            answer: "C"
        },

        {
            type: "MCQ",
            question: "If the radius of a circle is doubled, its area becomes:",
            options: [
                "2 times",
                "3 times",
                "4 times",
                "8 times"
            ],
            answer: "C"
        },

        {
            type: "NAT",
            question: "What is 25 × 4?",
            options: [],
            answer: "100"
        },

        {
            type: "NAT",
            question: "What is the cube of 5?",
            options: [],
            answer: "125"
        },

        {
            type: "NAT",
            question: "How many degrees are there in a straight angle?",
            options: [],
            answer: "180"
        },

        {
            type: "NAT",
            question: "What is 10 factorial divided by 9 factorial?",
            options: [],
            answer: "10"
        },

        {
            type: "NAT",
            question: "What is the smallest prime number?",
            options: [],
            answer: "2"
        }
    ]
};


// Quiz Object 5
const quiz_obj_5 = {
    header: "Geography Challenge",
    Qs: 15,
    MCQs: 10,
    NATs: 5,
    Topic: "Geography",
    MCQs_Timer_in_sec: 20,
    NATs_Timer_in_sec: 30,

    Questions: [
        {
            type: "MCQ",
            question: "Which is the largest country in the world by area?",
            options: ["Canada", "China", "Russia", "USA"],
            answer: "C"
        },

        {
            type: "MCQ",
            question: "Which is the highest mountain in the world?",
            options: [
                "K2",
                "Mount Everest",
                "Kangchenjunga",
                "Makalu"
            ],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Which desert is the largest hot desert in the world?",
            options: [
                "Gobi Desert",
                "Sahara Desert",
                "Thar Desert",
                "Kalahari Desert"
            ],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Which river flows through Egypt?",
            options: ["Amazon", "Nile", "Danube", "Yangtze"],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Which is the smallest continent by land area?",
            options: ["Europe", "Australia", "Antarctica", "South America"],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Which Indian state has the longest coastline?",
            options: ["Tamil Nadu", "Gujarat", "Maharashtra", "Andhra Pradesh"],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Which strait separates India and Sri Lanka?",
            options: [
                "Bering Strait",
                "Palk Strait",
                "Malacca Strait",
                "Bosporus Strait"
            ],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Which country has the largest number of natural lakes?",
            options: ["Russia", "Canada", "USA", "Brazil"],
            answer: "B"
        },

        {
            type: "MCQ",
            question: "Which line divides the Earth into Northern and Southern Hemispheres?",
            options: [
                "Tropic of Cancer",
                "Prime Meridian",
                "Equator",
                "Tropic of Capricorn"
            ],
            answer: "C"
        },

        {
            type: "MCQ",
            question: "Which is the deepest ocean trench on Earth?",
            options: [
                "Java Trench",
                "Mariana Trench",
                "Tonga Trench",
                "Puerto Rico Trench"
            ],
            answer: "B"
        },

        {
            type: "NAT",
            question: "How many oceans are generally recognized on Earth?",
            options: [],
            answer: "5"
        },

        {
            type: "NAT",
            question: "How many degrees are there in the Earth's longitude system from 0° to 180° east?",
            options: [],
            answer: "180"
        },

        {
            type: "NAT",
            question: "How many states does India currently have?",
            options: [],
            answer: "28"
        },

        {
            type: "NAT",
            question: "How many union territories does India currently have?",
            options: [],
            answer: "8"
        },

        {
            type: "NAT",
            question: "How many continents are there?",
            options: [],
            answer: "7"
        }
    ]
};


// Add all quiz objects
quiz_array.push(quiz_obj_1);
quiz_array.push(quiz_obj_2);
quiz_array.push(quiz_obj_3);
quiz_array.push(quiz_obj_4);
quiz_array.push(quiz_obj_5);