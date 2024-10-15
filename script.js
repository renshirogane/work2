"use strict"

"use strict"
const splide = new Splide(".splide", {
  type: "loop", // スライダーをループさせる
  pauseOnHover: false, // カーソルが乗っても停止しない
  pauseOnFocus: false, // フォーカスを当てても停止しない
  interval: 2000, // 自動再生の間隔
  speed: 1000, // スライドの移動速度
  perPage: 3, // デフォルトの表示枚数
  breakpoints: {
    1040: {
      perPage: 1, // 1040px未満では1枚だけ表示
    },
  },
}).mount();


// ハンバーガーメニューのイベントリスナーはそのまま
$(".hamburger_force_clicked").click(function () {
  $(".hamburger_action_clicked").toggleClass('_emergent');


  // ロゴ画像の切り替え
  const logoImg = $(".header-symbol img");
  const isMenuOpen = $(".hamburger").hasClass("_emergent");

  if (isMenuOpen) {
    logoImg.attr("src", "./img/シンボル_黒.png"); // メニューが開いたとき黒いロゴに変更
  } else {
    logoImg.attr("src", "./img/シンボル_白.png"); // メニューが閉じたとき白いロゴに戻す
  }
});