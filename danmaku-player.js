/**
 * 弹幕播放器
 * 
 * @version 1.0.0 2016-3-8
 * @author https://github.com/ufologist/danmaku-player
 * @license MIT
 */
(function(global) {
    function DanmakuPlayer(commentManager, options) {
        this.commentManager = commentManager;

        this.updateCmTimeIntervalId = -1;
        this.playhead = 0;
        this._status = DanmakuPlayer.STATUS.stopped;

        this.options = options || {};
        this.options.refreshMs = this.options.refreshMs || 42;
    }

    /**
     * 开始播放弹幕
     */
    DanmakuPlayer.prototype.play = function() {
        if (this._status == DanmakuPlayer.STATUS.playing) {
            return;
        }

        var thiz = this;
        this.commentManager.start();

        // 更新弹幕时间轴
        var startTime = new Date().getTime() - this.playhead;
        this.updateCmTimeIntervalId = setInterval(function() {
            thiz.playhead = new Date().getTime() - startTime;
            thiz.commentManager.time(thiz.playhead);
        }, this.options.refreshMs);

        this._status = DanmakuPlayer.STATUS.playing;
    };

    /**
     * 暂停播放弹幕
     */
    DanmakuPlayer.prototype.pause = function() {
        this.commentManager.stop();
        clearInterval(this.updateCmTimeIntervalId);

        this._status = DanmakuPlayer.STATUS.paused;
    };

    /**
     * 重置弹幕
     *
     * 这样重新开始播放弹幕时会从第一条开始播放
     */
    DanmakuPlayer.prototype.reset = function() {
        this.pause();
        this.commentManager.clear();
        this.commentManager.time(0);
        this.playhead = 0;

        this._status = DanmakuPlayer.STATUS.stopped;
    };

    /**
     * 发送一条弹幕
     *
     * 数据结构示例
     * this.send({
     *     size: 25,
     *     color: 0xffff00,
     *     mode: 1,
     *     text: '我也发一条'
     * });
     */
    DanmakuPlayer.prototype.send = function(comment) {
        this.commentManager.send(comment);
    };

    DanmakuPlayer.STATUS = {
        stopped: 0,
        playing: 1,
        paused: 2
    };

    global.DanmakuPlayer = DanmakuPlayer;
})(window);