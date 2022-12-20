const music = new Audio("audio copy/5.mp3");

const songs = [
    {
        id: 1,
        songName: 'Hãy Trao Cho Anh',
        nghesi: "Sơn Tùng ",
        poster: "img/1.jpg"
    },
    {
        id: 2,
        songName: 'Waiting For You',
        nghesi: "Mono",
        poster: "img/2.jpg"
    },
    {
        id: 3,
        songName: 'BIGCITYBOI',
        nghesi: "TOULIVER x BINZ",
        poster: "img/3.jpg"
    },
    {
        id: 4,
        songName: 'Okokokok',
        nghesi: "Low G",
        poster: "img/4.jpg"
    },
    {
        id: 5,
        songName: 'Phong Dạ Hành',
        nghesi: "BT x LVT REMIX ",
        poster: "img/5.jpg"
    },
    {
        id: 6,
        songName: 'Lạc Trôi',
        nghesi: "Sơn Tùng ",
        poster: "img/6.jpg"
    },
    {
        id: 7,
        songName: 'Lạc Trôi',
        nghesi: "Sơn Tùng ",
        poster: "img/6.jpg"
    },
    {
        id: 8,
        songName: 'Lạc Trôi',
        nghesi: "Sơn Tùng ",
        poster: "img/6.jpg"
    },
    {
        id: 9,
        songName: 'Lạc Trôi',
        nghesi: "Sơn Tùng ",
        poster: "img/6.jpg"
    },
    {
        id: 10,
        songName: 'Lạc Trôi',
        nghesi: "Sơn Tùng ",
        poster: "img/6.jpg"
    },
    {
        id: 11,
        songName: 'Lạc Trôi',
        nghesi: "Sơn Tùng ",
        poster: "img/6.jpg"
    },


]
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
function playmusic() {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add("active1")
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");

    }
    else {
        music.pause();
        wave.classList.remove("active1")
        masterPlay.classList.add("bi-play-fill");
        masterPlay.classList.remove("bi-pause-fill");

    }
}
masterPlay.onclick = function chaynhac() {
    playmusic();
};


let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
Array.from(document.getElementsByClassName("playlistPlay")).forEach((e) => {
    e.addEventListener("click", function (el) {
        let index = el.target.id;
        //console.log(index);
        music.src = `audio copy/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        playmusic();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        let hi = songs[index].id - 1;
        if (index == hi) {
            document.getElementById('tenbaihat').innerText = songs[index - 1].songName;
            document.getElementById('sub').innerText = songs[index - 1].nghesi;
        }
        return index;
    })
})

let musicid = Math.floor((Math.random() * songs.length) + 1);
let prev = document.getElementById("prev");
prev.onclick = function () {
    musicid--;
    musicid < 1 ? musicid = songs.length : musicid = musicid;
    //console.log(index);
    music.src = `audio copy/${musicid}.mp3`;
    poster_master_play.src = `img/${musicid}.jpg`;
    playmusic();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    let hi = songs[musicid].id - 1;
        if (musicid == hi) {
            document.getElementById('tenbaihat').innerText = songs[musicid - 1].songName;
            document.getElementById('sub').innerText = songs[musicid - 1].nghesi;
        }
}
let next = document.getElementById("next");
next.onclick = function () {
    musicid++;
    musicid > songs.length ? musicid = 1  : musicid = musicid;
    //console.log(index);
    music.src = `audio copy/${musicid}.mp3`;
    poster_master_play.src = `img/${musicid}.jpg`;
    playmusic();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    let hi = songs[musicid].id - 1;
        if (musicid == hi) {
            document.getElementById('tenbaihat').innerText = songs[musicid - 1].songName;
            document.getElementById('sub').innerText = songs[musicid - 1].nghesi;
        }
}


let currentStart =document.getElementById("currentStart");
let currentEnd =document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate",()=>{
    let music_curr =music.currentTime;
    let music_dur =music.duration;
    //console.log(music_dur);
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
     
    //console.log(min);
    if (sec1<10){
            sec1 =`0${sec1}`;
        }
    
    currentEnd.innerText =`${min1}:${sec1}`;

     let min2 = Math.floor(music_dur/60)
     let sec2 = Math.floor(music_dur%60);

     if (sec2<10){
        sec2 =`0${sec2}`;
    }
      
    currentStart.innerText =`${min2}:${sec2}`;
    
    let progressBar = parseInt((music_curr/music_dur)*100);
    seek.value = progressBar;
    //console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;
})

seek.addEventListener("change",()=>{
    music.currentTime = seek.value*music.duration/100;
})