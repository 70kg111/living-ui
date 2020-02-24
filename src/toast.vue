<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <slot></slot>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
        </div>
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
        default: 3
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
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`;
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
    @keyframes slide-up {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    @keyframes slide-down {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);

        &.position-top {
            top: 5%;

            .toast {
                animation: slide-down 1s;
            }
        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);

            .toast {
                animation: fade-in 1s;
            }
        }

        &.position-bottom {
            top: 95%;

            .toast {
                animation: slide-up 1s;
            }
        }
    }

    .toast {
        top: 0;
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


    }
</style>