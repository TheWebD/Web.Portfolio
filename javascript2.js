function buttonTransition(){
    let secBtn = document.querySelectorAll('.control');
    for(let i = 0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", " ")
            this.className += " active-btn";
        })
    }
}
buttonTransition();

function pageTransition(){
    let sections = document.querySelectorAll('.section');
    let secBtns = document.querySelectorAll('.controls');
    let allSections = document.querySelectorAll('.main-content');
    allSections[0].addEventListener('click', (e) => {
        let id = e.target.dataset.id;
        
         if(id){
            secBtns.forEach((btn) => {
                btn.classList.remove("active")
            })
            e.target.classList.add("active")

            sections.forEach((section) => {
                section.classList.remove("active")
            })
            
            let element = document.getElementById(id)
            element.classList.add("active")
         }
    })
}
pageTransition();

function getMonthExperience(startDate, endDate){
    return (
        endDate.getMonth() - 
        startDate.getMonth() + 
        12 * (endDate.getFullYear() - startDate.getFullYear())
    );
}

function dispatchMonthCount(){
let getDate = new Date()
let getDay = getDate.getDay()
let getMonth = document.querySelectorAll('#getMonthSkill')

    if(getDay.length >= 2){
        let getFullDate = getDate.getFullYear()+"-"+getDate.getMonth()+"-"+getDay
        getMonth.forEach(elementId => {
            elementId.innerHTML = getMonthExperience(new Date('2022-07-01'), new Date(String(getFullDate)))
        });
    }else{
        let getFullDate = getDate.getFullYear()+"-"+getDate.getMonth()+"-"+"0"+getDay
        getMonth.forEach(elementId => {
            elementId.innerHTML = getMonthExperience(new Date('2022-07-01'), new Date(String(getFullDate)))
        });
    }
}
dispatchMonthCount();

function submitBtn(){
var SubmitBtn = document.querySelectorAll('#submitBtn')
    SubmitBtn[0].addEventListener('click', () => {
        window.alert("It's not working properly, Test Button Only!")
    })
}
submitBtn()

    
