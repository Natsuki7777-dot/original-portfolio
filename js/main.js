//ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-icon').on('click', function () {
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');
});


$('.skill-text-hamburger').on('click', function () {
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');
});

$('.works-text-hamburger').on('click', function () {
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');
});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});



// Slickリファレンス
// https://kenwheeler.github.io/slick/

$('.carousel').slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 2000, // 自動再生の速さ、単位はミリ秒
  arrows: false, // 左右のナビゲーションを無効
  dots: true, // ドットを表示
  fade: true, // フェードで切り替え
});