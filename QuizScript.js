// Objects
let score_var = 0
let type_box = document.getElementById("type")
let score_box = document.getElementById("score")
let question_box = document.getElementById("question")
let opt_box = document.getElementsByClassName("option_container")[0].children
let natarea = document.getElementById("NATbox")
let next = document.getElementById("next")
let review = document.getElementById("review")

// Timer
function timeFunc(m, s) {
    let k
    let prm = new Promise ((timeUp) => {
        let Timer = document.getElementById("timer")
        Timer.hidden = false

        let str1 = `${m}`.padStart(2, "0")
        let str2 = `${s}`.padStart(2, "0")
        Timer.innerHTML = `${str1}:${str2}`

        k = setInterval(() => {
            if (s == 0 && m == 0) {
                clearInterval(k)
                timeUp("Time is Up!")
            }
            else if (s == 0 && m != 0) {
                s = 59
                m = m - 1
            }

            else {
                s = s - 1
            }

            str1 = `${m}`.padStart(2, "0")
            str2 = `${s}`.padStart(2, "0")
            Timer.innerHTML = `${str1}:${str2}`
        }, 1000)
    })

    return [k, prm]
}

function main_quiz_func(question_list) {
    function result_page_display() {
        new_page = page4
        let acc = parseInt(((ans_tracker[0])/(ans_tracker[0] + ans_tracker[1]))*10000)/100
        navfunc()
        let str = `
            <li>Your Score: ${score_var} Points</li>
            <li>Accuracy: ${acc}% </li>
            <li>Correct: ${ans_tracker[0]}</li>
            <li>Incorrect: ${ans_tracker[1]}</li>
            <li>Unanswered: ${ans_tracker[2]}</li>`

        page4.children[1].innerHTML = str
        navbar.hidden = false
    }

    function question_handler() {
        // Variables
        let timer_prm, your_ans
        temp_ans = "-"
        ans_locked = false

        // Question Header
        type_box.innerHTML = question.type
        score_box.innerHTML = `${score_var} Points`
        if (question.type == "MCQ") {
            [timer_id, timer_prm] = timeFunc(0, 45)
        }
        else if (question.type == "NAT") {
            [timer_id, timer_prm] = timeFunc(1, 30)
        }
        
        // Question
        question_box.innerHTML = `Q.${index + 1}. ${question.question}`
        
        // Options
        Array.from(opt_box).forEach((element, index) => {
            element.innerHTML = `${element.id[7]}.) ${question.options[index]}`
            element.style.backgroundColor = ""
            element.style.color = ""
        });

        // Options/Input box visibility
        document.querySelectorAll("#Page-3 .mcq").forEach(element => {
            element.hidden = true;
        });
        document.querySelectorAll("#Page-3 .nat").forEach(element => {
            element.hidden = true;
        });
        document.querySelectorAll(`#Page-3 .${question.type.toLowerCase()}`).forEach(element => {
            element.hidden = false;
        });

        // Timer Timeout Promise
        timer_prm.then((message) => {
            console.log(message)
            your_ans = "-"
            ans_locked = true
        
            if (question.type == "MCQ") {
                let element = document.getElementById(`option-${question.answer}`)
                element.style.backgroundColor = "green"
                element.style.color = ""
            }
            else if (question.type == "NAT"){
                natarea.value = question.answer
                natarea.style.backgroundColor = "green"
                natarea.style.color = "" 
            }

            ans_tracker[2] = ans_tracker[2] + 1
            let new_tr = document.createElement("tr")
            new_tr.innerHTML = `
                <th>${index+1}</th>
                <td>${question.type}</td>
                <td>${your_ans}</td>
                <td>${question.answer}</td>
                <td class="unanswered">+0</td>`
            review.append(new_tr)

            setTimeout(() => {
                index = index + 1
                if (index != question_list.length){
                    question = question_list[index]
                    natarea.value = ""
                    natarea.style.backgroundColor = ""
                    question_handler()
                }
                else {
                    result_page_display()
                }
            }, 1500)
        })
    } 

    alert("Starting Quiz...")
    new_page = page3
    navfunc()
    navbar.hidden = true
    
    score_var = 0
    natarea.value = ""
    natarea.style.backgroundColor = ""
    ans_tracker = [0, 0, 0]
    
    //Variables
    let ans_locked = false
    let index = 0
    let question = question_list[index]
    let timer_id
    let temp_ans = "-"
    
    // Option Events
    Array.from(opt_box).forEach((element, index, array) => {
        element.addEventListener("click", () => {
            if (ans_locked == false){
                temp_ans = element.id[7]
                element.style.backgroundColor = "yellow"
                element.style.color = "black"
    
                array.forEach(otherElement => {
                    if (otherElement !== element) {
                        otherElement.style.backgroundColor = ""
                        otherElement.style.color = ""
                    }
                });
            }
        });
        
        
    });
    
    
    // Next Button
    next.innerHTML = "Lock Answer"
    next.addEventListener("click", () => {

        if (question.type == "MCQ"){
            your_ans = temp_ans
            
            if (your_ans == question.answer) {
                clearInterval(timer_id)
                score_var = score_var + 4
                ans_locked = true
                
                let element = document.getElementById(`option-${question.answer}`)
                element.style.backgroundColor = "green"

                ans_tracker[0] = ans_tracker[0] + 1
                let new_tr = document.createElement("tr")
                new_tr.innerHTML = `
                    <th>${index+1}</th>
                    <td>${question.type}</td>
                    <td>${your_ans}</td>
                    <td>${question.answer}</td>
                    <td class="correct">+4</td>`
                review.append(new_tr)
    
                setTimeout(() => {
                    index = index + 1
                    if (index != question_list.length){
                        question = question_list[index]
                        question_handler()
                    }
                    else {
                        result_page_display()
                    }
                }, 1500)
            }
            else if (your_ans != "-") {
                clearInterval(timer_id)
                score_var = score_var - 1
                ans_locked = true
                
                let element1 = document.getElementById(`option-${question.answer}`)
                element1.style.backgroundColor = "green"
                element1.style.color = ""
                
                let element2 = document.getElementById(`option-${your_ans}`)
                element2.style.backgroundColor = "red"
                element2.style.color = ""

                ans_tracker[1] = ans_tracker[1] + 1
                let new_tr = document.createElement("tr")
                new_tr.innerHTML = `
                    <th>${index+1}</th>
                    <td>${question.type}</td>
                    <td>${your_ans}</td>
                    <td>${question.answer}</td>
                    <td class="incorrect">-1</td>`
                review.append(new_tr)
    
                setTimeout(() => {
                    index = index + 1
                    if (index != question_list.length){
                        question = question_list[index]
                        question_handler()
                    }
                    else {
                        result_page_display()
                    }
                }, 1500)
            }
        }
        else if (question.type = "NAT") {
            your_ans = natarea.value

            if (your_ans == question.answer) {
                clearInterval(timer_id)
                score_var = score_var + 4
                ans_locked = true
                
                natarea.style.backgroundColor = "green"
                ans_tracker[0] = ans_tracker[0] + 1
                let new_tr = document.createElement("tr")
                new_tr.innerHTML = `
                    <th>${index+1}</th>
                    <td>${question.type}</td>
                    <td>${your_ans}</td>
                    <td>${question.answer}</td>
                    <td class="correct">+4</td>`
                review.append(new_tr)

                setTimeout(() => {
                    index = index + 1
                    if (index != question_list.length){
                        question = question_list[index]
                        natarea.value = ""
                        natarea.style.backgroundColor = ""
                        question_handler()
                    }
                    else {
                        result_page_display()
                    }
                }, 1500)
            }
            else if (your_ans != "-") {
                clearInterval(timer_id)
                score_var = score_var - 1
                ans_locked = true
                
                natarea.style.backgroundColor = "red"
                alert(`Correct Answer is ${question.answer}`)

                ans_tracker[1] = ans_tracker[1] + 1
                let new_tr = document.createElement("tr")
                new_tr.innerHTML = `
                    <th>${index+1}</th>
                    <td>${question.type}</td>
                    <td>${your_ans}</td>
                    <td>${question.answer}</td>
                    <td class="incorrect">-1</td>`
                review.append(new_tr)
    
                setTimeout(() => {
                    index = index + 1
                    if (index != question_list.length){
                        question = question_list[index]
                        natarea.value = ""
                        natarea.style.backgroundColor = ""
                        question_handler()
                    }
                    else {
                        result_page_display()
                    }
                }, 1500)
            }            
        }
    })

    question_handler()
    
}