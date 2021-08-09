<template>
	<div>
		<v-dialog
			v-model="dialogProfile"
		>
			<template v-slot:activator="{ on, attrs }">
				<v-btn
					v-bind="attrs"
					v-on="on"
					style="color:#fff;"
				>
					프로필 선택
				</v-btn>
			</template>

			<v-card class="layer-popup">
				<v-card-title class="layer-head">
					<p>사용하실 프로필을<br>선택해주세요</p>
					<v-btn
						@click="dialogProfile = false"
						class="layer_btn-close">
						<div>
							<span class="line01"></span>
							<span class="line02"></span>
							<span class="a11y">Close</span>
						</div>
					</v-btn>
				</v-card-title>

				<div class="layer-cont">
					<ul class="profile_pop-list">
						<li>
							<a href="#">
								<p class="figure"><img src="../assets/images/dummy/@profile01.jpeg" ></p>
								<p>이사배</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p class="figure"><img src="../assets/images/dummy/@profile01.jpeg" ></p>
								<p>이사배</p>
							</a>
						</li>
					</ul>
				</div>

				<div class="layer-bottom">
					<v-card-actions>
						<v-btn
							class="btn-primary btn-full"
							@click="dialogProfile = false"
						>
							선택 완료
						</v-btn>
					</v-card-actions>
				</div>
			</v-card>
		</v-dialog>
<br><br>

		<v-dialog
			v-model="dialogPassword"
		>
			<template v-slot:activator="{ on, attrs }">
				<v-btn
					v-bind="attrs"
					v-on="on"
					style="color:#fff;"
				>
					비밀번호 입력 팝업
				</v-btn>
			</template>

			<v-card class="layer-popup">
				<v-card-title class="layer-head">
					<p>비밀번호 입력</p>
					<v-btn
						@click="dialogPassword = false"
						class="layer_btn-close">
						<div>
							<span class="line01"></span>
							<span class="line02"></span>
							<span class="a11y">Close</span>
						</div>
					</v-btn>
				</v-card-title>

				<div class="layer-cont">
					<input type="password" class="" placeholder="" :maxlength="max" v-model="password" />
				</div>

				<div class="layer-bottom">
					<v-card-actions>
						<v-btn
							class="btn-primary btn-full"
							@click="dialogPassword = false"
						>
							확인
						</v-btn>
					</v-card-actions>
				</div>
			</v-card>
		</v-dialog>
	</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
	name: 'PopupGuide'
})
export default class PopupGuide extends Vue {
	data () {
    return {
      dialogProfile: false,
      dialogPassword: false,
			max: 4,
			password: ''
    }
  }
}
</script>
