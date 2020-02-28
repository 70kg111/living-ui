<template>
    <g-layout style="color: white;">
        <g-header class="header" style="height: 50px; background:lightskyblue;">
            header
        </g-header>
        <g-content class="content" style="height: 50px; background:deepskyblue;">
            content
        </g-content>
        <g-footer class="footer" style="height: 50px; background:lightskyblue;">
            footer
        </g-footer>
    </g-layout>
</template>

<script lang="js">
  import Layout from '../../../src/layout';
  import Header from '../../../src/header';
  import Content from '../../../src/content';
  import Footer from '../../../src/footer';
  import Sider from '../../../src/sider';

  export default {
    name: 'layout-demos',
    components: {
      'g-layout': Layout,
      'g-header': Header,
      'g-content': Content,
      'g-footer': Footer,
      'g-sider': Sider,
    }
  };
</script>

<style lang="scss" scoped>

</style>