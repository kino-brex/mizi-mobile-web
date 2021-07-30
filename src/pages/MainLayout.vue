<template>
  <div class="page">
    <Header />
    <div class="row">
      <div class="main_navtab">
        <div class="tabs" v-for="(tab, index) in navTabs" :key="index"
           @click="onClickNavTab(tab.name)"
           :class="{active: currentNavTab === tab.name}">
          <p>{{tab.text}}</p>
        </div>
      </div>

      <router-view name="main"></router-view>
    </div>
    <div class="bottom-tab-bar">
      <div class="bottom-tab" v-for="(tab, index) in bottomTabs" :key="index"
           @click="onClickTab(tab.name)"
           :class="{active: currentTab === tab.name}">
        <em class="mdi" :class="tab.icon"></em>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Header from '@/components/component-name/Header.vue';

@Component({
  components: {
    MainLayout,
    Header
  }
})
export default class MainLayout extends Vue {
  bottomTabs: Array<any> = [
    {
      name: 'HomePage',
      icon: 'mdi-home'
    },
    {
      name: 'LiveUploadPage',
      icon: 'mdi-plus-circle-outline'
    },
    {
      name: 'MyPage',
      icon: 'mdi-account'
    }
  ]
  get currentTab() {
    return this.$route.name;
  }
  onClickTab(name: string) {
    this.$router.push({
      name
    }).catch(err => err);
  }


  navTabs: Array<any> = [
    {
      name: 'HomePage',
      text: '추천'
    },
    {
      name: 'LiveUploadPage',
      text: '라이브'
    },
    {
      name: 'MyPage',
      text: '모두의 질문'
    }
  ]
  get currentNavTab() {
    return this.$route.name;
  }
  onClickNavTab(name: string) {
    this.$router.push({
      name
    }).catch(err => err);
  }
}
</script>
<style lang="scss">
@import '@/styles/main.scss';
</style>
