<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script lang="js">
  export default {
    name: 'GuluLayout',
    data() {
      return {
        layoutClass: {
          hasSider: false
        }
      };
    },

    mounted() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'GuluSider') {
          this.layoutClass.hasSider = true;
        }
      });
    }
  };
</script>

<style lang="scss" scoped>
    .layout {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        &.hasSider {
            display: flex;
            flex-direction: row;
        }
    }
</style>