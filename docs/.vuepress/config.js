module.exports = {
  base:'/living-ui/',
  title: 'Living UI',
  description: '一个易用的UI框架',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/tabs',
          '/components/grid',
          '/components/layout',
          '/components/popover',
        ]
      }
    ],
    nav: [
      {text: '主页', link: '/'},
      {text: '源码', link: 'https://github.com/70kg111/living-ui'},
      {text: 'GitHub', link: 'https://github.com/70kg111'},
    ],
  },

};