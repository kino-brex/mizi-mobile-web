<template>
	<div class="page">
		<div class="interest-wrap">
			<h2>취향에 맞는 관심사를 선택해주세요!<p>관심사를 최대 2개 선택해주세요</p></h2>

			<v-container fluid class="choice-list">
				<v-checkbox
					v-model="checkbox1"
					:label="`취업・커리어 ${checkbox1.toString()}`"
					class="_item01"
				></v-checkbox>
				<v-checkbox
					v-model="checkbox2"
					:label="`트렌드 ${checkbox2.toString()}`"
					class="_item02"
				></v-checkbox>
				<v-checkbox
					v-model="checkbox3"
					:label="`라이프 ${checkbox3.toString()}`"
					class="_item03"
				></v-checkbox>
				<v-checkbox
					v-model="checkbox4"
					:label="`머니 ${checkbox4.toString()}`"
					class="_item04"
				></v-checkbox>
				<v-checkbox
					v-model="checkbox5"
					:label="`취미・라이프 ${checkbox5.toString()}`"
					class="_item05"
				></v-checkbox>
			</v-container>
		</div>
	</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {AppStatusModule} from "@/store/modules/AppStatusModule";
@Component({
	name: 'InterestSet'
})
export default class InterestSet extends Vue {
	data () {
		return {
			checkbox1: false,
			checkbox2: false,
			checkbox3: false,
			checkbox4: false,
			checkbox5: false,
		}
	}
}
</script>
