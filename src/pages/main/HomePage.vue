<template>
  <div class="page">
    <div class="main-wrap">
      <div class="card-case">
        <!-- card -->
        <a href="#">
        <div class="card" style="background-color:#5934D5">
          <div class="card_head">
            <p class="head-live">
              <i class="ic-32 ic_live"><span class="a11y">Live</span></i>
              라이브<span>취업・커리어</span>
            </p>
          </div>
          <div class="card_cont">
            <p class="title">여름에 딱! 데일리 메이크업</p>
            <div class="figure">
              <svg class="fig-type01" viewBox="0 0 720 720">
                <defs>
                  <mask id="maskType01" x="0" y="0" width="100%" height="100%" >
                    <rect x="0" y="0" width="100%" height="100%"/>
                    <image xlink:href="../../assets/images/main/Main_Cover_1.svg" x="0" y="0" width="100%" height="100%" ></image>
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
              <figure></figure>
              이사배
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
