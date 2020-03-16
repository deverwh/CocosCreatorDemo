cc.Class({
    extends: cc.Component,

    properties: {
        audio: {
            default: null,
            type: cc.AudioClip,
        },

        boom: {
            default: null,
            type: cc.AudioClip,
        }
    },

    onLoad () {
        var anim = this.getComponent(cc.Animation);
        anim.play();
    },

    playQianniao(){
        cc.audioEngine.play(this.audio);
    },

    playBoom(){
        cc.audioEngine.play(this.boom);
    }
});
