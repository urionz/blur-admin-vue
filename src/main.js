import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss'
import 'normalize.css/normalize.css'
import 'font-awesome/scss/font-awesome.scss'
import 'ionicons/scss/ionicons.scss'
import 'bootstrap/scss/bootstrap.scss'
import 'leaflet/dist/leaflet.css'
import 'chartist/dist/chartist.css'
import 'fullcalendar/dist/fullcalendar.css'
import 'handsontable/dist/handsontable.full.css'
import 'ng2-slim-loading-bar/style.css'
import 'styles/theme/theme.scss'

new Vue({
    el: '#app',
    router,
    store,
    template: '<App />',
    components: { App }
})
