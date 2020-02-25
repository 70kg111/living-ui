<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button icon="setting">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>

        <pre>

        </pre>
    </div>
</template>

<script lang="js">
  import Button from '../../../src/button';

  export default {
    name: 'button-demos.vue',
    components: {
      'g-button': Button
    }
  };
</script>

<style lang="scss" scoped>

</style>