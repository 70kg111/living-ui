<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <slot></slot>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
</template>

<script lang="js">
  export default {
    name: 'GuluToast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 30
      },
      closeButton: {
        type: Object,
        default() {
          return {
            text: '关闭', callback: undefined
          };
        }
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'middle', 'bottom'].indexOf(value) >= 0;
        }
      }
    },
    computed: {
      toastClasses() {
        return {
          [`position-${this.position}`]: true
        };
      }
    },
    mounted() {
      this.updateStyles();
      this.execAutoClose();
    },
    methods: {
      execAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close();
          }, this.autoCloseDelay * 1000);
        }
      },
      updateStyles() {
        this.$nextTick(() => {
          this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`;
        });
      },
      close() {
        this.$el.remove();
        this.$destroy();
      },
      onClickClose() {
        this.close();
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback();
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
    $toast-min-height: 40px;
    $font-size: 14px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    $toast-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: $font-size;
        line-height: 1.8;
        min-height: $toast-min-height;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: $toast-box-shadow;
        color: white;
        padding: 0 16px;

        > .close {
            padding-left: 16px;
            flex-shrink: 0;
        }

        > .line {
            margin-left: 16px;
            border: 1px solid #999999;
            height: 100%;
        }

        &.position-top {
            top: 5%;
            transform: translateX(-50%);
        }

        &.position-middle {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &.position-bottom {
            top: 95%;
            transform: translateX(-50%);
        }
    }
</style>