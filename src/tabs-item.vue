<template>
    <div class="tabs-item" @click="onClick" :class="classes">
        <slot></slot>
    </div>
</template>

<script lang="js">
  export default {
    name: 'GuluTabsItem',
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
          active: this.active,
          disabled: this.disabled
        };
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      });
    },
    methods: {
      onClick() {
        if (this.disabled) { return; }
        this.eventBus.$emit('update:selected', this.name, this);
      }
    }
  };
</script>

<style lang="scss" scoped>
    $blue: blue;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &.active {
            color: $blue;
            font-weight: bold;
        }

        &.disabled {
            color: gray;
            cursor: not-allowed;
        }
    }
</style>