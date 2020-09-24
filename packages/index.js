export { default as videoPlayer } from './videoPlayer/index';

import videoPlayer from './videoPlayer/index';
const components = [videoPlayer];
const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};
export default {
  install
};
