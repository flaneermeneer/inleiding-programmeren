console.log('Flaneren zonder te castreren tijdens het emigreren om te gaan fileparkeren.');

//Text vak voor de afzender variabelen
var btnAfzender = document.querySelector('button')
var P = document.querySelector('p')
var Tekst = 'From: '
// postzegel variabelen
var hoofdstamp = document.querySelector(".hoofdStamp")
var ePurple = document.querySelector("#blok_een")
var eBlue = document.querySelector("#blok_twee")
var eRed = document.querySelector("#blok_drie")
var eMain = document.querySelector("#blok_vier")

// Envelop variabelen
var hoofdEnvelop = document.querySelector(".hoofdEnvelop")
var ePurple = document.querySelector("#env_een")
var eBlue = document.querySelector("#env_twee")
var eRed = document.querySelector("#env_drie")
var eMain = document.querySelector("#env_vier")
//arrays
var envArray = document.querySelectorAll('.envcolor')
var stampArray = document.querySelectorAll('.envstamp')
var stickerArray = document.querySelectorAll('.plakband')
//plakmethode
var hoofdPlak = document.querySelector('.hoofdPlak')
var ePlak = document.querySelector("#plak_1")
var eSeal = document.querySelector("#plak_2")
//surprise
var audioObj = new Audio('audio/rickroll.mp3')
var surprise = document.querySelector('.surprise')

//Do you have any idea how fast i am? NOT IN USE!!!!
//var audioObj2 = new Audio('audio/fast.mp3')
//var fast = document.querySelector('.fast')


//functie button en tekstvak
btnAfzender.addEventListener('click', function () {

    var Input = document.querySelector('input').value

    if (!Input) {

        console.log('geen input')

    } else {
        P.textContent = Tekst + Input


    }


})
//a surprise, in honour of our teacher who makes the informative videos we salute you!
surprise.addEventListener('click', function () {
    hoofdEnvelop.src = `./images/artur.png`
    audioObj.play();

})
surprise.addEventListener('dblclick', function () {

    audioObj.pause();
    audioObj.currentTime = 0;


})

//fast as f**k boiiiii. NOT FINISHED WORK IN PROGRESS DO NOT TOUCH.
// fast.addEventListener('click', function () {
//     hoofdEnvelop.src = `./images/keem.gif`
//     audioObj2.play();
//     audioObj.pause();

//     hoofdstamp.classList.add("hoofdStamp");
//     P.classList.add("flanatie");
//     Tekst.classList.add("flanatie");
//     hoofdPlak.classList.add("flanatie");


//     // double click to stop music & reset other variables through css 
//     })
//     fast.addEventListener('dblclick', function () {


//         audioObj2.pause();
//         audioObj2.currentTime = 0;




//         })


//envelope color picker Array
envArray.forEach(function (element) {
    element.addEventListener('click', function () {
        console.log(element.dataset.color)
        audioObj.pause();


        hoofdEnvelop.src = `./images/${element.dataset.color}.png`
    })

})
//stamp pickers array 
stampArray.forEach(function (element) {
    element.addEventListener('click', function () {
        console.log(element.dataset.stamp)
        hoofdstamp.src = `./images/${element.dataset.stamp}.png`
        hoofdstamp.classList.remove("hoofdStamp");
        audioObj.pause();

    })

})
//Sticker or Old school wax, envelope array
stickerArray.forEach(function (element) {
    element.addEventListener('click', function () {
        console.log(element.dataset.sticker)
        hoofdPlak.src = `./images/${element.dataset.sticker}.png`
        hoofdPlak.classList.remove("hoofdPlak");
        audioObj.pause();


    })

})