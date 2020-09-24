<template>
  <div id="app">
    <xwVideoPlayer />
  </div>
</template>

<script>
import Vue from 'vue';
import { videoPlayer } from 'xw-playerjs';
import 'xw-playerjs/lib/xw-playerjs.css';

Vue.component(videoPlayer.name, videoPlayer);
export default {
  name: 'App'
};
</script>

<style>
#app {
  width: 640px;
  height: 320px;
}
#app .video-js {
  width: 100%;
  height: 100%;
}
</style>
