//takes all elements with class "question-container"
const questions = document.querySelectorAll(".question-container")


//give each of that element a click function
questions.forEach(item => {
    item.addEventListener("click", function(){
        item.classList.toggle("active");
        
    })
})