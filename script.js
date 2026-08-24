// Navigation
let tab1 = document.getElementById("link-1")
let tab2 = document.getElementById("link-2")
let page1 = document.getElementById("Page-1") 
let page2 = document.getElementById("Page-2") 

function myfunc1(){
     page1.hidden = false
     page2.hidden = true
}

function myfunc2(){
     page2.hidden = false
     page1.hidden = true
}
function NavigationFunc(k) {
   if (k==0){
        tab1.removeEventListener("click", myfunc1)
        tab2.removeEventListener("click", myfunc2)
   }
   else if (k==1) {
       tab1.addEventListener("click", myfunc1)
       tab2.addEventListener("click", myfunc2)
   }
}

// Default Navigation
NavigationFunc(1)

// Timer
function timeFunc(){
    let Timer = document.getElementsByClassName("timer")[0]
    Timer.hidden = false
    let m = 0, s = 0

    setInterval(() => {
        s = s + 1
        if (s == 60){
            s=0
            m = m + 1
        }
    
        let str1 = `${m}`.padStart(2, "0")
        let str2 = `${s}`.padStart(2, "0")
        Timer.innerHTML = `${str1}:${str2}`
    }, 1000)
}



// let question = document.getElementsByClassName("question")[0]
// let opt = document.getElementsByClassName("options")[0].children
// question.innerHTML = "Q.1. htriutftf"
// opt[0].innerHTML = "A) hfuvjh"
// opt[1].innerHTML = "B) hfuvjh"
// opt[2].innerHTML = "C) hfuvjh"
// opt[3].innerHTML = "D) hfuvjh"

// let next = document.getElementById("next")
// next.addEventListener("click", () => {
//     document.getElementsByClassName("data")[0].innerHTML = document.getElementById("NATbox").value
// })