//home
var hamburger = $('.hamburger-menu');
// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});


//home-songs
function playAudio(trackNumber) {
  const audio1 = document.querySelector(".my-audio1");
  const audio2 = document.querySelector(".my-audio2");
  const audio3 = document.querySelector(".my-audio3");

  let audio;

  if (trackNumber === 1) {
    audio = audio1;
  } else if (trackNumber === 2) {
    audio = audio2;
  } else if (trackNumber === 3) {
    audio = audio3;
  }

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

//playlistページ
$(document).ready(function() {
const urlParams = new URLSearchParams(window.location.search);
const song = urlParams.get('song');

$('.audio-player').each(function() {
if ($(this).data('song') === song) {
$(this)[0].play();
$(this).parent().css('background-color','#612c75');
}
});
});


//songsearchページ

$(document).ready(function() {
$('.search-box').on('input', function() {
const searchTerm = $(this).val().toLowerCase();

$('.song-item').each(function() {
const songName = $(this).text().toLowerCase();
if (songName.includes(searchTerm)) {
$(this).show();
} else {
$(this).hide();
}
});
});

$('.song-item').on('click', function() {
const song = $(this).data('song');
window.location.href = 'https://natsukikurosumi.sakura.ne.jp/oroginal-portfolio/works/works_lofiplaylist/lofiplaylist_playlist.html?song=' + song;
});
});

