console.log("Welcome to Spotiy Clone by Nidhish!");

// Declaring Variables to be used

let songIndex    = 0;
let audioElement = new Audio('/songs/1.mp3');
/* The getElementById() method returns the element that has the ID attribute with the specified value.

This method is one of the most common methods in the HTML DOM, and is used almost every time you want to manipulate, or get info from, an element on your document. */
let masterPlay    = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif           = document.getElementById('gif');

// Declaring an array for songs to be used!
/* Objects use names to access its "members". In this example, person.firstName returns John:
Object:
const person = {firstName:"John", lastName:"Doe", age:46}; */
let songs = [
    {songName: "Jaan Bolti Hai", filePath: "/songs/1.mp3", coverPath: "/covers/1.jpg" },
    {songName: "HUTT HUTT", filePath: "/songs/2.mp3", coverPath: "/covers/2.jpg" },
    {songName: "3:59AM", filePath: "/songs/3.mp3", coverPath: "/covers/3.jpg" },
    {songName: "Always on Top", filePath: "/songs/4.mp3", coverPath: "/covers/4.jpg" },
    {songName: "Grind", filePath: "/songs/5.mp3", coverPath: "/covers/5.jpg" },
    {songName: "1 se 23", filePath: "/songs/6.mp3", coverPath: "/covers/7.jpg" },
    {songName: "Miss tujhe", filePath: "/songs/7.mp3", coverPath: "/covers/6.jpg" },
]

// Handle Play/Pause clicks in bottom 
masterPlay.addEventListener('click', () => {
    // if audio element is paused or audio element is not yet started then ...
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else { // If audio is already playing
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity =0;
    }
})

// Update time in Progrss Bar
audioElement.addEventListener('timeupdate', () => {
    console.log("Time Update"); // To detect change in progress bar 
    // Update progress Bar

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100); // This basically is calculating the percentage of song played
    // console.log(progress);
    myProgressBar.value = progress; // This increases progress bar status as song plays 
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/100);
})