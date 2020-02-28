<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script lang="js">

  export default {
    name: 'GuluCol',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      phone: {
        type: Object,
        validator(value) {
          let keys = Object.keys(value);
          let valid = true;
          keys.forEach(key => {
            if (!['span', 'offset'].indexOf(key) >= 0) {
              valid = false;
            }
          });
          return valid;
        }
      }
    },

    data() {
      return {
        gutter: 0,
      };
    },

    computed: {
      colClass() {
        let {phone} = this;
        let phoneClass = [];
        if (phone) {
          phoneClass = [`col-phone-${phone.span}`];
        }
        return [
          `col-${this.span}`,
          this.offset && `offset-${this.offset}`,
          ...phoneClass
        ];
      },
      colStyle() {
        let {gutter} = this;
        return {
          marginLeft: gutter / 2 + 'px',
          marginRight: gutter / 2 + 'px',
        };
      }
    }

  };
</script>

<style lang="scss" scoped>
    .col {
        width: 50%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        background-color: rgb(238, 238, 238);
        border: 1px solid rgb(204, 204, 204);
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24)*100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24)*100%;
            }
        }

        @media (max-width: 576px) {
            $class-prefix: col-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24)*100%;
                }
            }
            $class-prefix: offset-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }
    }


</style>