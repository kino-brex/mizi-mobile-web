<template>
	<div class="header">
		<h1 class="logo">
			<span class="a11y">MIZI HOME</span>
		</h1>

		<div class="util">
			<v-btn @click="onClickAlram()" class="btn-ic btn_alram new">
				<i class="new"></i>
				<span class="a11y">Alram</span>
			</v-btn>	
		</div>
		<template v-if="alramModal">
			<alram-modal @close="alramModal = false">
			</alram-modal>
		</template>
	</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import AlramModal from '@/components/component-name/Alram.vue'
import $ from 'jquery'

@Component({
		components: {
			AlramModal
		}
})
export default class Header extends Vue{
	private alramModal = false;

	onClickAlram(){
		this.alramModal=true;
		$('html, body').addClass('noscroll')
	}  
} 
</script>
