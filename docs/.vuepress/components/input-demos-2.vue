<template>
    <div>
        <g-input @change="inputChange" v-model="message"></g-input>
        <div>
            value:{{message}}
        </div>
    </div>
</template>

<script lang="js">
  import Input from '../../../src/input';

  export default {
    name: 'input-demos-2',
    components: {
      'g-input': Input,
    },
    data() {
      return {
        message: '1'
      };
    }

  };
</script>

<style lang="scss" scoped>

</style>