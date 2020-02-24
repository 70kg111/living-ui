<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script lang="js">
  export default {
    name: 'GuluToast',

  };
</script>

<style lang="scss" scoped>
    $toast-height: 40px;
    $font-size: 14px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    $toast-box-shadow:0px 0px 3px 0px rgba(0,0,0,0.5);
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: $font-size;
        line-height: 1.8;
        height: $toast-height;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: $toast-box-shadow;
        color: white;
        padding: 0 16px;
    }
</style>