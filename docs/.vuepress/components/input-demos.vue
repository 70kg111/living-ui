<template>
    <div>
        <g-input value="中文"></g-input>
        <g-input value="中文" readonly></g-input>
        <g-input value="中文" disabled></g-input>
        <g-input value="中文" error="错误"></g-input>
    </div>
</template>

<script lang="js">
  import Input from '../../../src/input';

  export default {
    name: 'input-demos',
    components: {
      'g-input': Input,
    },

  };
</script>

<style lang="scss" scoped>

</style>