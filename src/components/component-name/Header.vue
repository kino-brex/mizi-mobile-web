<template>
  <div class="header">
		<h1 class="logo">
			<span class="a11y">MIZI HOME</span>
		</h1>

    <div class="util">
      <v-btn class="btn-ic btn_alram new">
        <i class="new"></i>
        <span class="a11y">Alram</span>
      </v-btn>	
    </div>
	</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Header extends Vue{
} 
</script>
