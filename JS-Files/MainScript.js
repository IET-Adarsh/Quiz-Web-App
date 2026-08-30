// Head Typewritter effect
function typewriter(element, text, delay_in_ms) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            element.innerHTML += text[i];
        }, i * delay_in_ms);
    }
}

let element = document.getElementById("website_head")
let text = "Quiz App by Adarsh Tiwari"
typewriter(element, text, 60)

// Page Navigation
function navfunc() {
    last_page.hidden = true
    new_page.hidden = false
    last_page = new_page
}

let navbar = document.getElementById("navbar")
let tab1 = document.getElementById("link-1")
let tab2 = document.getElementById("link-2")
let page1 = document.getElementById("Page-1")
let page2 = document.getElementById("Page-2")
let page3 = document.getElementById("Page-3")
let page4 = document.getElementById("Page-4")
let last_page = page1
let new_page

page1.hidden = false
page2.hidden = true
page3.hidden = true
page4.hidden = true

tab1.addEventListener("click", () => {
    new_page = page1
    navfunc()
})

tab2.addEventListener("click", () => {
    new_page = page2
    navfunc()
})

let index_quiz_details = 0
quiz_array.forEach(quiz_obj => {
    let template = document.createElement("div")
    template.classList.add("quiz_details")
    template.innerHTML = `
        <h3>Dummy Quiz Header</h3>
        <ul></ul>
        <button id="button-${index_quiz_details}" class="quiz_selector_button">Start Quiz</button>`
    page2.append(template)

    let k = template.children
    let Time_total_s = (quiz_obj.MCQs * quiz_obj.MCQs_Timer) + (quiz_obj.NATs * quiz_obj.NATs_Timer)
    let Time_m = parseInt(Time_total_s / 60)
    let Time_s = Time_total_s - (Time_m * 60)

    k[0].innerHTML = quiz_obj.header
    k[1].innerHTML = `
    <li>📝 Questions: ${quiz_obj.Qs}
        <ul>
            <li>🔘 MCQ: ${quiz_obj.MCQs}</li>
            <li>🔢 NAT: ${quiz_obj.NATs}</li>
        </ul>
    </li>
    <li>⏱ Time Limit: ${Time_m}m ${Time_s}s</li>
    <li>📚 Topic: ${quiz_obj.Topic}</li>`

    index_quiz_details++
});

let quiz_selector_buttons = document.querySelectorAll(".quiz_selector_button")
quiz_selector_buttons.forEach(button => {
    button.addEventListener("click", () => {
        let question_obj = quiz_array[parseInt(button.id.slice(7))]
        main_quiz_func(question_obj.Questions, question_obj.MCQs_Timer, question_obj.NATs_Timer)
    })
});