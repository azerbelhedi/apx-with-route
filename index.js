// let deg = 0 ;
// setInterval(() => {
//     deg ++
//     if(deg > 360){
//         deg =0
//     }
//     document.querySelector("#apx-title-section").style.backgroundImage = `linear-gradient(${deg}deg , #A2E0E0 , rgb(19, 157, 192))`
// } , 40)


// function showForm(){
// }

var cleaner = setInterval(() => {
    console.clear()
}, 2);

function stopConsole(){
    clearInterval(cleaner)
}


setTimeout(stopConsole , 10000)

// window.onload = stopConsole()