const songs = [
    {
        id: 1,
        songName: "Blank Space",
        artistName: "Taylor Swift",
        playlistname: "Midnights The Til Dawn Edition",
        poster:"taylorlist.jfif",
        duration: "03:54"
    },
    {
        id: 2,
        songName: "Sobrio",
        artistName: "Maluma",
        playlistname: "Medallo en el Mapa",
        poster:"malumalist.jfif",
        duration: "03:21"
    },
    {
        id: 3,
        songName: "Someone You Loved",
        artistName: "Lewis Capaldi",
        playlistname: "Divinely Uninspired to a Hellish Extent",
        poster:"lewislist.jpg",
        duration: "03:01"
    },
    {
        id: 4,
        songName: "Moonlight",
        artistName: "XXXTENTACION",
        playlistname: "?",
        poster: "Moon.webp",
        duration: "02:17"
    },
    {
        id: 5,
        songName: "I Don't Do Drugs",
        artistName: "Doja Cat",
        playlistname: "Planet Her",
        poster: "dojolist.webp",
        duration: "03:09"
    },
    {
        id: 6,
        songName: "34+35",
        artistName: "Ariana Grande",
        playlistname: "Positions",
        poster: "araianalist.webp",
        duration: "02:50"
    }
]

const artist = [
    {
        poster: "DuaLipa.webp",
        name: "Dua Lipa"
    },
    {
        poster: "Doja.webp",
        name: "Doja Cat"
    },
    {
        poster: "xxxtentacion.webp",
        name: "XXXTENTACION"
    },
    {
        poster: "Ariana.webp",
        name: "Ariana Grande"
    },
    {
        poster: "Weekend.webp",
        name: "The Weekend"
    },
    {
        poster: "Weekend.webp",
        name: "The Weekend"
    }
]


// Insertion of details of songs 
Array.from(document.getElementsByClassName("list")).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByClassName('list1a')[0].innerHTML = songs[i].id;
    e.getElementsByClassName('list1f')[0].innerHTML = songs[i].songName;
    e.getElementsByClassName('list1d')[0].innerHTML = songs[i].playlistname;
    e.getElementsByClassName('list1c')[0].innerHTML = songs[i].artistName;
    e.getElementsByClassName('list1e')[0].innerHTML = songs[i].duration;
})

// Insertion of Artist 
Array.from(document.getElementsByClassName("leftlogo")).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src = artist[i].poster;
    e.getElementsByClassName('leftlogoname')[0].innerHTML = artist[i].name;
})


// Playbar Songs Details 
Array.from(document.getElementsByClassName('list1f')).forEach((e,i)=> {
    e.addEventListener('click',(el) => {
        ind= el.target.innerHTML;
        music.src = `${ind}.mp3`;
        music.play();
        masterPlay.style.display='none';
        pause.style.display='block';
        if (ind == songs[i].songName){
            b=songs[i].artistName;
            a=songs[i].songName;
            p= songs[i].playlistname;
            e= `${b} - ${p}`;
            im=songs[i].poster;
            document.getElementById("playname").innerHTML = a;
            document.getElementById("playdet").innerHTML = e;
            document.getElementsByTagName("img")[14].src=im;
        }
    })
})


Array.from(document.getElementsByClassName('back')).forEach((e,i)=> {
    e.addEventListener('click',(el) => {
        s = document.getElementById("playname").innerHTML;
        console.log(s);
        i=0;
        while (i<7){
            if (s == songs[i].songName){
                console.log("hello");
                break;
            }
            else{
                i++;
            }
        }
        if (i>0){
            i--;
            a=songs[i].songName;
            music.src = `${a}.mp3`;
            music.play();
            b=songs[i].artistName;
            p= songs[i].playlistname;
            e= `${b} - ${p}`;
            im=songs[i].poster;
            document.getElementById("playname").innerHTML = a;
            document.getElementById("playdet").innerHTML = e;
            document.getElementsByTagName("img")[14].src=im;
                
            if (music.paused || music.currentTime <= 0) {
                masterPlay.style.display = 'none';
                pause.style.display = 'block'
            }else{
                music.pause();
                masterPlay.style.display = 'none';
                pause.style.display = 'block'
        }
        }
    })
})


Array.from(document.getElementsByClassName('forward')).forEach((e,i)=> {
    e.addEventListener('click',(el) => {
        s = document.getElementById("playname").innerHTML;
        console.log(s);
        i=0;
        while (i<7){
            if (s == songs[i].songName){
                console.log("hello");
                break;
            }
            else{
                i++;
            }
        }
        if (i<7){
            i++;
            a=songs[i].songName;
            music.src = `${a}.mp3`;
            music.play();
            b=songs[i].artistName;
            p= songs[i].playlistname;
            e= `${b} - ${p}`;
            im=songs[i].poster;
            document.getElementById("playname").innerHTML = a;
            document.getElementById("playdet").innerHTML = e;
            document.getElementsByTagName("img")[14].src=im;
        }
        if (music.paused || music.currentTime <= 0) {
            masterPlay.style.display = 'none';
            pause.style.display = 'block'
        }else{
            music.pause();
            masterPlay.style.display = 'none';
            pause.style.display = 'block'
        }
    })
})
