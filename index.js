// counter design

document.addEventListener('DOMContentLoaded', ()=>{
    function runCounters(id, startNum, endNum, timeDuration){
        let obj = document.getElementById(id),
            currentNum = startNum,//0
            range = (endNum - startNum),//1000
            increment = endNum > startNum ? 1 : -1,//true
            steps = Math.floor(timeDuration / range),//3
            timer = setInterval(() => {
                currentNum = currentNum + increment;
                obj.innerHTML = currentNum;
                if(currentNum == endNum){
                    clearInterval(timer);
                }
            }, steps);
        }
        runCounters("count1", 0, 1000, 1500);
        runCounters("count2", 100, 1500, 1500);
        runCounters("count3", 50, 900, 1500);
        runCounters("count4", 0, 80, 1500);
});

//close nav bar on click

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navBar.forEach(function(link){
    link.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    });
});

//fix the position of navbar

let nav = document.querySelector(".navigation-wrap");

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("on-scroll");
    }
    else{
        nav.classList.remove("on-scroll");
    }
}

//toggler button outline removal

let toggle_button = document.getElementById("toggle-button");
let toggle_icon = document.getElementById("toggle-icon");

toggle_icon.addEventListener("click", ()=>{
    toggle_button.style.boxShadow = 'none';
});

//plus toggle button in FAQ section

// let plusArray = ["plus-toggle-btn1", "plus-toggle-btn2","plus-toggle-btn3", "plus-toggle-btn4"];
// let textArray = ["faq_text1", "faq_text2", "faq_text3", "faq_text4"];

// let displayText = (id) =>{
//     document.getElementById(id).style.display = 'block';
// }

// let hideText = (id) =>{
//     document.getElementById(id).style.display = 'none';
// }

// function toggleText(){
//     for(let i=0; i<plusArray.length; i++){
//         let flag = false;
//         for(let j=0; j<textArray.length; j++){
//             if(i == j){
//                 if(flag == false){
//                     displayText(textArray[j]);
//                     flag = true;
//                 }
//                 else{
//                     hideText(textArray[j]);
//                     flag = false;
//                 }
//             }
//             else{
//                 break;
//             }
//         }
//     }
// }
