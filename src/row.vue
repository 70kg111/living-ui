<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script lang="js">
  export default {
    name: 'GuluRow'
  };
</script>

<style lang="scss" scoped>
    .row {
        display: flex;
    }
</style>