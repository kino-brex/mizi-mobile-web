import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#5048FF',
                secondary: '#202020',
                accent:'#1976d2'
            }
        },
        options: {
            customProperties: true
        }
    },
    icons: {
        iconfont: 'mdi'
    }
});
