import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Col from './col';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Sider from './sider';
import Toast from './toast';
import plugin from './plugin';
import Tabs from './tabs';
import TabsHead from './tabs-head';
import TabsItem from './tabs-item';
import TabsBody from './tabs-body';
import TabsPane from './tabs-pane';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);

Vue.component('g-input', Input);

Vue.component('g-row', Row);
Vue.component('g-col', Col);

Vue.component('g-layout', Layout);
Vue.component('g-head', Header);
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);
Vue.component('g-sider', Sider);

Vue.component('g-toast', Toast);

Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-pane', TabsPane);

Vue.use(plugin);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi',
    selectedTab:'sports'
  },
  methods: {
    inputChange(e) {
      console.log(e);
    },
    showToast() {
      this.$toast(`你的智商目前是${parseInt(Math.random() * 100)}`, {
        position: 'top',
        closeButton: {
          text: '关闭',
          callback: () => {
            console.log('点击了关闭');
          }
        },
        autoClose: false,
        autoCloseDelay: 3
      });
    }
  },

});