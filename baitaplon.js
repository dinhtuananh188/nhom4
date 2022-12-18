const music =new Audio("audio copy/5.mp3");
const songs = [
    {
        id: 1,
        songName:'Hãy Trao Cho Anh <br><div class="subtitle">Sơn Tùng M-TP</div>',
        poster:"img/1.jpg"
    },
    {
        id: 2,
        songName:'Okokokok  <br><div class="subtitle">Low G</div>',
        poster:"img/4.jpg"
    },
    {
        id: 3,
        songName:' Từ khi quen em anh đã mơ  <br><div class="subtitle">Sobin Hoàng Sơn</div>',
        poster:"img/z3969004986104_98d9d9693f8052182b53741c6173001c.jpg"
    },
    {
        id: 4,
        songName:'Yêu Thì Yêu Không Yêu Thì Yêu  <br><div class="subtitle">Anne</div>',
        poster:"img/z3969006075156_d3f49fb913b7d4dbdceda1ae67351735.jpg"
    },
    {
        id: 5,
        songName:'PHONG DẠ HÀNH <br><div class="subtitle">BT x LVT REMIX</div>',
        poster:"img/maxresdefault(1).jpg"
    },
]
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.onclick = function () {
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add("active1")
    }
    else{
        music.pause();
        wave.classList.remove("active1")
}
}


