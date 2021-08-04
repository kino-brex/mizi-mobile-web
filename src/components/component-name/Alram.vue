<template>
	<div class="modal-popup alram_page">
		<div class="modal-head">
				<v-btn @click="closeModal()" class="modal_btn-close">
				<div>
					<span class="line01"></span>
					<span class="line02"></span>
					<span class="a11y">Close</span>
				</div>
			</v-btn>	
		</div>
		<div class="modal-inner">
			<h3>알림</h3>   

			<div class="list_wrap">
				<v-card class="list_box">
					<v-list-item class="_item">
						<span class="ic-36 alram-type01">
							<i><span class="a11y">new</span></i>
						</span>
						<a>
							<p>이소현 한국에서 메이크업 아티스트로 활동하실 계획이시라면 대학교 활동하실 계획이시라면 대학교</p>
							<span>등록한 답변이 <span class="colr_yellow">채택</span> 되었어요.</span>
						</a>
						<span class="time">방금 전</span>
					</v-list-item>

					<v-list-item class="_item">
						<span class="ic-36 alram-type02">
							<i><span class="a11y">new</span></i>
						</span>
						<a>
							<p>타입별 기초 제품 고르는 법 라이브 방송이 곧 시작 됩니다.</p>
							<span><span class="colr_green">라이브</span> 방송 10분 전</span>
						</a>
						<span class="time">10분 전</span>
					</v-list-item>
				</v-card>

				<div class="pass_break">
					이전 알림
				</div>
				<v-card class="list_box">
					<v-list-item class="_item">
						<span class="ic-36 alram-type01">
							<!-- <i><span class="a11y">new</span></i> -->
						</span>
						<a>
							<p>알림 안내 문구를 노출합니다. 알림 안내 문구를 노출합니다.</p>
							<span><i class="ic-24 ic_attach"></i> 링크 관련 안내문구</span>
						</a>
						<span class="time">방금 전</span>
					</v-list-item>

					<v-list-item class="_item">
						<span class="ic-36 alram-type02">
							<!-- <i><span class="a11y">new</span></i> -->
						</span>
						<a>
							<p>타입별 기초 제품 고르는 법 라이브 방송이 곧 시작 됩니다.</p>
							<span><span class="colr_green">라이브</span> 방송 10분 전</span>
						</a>
						<span class="time">10분 전</span>
					</v-list-item>
				</v-card>
				
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import $ from 'jquery'

@Component({  
		components: {},
})
export default class Alram extends Vue {
	closeModal() {
		this.$emit('close');
		$('html, body').removeClass('noscroll')
	}
}
</script>
