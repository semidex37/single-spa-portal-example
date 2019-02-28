import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';
import App from './App.vue'

Vue.config.productionTip = false;

const time = new Date().getTime()
const id = 'appGame'

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#' + id,
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
    console.log("createDomElement: appGame ");

    if (!el) {
        console.log("CreateElement: " + id);
        el = document.createElement('div');
        el.id = id;
        document.body.appendChild(el);
    }
    return el;
}
