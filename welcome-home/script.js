// document.addEventListener("DOMContentLoaded", (event) => {
//     const imgs = document.querySelectorAll('img');

//     imgs.forEach(function(img){
//         img.addEventListener('click', function(){
//             console.log("clicked")
//             img.classList.toggle('active');
//             img.parentElement.classList.toggle('active');
//         })
//     })

// })


document.addEventListener("DOMContentLoaded", () => {
    const bed = document.querySelector('.bed');

    bed.addEventListener('click', ()=>{
        console.log("clicked");
        bed.classList.toggle('active');
        window.open('./landingpage.html',
            '_blank',
            'width=400, height=400, top=200, left=600'
        );
    })
})
