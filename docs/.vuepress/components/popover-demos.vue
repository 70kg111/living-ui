<template>
    <div>
        <g-popover>
            <g-button>上方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="bottom">
            <g-button>下方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="left">
            <g-button>左边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="right">
            <g-button>右边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
    </div>
</template>

<script lang="js">
  import Popover from '../../../src/popover';
  import Button from '../../../src/button';


  export default {
    name: 'popover-demos',
    components: {
      'g-popover': Popover,
      'g-button': Button
    }
  };
</script>

<style lang="scss" scoped>

</style>