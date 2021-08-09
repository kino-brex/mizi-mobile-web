<template>
	<div class="html-guides">
<dl>
  <dt>Style</dt>
  <dd>
    styles/<br>
    App.scss <br>
    _mixins.scss<br>
    _icons.scss<br>
    layout.scss <br>
    reset.scss <br>
    button.scss <br>
    popup.scss <br>
    ui.scss (카테고리 별로??) <br>
    main.scss <br>
  </dd>
</dl>    

<dl>
  <dt>Layout</dt>
  <dd>
    
<code v-pre>
  &lt;div class="page"&gt; &lt;/div&gt;
</code>

  </dd>
</dl>    

<dl>
  <dt>Button</dt>
  <dd>

<v-btn class="btn-primary">btn-primary</v-btn><br>
<code v-pre>
  &lt;v-btn class="btn-primary"&gt; &lt;/v-btn&gt;
</code>
<br><br>
<v-btn class="btn-primary btn-full">btn-primary btn-full</v-btn><br>
<code v-pre>
  &lt;v-btn class="btn-primary btn-full"&gt; &lt;/v-btn&gt;
</code>

  </dd>
</dl>   

<dl>
  <dt>Icons</dt>
  <dd>
    <p>Icon size 28</p>
    <code v-pre>
      &lt; class="ic-28 ic_"&gt; &lt;/&gt;
    </code>
    <br><br>
    <p>Icon size 32</p>
    <code v-pre>
      &lt; class="ic-32 ic_"&gt; &lt;/&gt;
    </code>
    <br><br>
    <p>Icon size 36</p>
    <code v-pre>
      &lt; class="ic-36 ic_"&gt; &lt;/&gt;
    </code>
<div>
<br><br>
    <span class="ic-36 ic_live">
      <span class="a11y"></span>
    </span>
    <span class="ic-36 ic_live-pink">
      <span class="a11y"></span>
    </span>
    <span class="ic-36 ic_vod">
      <span class="a11y"></span>
    </span>
    <span class="ic-36 ic_locked">
      <span class="a11y"></span>
    </span>
    <span class="ic-36 ic_locked-bk">
      <span class="a11y"></span>
    </span>
    <span class="ic-36 ic_quest">
      <span class="a11y"></span>
    </span>
    <span class="ic-36 ic_noti">
      <span class="a11y"></span>
    </span>
    <span class="ic-36 ic_user-count">
      <span class="a11y"></span>
    </span>
    <span class="ic-36 ic_user-vod">
      <span class="a11y"></span>
    </span>
    <span class="ic-36 ic_user-live">
      <span class="a11y"></span>
    </span>
    <span class="ic-36 ic_reply">
      <span class="a11y"></span>
    </span>
    <span class="ic-36 ic_attach">
      <span class="a11y"></span>
    </span>
</div>    

  </dd>
</dl>  

 
<dl>
  <dt>Form</dt>
  <dd>
  </dd>
</dl>

  </div>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
	name: 'HtmlGuide'
})
export default class HtmlGuide extends Vue {
}
</script>

<style lang="scss" scoped>
.html-guides {
  padding:20px;
}
dl {
  margin-bottom:10%;
  padding-bottom:20px;
  border-bottom:1px solid #eee;
  text-align: left;
  dt, dd {
    color:#fff;
    line-height:1.5;
  }
  dt {
    font-weight: bold;
    padding-bottom:15px;
  }
  dd {
    background-color:#ddd;
    color:#000;
    padding:15px;
  }
  code {
    width:100%;
  }
}
</style>
