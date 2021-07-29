<template>
  <div class="page">
    <h1>My Page</h1>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
@Component({
  name: 'MyPage'
})
export default class MyPage extends Vue {

}
</script>
<style lang="scss" scoped>
h1 {
  color: lightgray;
}
</style>
