import Toast from './toast';

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message) {
      let Constructor = Vue.extend(Toast);
      let toast = new Constructor({
        propsData: {
          position:'top',
          text: '关闭',
          callback: () => {
            console.log('点击了关闭');
          }
        }
      });
      toast.$slots.default = [message];
      console.log(message);
      toast.$mount();
      document.body.appendChild(toast.$el);
    };
  }
};