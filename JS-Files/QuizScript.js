// Global Quiz Variables
let quiz_score_var, quiz_option_chosen, quiz_option_locked
let quiz_question_correct_answer, quiz_question_type, quiz_question_index
let timer_id, quiz_question_answer_tracker

// Quiz Objects
let element_quiz_question_box = document.getElementById("question")
let element_quiz_option_boxes = document.getElementsByClassName("option_container")[0].children
let element_quiz_nat_answer_box = document.getElementById("NATbox")
let element_quiz_next_button = document.getElementById("next")
let element_quiz_result_review = document.getElementById("review")

// Timer for quiz
function start_quiz_timer(m, s) {
    let timer_prm = new Promise((timeUp) => {
        function display_timer_on_screen_and_check_timeout() {
            // Display Timer
            let element_timer = document.getElementById("timer")
            let str1 = `${m}`.padStart(2, "0")
            let str2 = `${s}`.padStart(2, "0")
            element_timer.innerHTML = `${str1}:${str2}`
            
            // Check Timeout
            if (s == 0 && m == 0) {
                clearInterval(timer_id)
                timeUp("Time is Up!")
            }
        }
        
        display_timer_on_screen_and_check_timeout()
        timer_id = setInterval(() => {
            if (s == 0 && m != 0) {
                s = 59
                m--
            }
            else {
                s--
            }
            display_timer_on_screen_and_check_timeout()
        }, 1000)
    })
    
    return [timer_id, timer_prm]
}

// Listeners for quiz buttons
function add_quiz_button_listeners() {
    // Option Buttons Listeners
    Array.from(element_quiz_option_boxes).forEach((element, index, array) => {
        element.addEventListener("click", () => {
            if (quiz_option_locked == null) {
                quiz_option_chosen = ["A", "B", "C", "D"][index]
                element.style.backgroundColor = "yellow"
                element.style.color = "black"
                
                array.forEach(otherElement => {
                    if (otherElement != element) {
                        otherElement.style.backgroundColor = ""
                        otherElement.style.color = ""
                    }   
                })
            }
        })
    })
    
    // Next Button Listener
    element_quiz_next_button.addEventListener("click", () => {
        if (quiz_question_type == "MCQ") {
            // Locking Answer
            quiz_option_locked = quiz_option_chosen
            
            // Checking Answer
            if (quiz_option_locked != null && quiz_option_locked != "-"){
                clearInterval(timer_id)
                if (quiz_option_locked == quiz_question_correct_answer){
                    // Correct Answer
                    quiz_score_var = quiz_score_var + 4
                    let element = document.getElementById(`option-${quiz_question_correct_answer}`)
                    element.style.backgroundColor = "green"
                    result_page_review_update(0)
                }
                else if (quiz_option_locked != quiz_question_correct_answer){
                    // Incorrect Answer
                    quiz_score_var = quiz_score_var - 1
                    let element1 = document.getElementById(`option-${quiz_question_correct_answer}`)
                    let element2 = document.getElementById(`option-${quiz_option_locked}`)
                    element1.style.backgroundColor = "green"
                    element2.style.backgroundColor = "red"
                    result_page_review_update(1)
                }
            }
        }
        else if (quiz_question_type == "NAT") {
            // Locking Answer
            quiz_option_locked = element_quiz_nat_answer_box.value != "" ? element_quiz_nat_answer_box.value : null
            
            // Checking Answer
            if (quiz_option_locked != null && quiz_option_locked != "-"){
                clearInterval(timer_id)
                if (quiz_option_locked == quiz_question_correct_answer){
                    // Correct Answer
                    quiz_score_var = quiz_score_var + 4
                    element_quiz_nat_answer_box.style.backgroundColor = "green"
                    result_page_review_update(0)
                }
                else if (quiz_option_locked != quiz_question_correct_answer){
                    // Incorrect Answer
                    quiz_score_var = quiz_score_var - 1
                    element_quiz_nat_answer_box.style.backgroundColor = "red"
                    alert(`Correct Answer is ${quiz_question_correct_answer}.`)
                    result_page_review_update(1)
                }
            }
        }
    })
}

