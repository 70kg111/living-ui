<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script lang="js">
  import Vue from 'vue';

  export default {
    name: 'GuluTabs',
    props: {
      selected: {
        type: String,
        required: true,
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0;
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()
      };
    },
    mounted() {
      this.$emit('update:selected', this.selected);
    },
    provide() {
      return {
        eventBus: new Vue()
      };
    }
  };
</script>

<style lang="scss" scoped>

</style>