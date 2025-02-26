console.log("Welcome to Spotify");
//Initialize the variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Salam-e-Ishq",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"kaise-hua",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"tum-mile",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"offo",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"mast-magan",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"uff",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"tu-jane-na",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"tu-chahiye",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"tum-ho",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"bulleya",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
     
]
   songItems.forEach((element,i)=>{
    
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
   })
//audioElement.Play();
    //handle play/pause click
    masterPlay.addEventListener('click',()=>{
        if(audioElement.paused||audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-regular', 'fa-circle-play');
            masterPlay.classList.add('fa-regular', 'fa-circle-pause');
            gif.style.opacity=1;
        }
        else{
            audioElement.pause();
        masterPlay.classList.remove('fa-regular', 'fa-circle-pause');
        masterPlay.classList.add('fa-regular', 'fa-circle-play');
        gif.style.opacity=0;
        }
    })
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeallPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-regular', 'fa-circle-pause');
        element.classList.add('fa-regular', 'fa-circle-play')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
makeallPlays();

songIndex=parseInt(e.target.id);
e.target.classList.remove('fa-regular', 'fa-circle-play');

e.target.classList.add('fa-regular', 'fa-circle-pause');
masterSongName.innerText=songs[songIndex].songName;
audioElement.src =`songs/${songIndex+1}.mp3`;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-regular', 'fa-circle-play');
masterPlay.classList.add('fa-regular', 'fa-circle-pause');
})
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
masterPlay.classList.remove('fa-regular', 'fa-circle-play');
masterPlay.classList.add('fa-regular', 'fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
masterPlay.classList.remove('fa-regular', 'fa-circle-play');
masterPlay.classList.add('fa-regular', 'fa-circle-pause');
})