# danmaku-player
弹幕播放器 v1.0.0 2016-3-8

## 实现方式
封装了 [CommentCoreLibrary](https://github.com/jabbany/CommentCoreLibrary) 的 API, 让我们可以快速地在页面上添加出弹幕效果.

## API
```javascript
// 初始化弹幕播放器
// 关于 CommentManager 请参考 https://github.com/jabbany/CommentCoreLibrary
var cm = new CommentManager(document.querySelector('.comment-stage'));
var danmakuPlayer = new DanmakuPlayer(cm);

// 弹幕播放器提供的 API
danmakuPlayer.play();   // 开始播放弹幕
danmakuPlayer.pause();  // 暂停播放弹幕
danmakuPlayer.reset();  // 重置弹幕
danmakuPlayer.send({}); // 发送弹幕
```

## 示例
* [danmaku-player](http://ufologist.github.io/danmaku-player/)
* [SVG 弹幕](http://ufologist.github.io/danmaku-player/svg-danmaku.html)

## 参考
* [Joy-Zhang/DanmakuIt](https://github.com/Joy-Zhang/DanmakuIt)
* [jamesliu96/Damoo](https://github.com/jamesliu96/Damoo) canvas 渲染
* [绿色呼吸pm25.com](http://www.pm25.com/)
* [百度图话|弹幕](http://imageplus.baidu.com/italk_home/detail.html)