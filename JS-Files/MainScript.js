// Heading Typewritter effect
function Main_Heading_Typewritter_Effect() {
    let element = document.getElementById("website_head")
    let text = "Quiz App by Adarsh Tiwari"
    let delay_in_ms = 60
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            element.innerHTML += text[i];
        }, i * delay_in_ms);
    }
}

// Page Navigation
function navigate_to_page(new_page) {
    current_page.hidden = true
    new_page.hidden = false
    current_page = new_page
}

// Adding Navigation bar Functionality
function add_navigation_bar_listeners() {
    let tabs = [element_tab1, element_tab2]
    let nav_pages = [element_page1, element_page2]

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            navigate_to_page(nav_pages[index])
        })
    });
}

function add_all_available_quiz_details() {
    quiz_array.forEach((quiz_obj, index) => {
        // Calculating Time
        let Time_total_s = (quiz_obj.MCQs_Timer_in_sec * quiz_obj.MCQs) + (quiz_obj.NATs_Timer_in_sec * quiz_obj.NATs)
        let Time_m = parseInt(Time_total_s / 60)
        let Time_s = Time_total_s - (Time_m * 60)

        // Adding template
        let template = document.createElement("div")
        template.classList.add("quiz_details")
        template.innerHTML = `
        <h3>${quiz_obj.header}</h3>
        <ul>
            <li>📝 Questions: ${quiz_obj.Qs}
                <ul>
                    <li>🔘 MCQ: ${quiz_obj.MCQs}</li>
                    <li>🔢 NAT: ${quiz_obj.NATs}</li>
                </ul>
            </li>
            <li>⏱ &nbsp; Total Duration: ${Time_m}m ${Time_s}s</li>
            <li>📚 Topic: ${quiz_obj.Topic}</li>
        </ul>
        <button id="button-${index}" class="quiz_selector_button">Start Quiz</button>`
        element_page2.append(template)

        // Adding listner to button
        let button = document.getElementById(`button-${index}`)
        button.addEventListener("click", () => {
            alert("Starting Quiz...")
            quiz_object = quiz_obj
            navigate_to_page(element_page3)
            element_navbar.hidden = true
            quiz_question_index = 0
            quiz_question_answer_tracker = [0, 0, 0]
            quiz_score_var = 0
            element_quiz_result_review.innerHTML = ""
            Next_Quiz_Question()
        })
    })
}

// Calling Functions
Main_Heading_Typewritter_Effect()
add_navigation_bar_listeners()
add_all_available_quiz_details()