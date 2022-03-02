import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#b09ed1',
                secondary: '#1d1924',
                accent: "#f0eaec"
            }
        }
    }
})
