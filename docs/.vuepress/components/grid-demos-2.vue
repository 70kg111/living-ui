<template>
    <div>
        <g-row class="demoRow" gutter="10">
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
        </g-row>

        <g-row class="demoRow" gutter="10">
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
        </g-row>
    </div>
</template>

<script lang="js">
  import Row from '../../../src/row';
  import Col from '../../../src/col';

  export default {
    name: 'layout-demos-2',
    components: {
      'g-row': Row,
      'g-col': Col
    }
  };
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
</style>