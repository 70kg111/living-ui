<template>
    <div class="tabs-pane" @click="xxx" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script lang="js">
  export default {
    name: 'GuluTabsPane',
    data() {
      return {
        active: false
      };
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: [String, Number],
        required: true
      }
    },
    inject: ['eventBus'],
    computed: {
      classes() {
        return {
          active: this.active
        };
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      });
    },
    methods: {
      xxx() {
        this.eventBus.$emit('update:selected', this.name);
      }
    }
  };
</script>

<style lang="scss" scoped>
    .tabs-pane {
        padding: 1em;
        &.active {

        }
    }
</style>