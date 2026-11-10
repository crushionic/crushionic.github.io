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

// WORKING BED POPUP
let bedOpened = false;
let leftShelfOpen = false;
let rightShelfOpen=false;
let deskOpen = false;
let chairOpen = false;
let posterOpen = false;
let bulletinBoardOpen=false;





document.addEventListener("DOMContentLoaded", (event) => {
    const memory_heading = document.querySelector('.memory_heading');
    const done_heading = document.querySelector('.done_heading');
    function everythingOpen(){
        if (bedOpened && leftShelfOpen && rightShelfOpen && posterOpen && deskOpen && bulletinBoardOpen && chairOpen){
            console.log("ITWORKS");
            memory_heading.classList.add('active');
            done_heading.classList.add('active');
        }
    }

    //temperature and time stuff .. not working

    // const timePST = document.querySelector('.time');
    
    // function timeCheck(){
    //     const timeNow = new Date();
    //     timePST.textContent = timeNow.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit', timeZone: 'America/Los_Angeles'})
    // }
    // timeCheck();
    // setInterval(timeCheck, 1000 * 60);


    // const tempSF = document.querySelector('.temp');

    // const LAT = 37.77;
    // const LON = -122.4194;

    // async function tempUpdate(){
    //     try{
    //         const response = await fetch(
    //             'https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m&temperature_unit=fahrenheit'
    //         );
    //         const data = await response.json();
    //         tempSF.textContent = '${Math.round(data.current.temperature_2m)}°F';
    //     } catch (err) {
    //         console.log("temp failed", err);
    //     }
    // }

    // tempUpdate();
    // setInterval(tempUpdate, 1000 * 60 * 10)


    const bed = document.querySelector('.bed');
    

    bed.addEventListener('click', (event)=>{
        console.log("clicked");
        bed.classList.add('active');
        bedOpened = true;
        console.log(bedOpened);
        window.open('./bed.html',
            '_blank',
            'width=600, height=400, top=200, left=600'
        );
        window.open('./bed_text.html',
            '_blank',
            'width=250, height=20, top=100, left=400'
        );
        everythingOpen()
    })
    
    const leftshelf = document.querySelector('.left_shelf');
    

    leftshelf.addEventListener('click', (event) => {

        console.log("shelf clicked");
        leftShelfOpen = true;
        leftshelf.classList.add('active');
        window.open('./left_shelf.html',
            '_blank',
            'width=750, height=420, top=200, left=600'
        )
        window.open('./left_shelf_text.html',
            '_blank',
            'width=220, height=150, top=600, left=1200'
        )
        everythingOpen()
    })


    const rightshelf = document.querySelector('.right_shelf');
    
    rightshelf.addEventListener('click', (event) => {
        console.log("right shelf clicked");
        rightShelfOpen=true;
        rightshelf.classList.add('active');
        window.open('./right_shelf.html',
            '_blank',
            'width=800, height=600, top=200, left=200'
        )
        window.open('./right_shelf_text.html',
            '_blank',
            'width=250, height=50, top=800, left=850'
        )
        everythingOpen()
    })

    const desk = document.querySelector('.desk');
    
    desk.addEventListener('click', (event) => {
        console.log("desk clicked");
        deskOpen=true;
        desk.classList.add('active');
        window.open('./desk.html',
            '_blank',
            'width=450, height=602, top=200, left=400'
        )
        window.open('./desk_text.html',
            '_blank',
            'width=250, height=100, top=800, left=800'
        )
        everythingOpen()
    })
    
    const chair = document.querySelector('.chair');
    
    chair.addEventListener('click', (event) => {
        console.log("chair clicked");
        chairOpen=true;
        chair.classList.add('active');
        window.open('./chair.html',
            '_blank',
            'width=800, height=378, top=300, left=450'
        )
        window.open('./chair_text.html',
            '_blank',
            'width=280, height=100, top=250, left=250'
        )
        everythingOpen()
    })

    const poster = document.querySelector('.poster')
    
    poster.addEventListener('click', (event) => {
        console.log("poster clicked");
        posterOpen = true;
        poster.classList.add('active');
        window.open('./poster.html',
            '_blank',
            'width=800, height=575, top=355, left=700'
        )
        window.open('./poster_text.html',
            '_blank',
            'width=250, height=100, top=300, left=500'
        )
        everythingOpen()
    })

    const bulletinboard = document.querySelector('.bulletin_board')
    

    bulletinboard.addEventListener('click', (event) => {
        console.log("board clicked");
        bulletinBoardOpen = true;
        
        bulletinboard.classList.add('active');
        window.open('https://www.theflouredcamera.com/instant-pot-braised-pork-belly/',
            '_blank',
            'width=500, height=800, top=50, left=50'
        )
        window.open('https://fromasmallkitchn.com/2025/04/11/carrot-cake-with-brown-butter-cream-cheese-frosting/',
            '_blank',
            'width=1000, height=550, top=200, left=500'
        )
        window.open('./bulletin_board_text.html',
            '_blank',
            'width=250, height=100, top=750, left=1400'
        )
        everythingOpen()
    })



    

})






