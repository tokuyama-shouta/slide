'use strict'

{
  const images = [ //画像の配列
    'img/pic00.png',
    'img/pic01.png',
    'img/pic02.png',
    'img/pic03.png',
    'img/pic04.png',
    'img/pic05.png',
    'img/pic06.png',
    'img/pic07.png',
  ];

  let currentIndex = 0; //今何番目の画像を表示しているか

  const mainimage = document.getElementById('main'); //ID取得
  mainimage.src =  images[currentIndex];

  images.forEach((image,index) => { //imgの配列の要素の数のぶんだけループを回すのでforEach
    //引数を2つにすると配列の中でこのimgが何番目であるかをindexで表現できる
    const img = document.createElement('img'); //img要素を生成
    img.src = image;

    const li = document.createElement('li'); //li要素を生成

    if(index === currentIndex){
      li.classList.add('current'); //indexとcurrentIndexが同じならクラスをつける
    }
    li.addEventListener('click',() =>{
      mainimage.src = image;
      const thumbnails = document.querySelectorAll('.thumbnails > li');//li要素取得
      thumbnails[currentIndex].classList.remove('current');
      //currentクラスがついている画像のクラスを取り除く
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');
      //更新されたindex番号にクラスをつける
    });

    li.appendChild(img); //liの子要素としてimgを追加
    document.querySelector('.thumbnails').appendChild(li);
    //querySelectorでthumbnailsクラスがついた要素を指定しつつ、
    //appendChildでliを追加

  });

  const next = document.getElementById('next'); //ID取得
  next.addEventListener('click',() => {
    let target = currentIndex + 1; //次のサムネイル
    if(target === images.length){
      target = 0; //ターゲットとimagesの要素数と同じになれば0に戻す
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
    //サムネイルの一覧を取得
  });

  const prev = document.getElementById('prev'); //ID取得
  prev.addEventListener('click',() => {
    let target = currentIndex - 1; //前のサムネイル
    if(target < 0){
      target = images.length -1; //1つ前のimgにいく
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
    //サムネイルの一覧を取得
  });

  let timeoutId;//setTimeoutの返り値を管理する変数

  const play = document.getElementById('play'); //ID取得

  let isPlaying = false; //値がfalseの変数

  play.addEventListener('click',() => {
    if(isPlaying === false){
      playSlideshpw(); //関数宣言
      play.textContent = 'Pause'; //playのテキストを変更

    }else{
      clearTimeout( timeoutId);//setTimeoutの返り値を受け取る
      play.textContent = 'Play';//テキスト変更
    }
    isPlaying = !isPlaying; //turueかfalseの切り替え
  });

  function playSlideshpw() {
    timeoutId = setTimeout(() => {
      next.click();//次の画像にいく処理
      playSlideshpw();
    },1000);//setTimeoutで1秒毎にnext.Clickを繰り返す
  }












}