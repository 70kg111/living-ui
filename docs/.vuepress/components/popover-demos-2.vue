<template>

    <div>
        <g-popover trigger="hover">
            <g-button>上方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="bottom" trigger="hover">
            <g-button>下方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="left" trigger="hover">
            <g-button>左边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="right" trigger="hover">
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
    name: 'popover-demos-2',
    components: {
      'g-popover': Popover,
      'g-button': Button
    }
  };
</script>

<style lang="scss" scoped>

</style>