// Function to display question
function Display_question(question_object, Time_mcq, Time_nat) {
    // Options/Input box visibility
    quiz_question_type = question_object.type
    quiz_question_correct_answer = question_object.answer
    
    document.querySelectorAll("#Page-3 .mcq, #Page-3 .nat").forEach(element => {
        element.hidden = true;
    });
    document.querySelectorAll(`#Page-3 .${quiz_question_type.toLowerCase()}`).forEach(element => {
        element.hidden = false;
    });
    
    // Question Header
    document.getElementById("type").innerHTML = quiz_question_type
    document.getElementById("score").innerHTML = `${quiz_score_var} Points`

    // Question
    element_quiz_question_box.innerHTML = `Q.${quiz_question_index + 1}. ${question_object.question}`

    // Options
    if (quiz_question_type == "MCQ") {
        Array.from(element_quiz_option_boxes).forEach((element, index) => {
            element.innerHTML = `${["A", "B", "C", "D"][index]}.) ${question_object.options[index]}`
            element.style.backgroundColor = ""
            element.style.color = ""
        });
    }

    // Timer
    let Time_total_s = quiz_question_type == "MCQ" ? Time_mcq : Time_nat
    let Time_m = parseInt(Time_total_s / 60)
    let Time_s = Time_total_s - (Time_m * 60)
    let timer_return = start_quiz_timer(Time_m, Time_s)
    timer_id = timer_return[0] 
    let timer_prm = timer_return[1]

    // Timeout Case
    timer_prm.then((message) => {
        console.log(message)
        quiz_option_locked = "-"
        alert(`Time Up! Correct answer is ${quiz_question_correct_answer}`)
        result_page_review_update(2)
    })
}

// Quiz Function
function Next_Quiz_Question() {
    quiz_option_chosen = null
    quiz_option_locked = null

    if (quiz_object.Questions.length > quiz_question_index){
        Display_question(quiz_object.Questions[quiz_question_index], quiz_object.MCQs_Timer_in_sec, quiz_object.NATs_Timer_in_sec)
    }
    else {
        result_page_display()
    }
}

// Result Review Page Updater
function result_page_review_update(index) {
    quiz_question_answer_tracker[index]++
    let new_tr = document.createElement("tr")
    new_tr.innerHTML = `
        <th>${quiz_question_index + 1}</th>
        <td>${quiz_question_type}</td>
        <td>${quiz_option_locked}</td>
        <td>${quiz_question_correct_answer}</td>
        <td class="${["correct", "incorrect", "unanswered"][index]}">${["+4", "-1", "+0"][index]}</td>`
    element_quiz_result_review.append(new_tr)

    element_quiz_next_button.disabled = true
    setTimeout(() => {
        quiz_question_index++
        element_quiz_nat_answer_box.value = ""
        element_quiz_nat_answer_box.style.backgroundColor = ""
        element_quiz_next_button.disabled = false
        Next_Quiz_Question()
    }, 1500)
}

function result_page_display() {
    navigate_to_page(element_page4)
    let acc = parseInt(((quiz_question_answer_tracker[0]) / (quiz_question_answer_tracker[0] + quiz_question_answer_tracker[1])) * 10000) / 100
    let str = `
        <li>Your Score: ${quiz_score_var} Points</li>
        <li>Accuracy: ${acc}% </li>
        <li>Correct: ${quiz_question_answer_tracker[0]}</li>
        <li>Incorrect: ${quiz_question_answer_tracker[1]}</li>
        <li>Unanswered: ${quiz_question_answer_tracker[2]}</li>`

    element_page4.children[1].innerHTML = str
    element_navbar.hidden = false
}

add_quiz_button_listeners()