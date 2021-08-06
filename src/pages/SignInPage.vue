<template>
  <div class="page">
    <div class="sign-wrap">
      <h1 class="logo"></h1>
      <p>간편하게 로그인하고<br>다양한 서비스를 이용하세요!</p>
      <div class="btn_area">
        <v-btn @click="onClickInterestSet" class="btn-full btn_login-join">관심사설정</v-btn>
        <v-btn @click="onClickSignIn" class="btn-full btn_login-join">Sign In</v-btn>

        <v-btn class="btn-full btn_login-kakao">카카오 로그인</v-btn>
        <v-btn class="btn-full btn_login-kakao">카카오로 간편가입하기</v-btn>
        <!-- <v-btn class="btn-full btn_login-naver">네이버로 가입하기</v-btn> -->
        <v-btn class="btn-full btn_login-join">간편 가입하기</v-btn>
      </div>
    </div>
	</div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {AppStatusModule} from "@/store/modules/AppStatusModule";
import InterestSet from "@/pages/InterestSet.vue";
import MainLayout from "@/pages/MainLayout.vue";

@Component({
  name: 'SignInPage'
})
export default class SignInPage extends Vue {
  onClickSignIn() {
    AppStatusModule.SetIsSignIn(true);
    this.$router.push({
      name: MainLayout.name
    }).catch(err => err);
  }
  onClickInterestSet() {
    // AppStatusModule.SetIsSignIn(true);
    this.$router.push({
      name: InterestSet.name
    }).catch(err => err);
  }
}
</script>
