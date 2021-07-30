<template>
	<div class="page">
		<div class="main-wrap">
			<div class="card-case">
				<!-- card -->
				<a href="#">
				<div class="card card-template01">
					<div class="card_head">
						<p class="head-live">
							<i class="ic-32 ic_live"><span class="a11y">Live</span></i>
							라이브<span>취업・커리어</span>
						</p>
					</div>
					<div class="card_cont">
						<p class="heading">여름에 딱! 데일리 메이크업</p>
						<div class="figure">
							<svg class="fig-type01" viewBox="0 0 720 720">
								<defs>
									<mask id="maskType01" x="0" y="0" width="100%" height="100%" >
										<rect x="0" y="0" width="100%" height="100%"/>
										<image xlink:href="../../assets/images/main/Main_Cover1.svg" x="0" y="0" width="100%" height="100%" ></image>
									</mask>
								</defs><rect width="100%" height="100%"/>
							</svg><rect width="100%" height="100%"/>
							<img src="../../assets/images/dummy/@my01.gif">
							<!-- <video class="vod" src="http://www.brex.kr/vod/03_pc.mp4" muted=true autoplay loop></video> -->
						</div>

						<div class="stamp_time">
							<p><span>OPEN</span>18:00</p>
						</div>

						<div class="wrt_info">
							<figure><img src="../../assets/images/dummy/@profile01.jpeg"></figure>
							<p class="wrt">이사배이사배이사배</p>
							<div class="parti _live">
								<span class="now">32</span><span> / 50</span>
							</div>
						</div>
					</div>
				</div>
				</a>
				<!--// card -->

				<!-- card -->
				<a href="#">
				<div class="card card-template02">
					<div class="card_head">
						<p class="head-vod">
							<i class="ic-32 ic_vod"><span class="a11y">Live</span></i>
							비디오<span>라이프</span>
						</p>
						<v-btn class="btn-locked ic-32 ic_locked"><span class="a11y">Locked content</span></v-btn>
					</div>
					<div class="card_cont">
						<p class="heading">타입별 기초 제품 고르는 법</p>
						<div class="figure">
							<svg class="fig-type02" viewBox="0 0 720 720">
								<defs>
									<mask id="maskType02" x="0" y="0" width="100%" height="100%" >
										<rect x="0" y="0" width="100%" height="100%"/>
										<image xlink:href="../../assets/images/main/Main_Cover2.svg" x="0" y="0" width="100%" height="100%" ></image>
									</mask>
								</defs><rect width="100%" height="100%"/>
							</svg><rect width="100%" height="100%"/>
							<img src="../../assets/images/dummy/@my02.gif">
						</div>

						<div class="wrt_info">
							<figure><img src="../../assets/images/dummy/@profile02.jpeg"></figure>
							<p class="wrt">Nico Tortorella</p>
							<div class="parti _vod">
								<span class="now">999</span>
							</div>
						</div>
					</div>
				</div>
				</a>
				<!--// card -->

				<!-- card -->
				<a href="#">
				<div class="card card-template03">
					<div class="card_head">
						<p class="head-question">
							<i class="ic-32 ic_quest"><span class="a11y">모두의질문</span></i>
							모두의 질문<span>머니</span>
						</p>
						<!-- <v-btn class="btn-locked ic-32 ic_locked"><span class="a11y">Locked content</span></v-btn> -->
					</div>
					<div class="card_cont">
						<ul class="quest_list">
							<li class="_item"><a href="#">
								20대 <span class="colr_yellow">#재테크</span> 어떻게 해요?
							</a></li>
							<li class="_item"><a href="#">
								재테크에는 다양한 방법이 있겠지만 사회초년생이라, 차근차근히 차근차근히 차근차근히
							</a></li>
							<li class="_item"><a href="#">
								주식으로 재테크 가능합니다. 
							</a></li>
							<li class="_item"><a href="#">
								돈을 가지고 우리가 할 수 있는 두가지가 있습니다. 첫번째는...
							</a></li>
						</ul>
					</div>
				</div>
				</a>
				<!--// card -->

				<!-- card -->
				<a href="#">
				<div class="card card-template04">
					<div class="card_head">
						<p class="head-vod">
							<i class="ic-32 ic_vod"><span class="a11y">Live</span></i>
							비디오<span>라이프</span>
						</p>
						<v-btn class="btn-locked ic-32 ic_locked"><span class="a11y">Locked content</span></v-btn>
					</div>
					<div class="card_cont">
						<p class="heading">타입별 기초 제품 고르는 법</p>
						<div class="figure">
							<svg class="fig-type04" viewBox="0 0 720 720">
								<defs>
									<mask id="maskType04" x="0" y="0" width="100%" height="100%" >
										<rect x="0" y="0" width="100%" height="100%"/>
										<image xlink:href="../../assets/images/main/Main_Cover3.svg" x="0" y="0" width="100%" height="100%" ></image>
									</mask>
								</defs><rect width="100%" height="100%"/>
							</svg><rect width="100%" height="100%"/>
							<img src="../../assets/images/dummy/@my03.gif">
						</div>

						<div class="wrt_info">
							<figure><img src="../../assets/images/dummy/@profile02.jpeg"></figure>
							<p class="wrt">Nico Tortorella</p>
							<div class="parti _vod">
								<span class="now">999</span>
							</div>
						</div>
					</div>
				</div>
				</a>
				<!--// card -->

			</div>
		</div>
	</div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
	components: {
		HomePage
	}
})
export default class HomePage extends Vue {
	
}
</script>
<style lang="scss" scoped>
</style>
