import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

const time = new Date().getTime()
const id = 'appBeta'

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#' + id,
        router,
        store,
        render: h => h(App)
}
});

export const bootstrap = [
    vueLifecycles.bootstrap,
];

export function mount(props) {
    createDomElement();
    return vueLifecycles.mount(props);
}

export const unmount = [
    vueLifecycles.unmount,
];

function createDomElement() {
    // Make sure there is a div for us to render into
    let el = document.getElementById(id);

    if (!el) {
        el = document.createElement('div');
        el.id = id;
        document.body.appendChild(el);
    }
    return el;
}
