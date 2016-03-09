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
danmakuPlayer.play();
danmakuPlayer.pause();
danmakuPlayer.reset();
danmakuPlayer.send({});
```

## 参考
* [Joy-Zhang/DanmakuIt](https://github.com/Joy-Zhang/DanmakuIt)
* [jamesliu96/Damoo](https://github.com/jamesliu96/Damoo) canvas 渲染
* [绿色呼吸pm25.com](http://www.pm25.com/)