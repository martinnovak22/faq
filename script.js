const questions = document.querySelectorAll(".question-container")

questions.forEach(item => {
    item.addEventListener("click", function(){
        item.classList.toggle("active");
        
    })
})