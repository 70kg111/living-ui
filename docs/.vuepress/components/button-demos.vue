<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button icon="setting">设置</g-button>
        <g-button icon="download">下载</g-button>
        <g-button icon="thumbs-up">点赞</g-button>
        <g-button :loading="true">登录中</g-button>
    </div>
</template>

<script lang="js">
  import Button from '../../../src/button';

  export default {
    name: 'button-demos',
    components: {
      'g-button': Button
    }
  };
</script>

<style lang="scss" scoped>

</style>