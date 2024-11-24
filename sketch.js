
let sound; // 音声ファイルを格納する変数

function preload() {
  // 音声ファイルをロード（ファイル名をアップロード後に適宜変更）
  sound = loadSound('demoday_kimodaru.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight); // 画面全体をキャンバスに設定
  background(200); // 背景色を設定
  
  // 再生ボタンの作成
  let playButton = createButton('再生');
  playButton.position(width / 2 - 50, height / 2 - 25); // ボタンの位置
  playButton.size(100, 50); // ボタンのサイズ
  playButton.style('font-size', '20px'); // ボタンの文字サイズ
  
  // ボタンがクリックされたときに音声を再生/停止するイベント
  playButton.mousePressed(() => {
    if (sound.isPlaying()) {
      sound.stop(); // 音声を停止
    } else {
      sound.play(); // 音声を再生
    }
  });
}

function draw() {
  // 背景の再描画（クリック後もボタンが見えるようにする）
  background(200);
}
