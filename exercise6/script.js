// let display = "click me"
console.log("helloooo");




document.addEventListener("DOMContentLoaded", (event) => {
    const buttons = document.querySelectorAll('button');
    const divs = document.querySelectorAll('div');


    buttons.forEach(function(button){
        button.addEventListener('click', function(){
            console.log("clicked")
            // buttons.classList.toggle('active')
            divs.forEach(function(div){
                console.log("clicked again")

                div.classList.toggle('active')
                button.classList.toggle('active')
                // div.fish.classList.toggle('active')
            })
        })
    })
})