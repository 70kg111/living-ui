<template>
    <svg class="icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script lang="js">
  export default {
    name:'GuluIcon',
    props: ['name']
  };
</script>

<style lang="scss" scoped>
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>