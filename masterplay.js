const music = new Audio('Blank Space.mp3');

let masterPlay = document.getElementById("masterPlay");
let pause = document.getElementById("pausebar");

// Pause Button 
pause.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
    }else{
        music.pause();
        masterPlay.style.display = 'block';
        pause.style.display = 'none'
    }
})

// Play Button 
masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.style.display = 'none';
        pause.style.display = 'block'
    }else{
        music.pause();
    }
})



// time Update / Progress of song

let start = document.getElementById("starttime");
let end = document.getElementById("endtime");
let line1 = document.getElementById("line1");

music.addEventListener('timeupdate',()=> {
    curr = music.currentTime;
    fcurr = music.duration;
    start.innerHTML = curr;
    end.innerHTML = fcurr;
    
    let min1 = Math.floor(curr/60);
    let sec1 = Math.floor(curr%60);
    let min2 = Math.floor(fcurr/60);
    let sec2 = Math.floor(fcurr%60);

    if (sec1 < 10){
        start.innerText = `0${min1}:0${sec1}`;
    }
    else{
        start.innerText = `${min1}:${sec1}`;
    }

    if (sec2 < 10){
        end.innerText = `0${min2}:0${sec2}`;
    }
    else{
        end.innerText = `0${min2}:${sec2}`;
    }

    let progress = parseFloat((curr / fcurr) * 100);
    // console.log(line1);
    line1.style.width = `${progress}%`
})



playnow = document.getElementById("buttons");
// console.log(playnow);

// onclicking Play Now button 

playnow.addEventListener('click',() => {
    link = songs[0].songName;
    music.src = `${link}.mp3`;
    music.play();
    if (music.paused || music.currentTime <= 0) {
        masterPlay.style.display = 'none';
        pause.style.display = 'block'
    }else{
        music.pause();
        masterPlay.style.display = 'none';
        pause.style.display = 'block'
    }
    b=songs[0].artistName;
    a=songs[0].songName;
    p= songs[0].playlistname;
    e= `${b} - ${p}`;
    im=songs[0].poster;
    document.getElementById("playname").innerHTML = a;
    document.getElementById("playdet").innerHTML = e;
    document.getElementsByTagName("img")[14].src=im;
})