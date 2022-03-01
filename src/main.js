import Vue from 'vue'
import App from './App.vue'
import Fastclick from 'fastclick'

//方案一
Fastclick.prototype.focus = function (targetElement) {
  let length;
  if (targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
      length = targetElement.value.length;
      targetElement.focus();
      targetElement.setSelectionRange(length, length);
  } else {
      targetElement.focus();
  }
};

Fastclick.attach(document.body);
// 方案二
// if ("addEventListener" in document && "ontouchstart" in window) {
//   FastClick.prototype.focus = function(targetElement) {
//     targetElement.focus();
//   };
//   document.addEventListener(
//     "DOMContentLoaded",
//     function() {
//       FastClick.attach(document.body);
//     },
//     false
//   );
// }

Vue.config.productionTip = false
import './styles/index.scss'

new Vue({
  render: h => h(App),
}).$mount('#app')
