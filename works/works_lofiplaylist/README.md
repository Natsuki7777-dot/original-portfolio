# Lo-Fi Lounge

自作のLo-Fi曲（AI使用無し）を再生できる音楽プレイヤーです。

**デモ:** https://natsukikurosumi.com/original-portfolio/works/works_lofiplaylist/index.html

## 機能

- 再生/停止、audioタグの使用
- 曲の自動リピート機能
- 曲名の検索、ムード別のタグでの絞り込み

## 使用技術

HTML / CSS / JavaScript

## 設計で工夫した点

- lofiplaylist_songsearch.htmlで、自分のムードに合わせて曲を検索できるようにしたこと。
- 全体的にデザインにこだわったこと。photoshopを使ってデザインカンプを作成し、色の配色バランス(ベースカラー70%/サブカラー25%/アクセントカラー5%目安)を意識して構成しました。

## 苦労した点

- **問題:** 同時にaudioをクリックすると、曲が同時再生されてしまう問題です。
- **原因:** audio要素はそれぞれ独立して動作し、ほかのaudioの再生状態を考慮しない。また、クリック時の処理はクリックした曲の再生/停止を切り替えるだけで、ほかの曲を止めていなかったのが原因でした。
- **解決:** documentでplayイベントを受け取り、再生されたaudio以外をすべて一時停止するようにした。playイベントはバブリングしないため、addEventListenerの第3引数をtrueにして、キャプチャで受け取るようにしました。

## 今後の改善

- Web Audio APIを使った波形表示
- 雨音などの環境音を重ねるミキサー
