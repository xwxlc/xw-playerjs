<template>
  <video ref="videoPlayer" class="xw-video video-js">
    <source
      src="https://30510.long-vod.cdn.aodianyun.com/u/30510/m3u8/adaptive/b9b0ba5eb05eaf382ed7c3a1374aa8c6.m3u8"
    />
  </video>
</template>

<script>
import Video from 'video.js';
import 'video.js/dist/video-js.css';
export default {
  name: 'xwVideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {
          // autoplay: true,
          controls: true
        };
      }
    }
  },
  data() {
    return {
      player: null
    };
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    initVideo() {
      const videoPlayer = this.$refs.videoPlayer;
      const player = Video(videoPlayer, this.options, function onPlayerReady() {
        console.log('onPlayerReady', this);
      });
      this.player = player;
    }
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>
