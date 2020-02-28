<template>
    <div>
        <g-button-group>
            <g-button icon="left" icon-position="left">上一页</g-button>
            <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>
    </div>
</template>

<script lang="js">
  import ButtonGroup from '../../../src/button-group';
  import Button from '../../../src/button';

  export default {
    name: 'button-group-demos',
    components: {
      'g-button-group':ButtonGroup,
      'g-button': Button
    }
  };
</script>

<style lang="scss" scoped>

</style>