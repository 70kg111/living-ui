<template>
    <div>
        <g-tabs :selected.sync="selectedTab">

            <g-tabs-head>
                <g-tabs-item name="1">1</g-tabs-item>
                <g-tabs-item name="2">2</g-tabs-item>
            </g-tabs-head>

            <g-tabs-body>
                <g-tabs-pane name="1">content1</g-tabs-pane>
                <g-tabs-pane name="2">content2</g-tabs-pane>
            </g-tabs-body>

        </g-tabs>
    </div>
</template>

<script lang="js">
  import Tabs from '../../../src/tabs';
  import TabsHead from '../../../src/tabs-head';
  import TabsItem from '../../../src/tabs-item';
  import TabsBody from '../../../src/tabs-body';
  import TabsPane from '../../../src/tabs-pane';

  export default {
    name: 'tabs-demos',
    components: {
      'g-tabs': Tabs,
      'g-tabs-head': TabsHead,
      'g-tabs-item': TabsItem,
      'g-tabs-body': TabsBody,
      'g-tabs-pane': TabsPane,
    },
    data() {
      return {
        selectedTab: '1'
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>