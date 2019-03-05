import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

export function bootstrap(props) {
    console.log('app4vue-C: bootstrap', props.globalEventDistributor);
    return Promise.resolve();
}

export function mount(props) {
    console.log('app4vue-C: mount', props.globalEventDistributor);

    const vueLifecycles = singleSpaVue({
        Vue,
        appOptions: {
            el: '#' + props.globalEventDistributor,
            router,
            store,
            render: h => {
                console.log("app4vue-C: vue: render:" + props.globalEventDistributor);
                return h(App);
            }
        }
    });

    return vueLifecycles.mount(props);
}

export function unmount(props) {
    console.log('app4vue-C: unmount', props.globalEventDistributor);
    return Promise.resolve();
}
