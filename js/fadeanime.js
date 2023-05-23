// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){

    // ふわっ
    $('.fadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fade-in');// 画面内に入ったらfade-inというクラス名を追記
      }
      });
  }

  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });