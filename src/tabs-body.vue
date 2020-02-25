<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>

<script lang="js">
  export default {
    name: 'GuluTabsBody',
    inject: ['eventBus'],
    created() {
    }
  };
</script>

<style lang="scss" scoped>

</style>