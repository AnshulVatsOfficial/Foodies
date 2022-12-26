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