<template>
  <div class="modal-popup">
    <v-btn @click="$emit('close')" class="btn-close">Close
      <span class="a11y">Close</span>
    </v-btn>	

    Alram
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component({
    components: {},
})
export default class Alram extends Vue {
    @Prop() private src!: string;
    @Prop() private close!: string;
}

</script>
<style scoped>
.modal-popup {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  display: table;
  text-align: center;
  transition: opacity 0.3s ease;
  color:#fff;
}
.btn-close {
  color:#fff;
}
</style>
