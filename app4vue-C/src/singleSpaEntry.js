import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';
import App from './App.vue'
import {createRouter} from './router'
import {createStore} from './store'

Vue.config.productionTip = false;

export function bootstrap(props) {
    console.log('app4vue-C: bootstrap', props.appName);
    return Promise.resolve();
}

export function mount(props) {
    console.log('app4vue-C: mount', props.appName);

    const store = createStore(props.options, props.globalEventDistributor);
    const router = createRouter(props.options.routeBaseUrl);
    const vueLifecycles = singleSpaVue({
        Vue,
        appOptions: {
            el: '#' + props.appName,
            router,
            store,
            render: h => {
                console.log("app4vue-C: vue: render:" + props.appName);
                return h(App);
            }
        }
    });

    return vueLifecycles.mount(props);
}

export function unmount(props) {
    console.log('app4vue-C: unmount', props.appName);
    return Promise.resolve();
}
