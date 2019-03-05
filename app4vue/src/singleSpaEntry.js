import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';
import App from './App.vue'

Vue.config.productionTip = false;

export function bootstrap(props) {
    console.log('app4vue: bootstrap', props.globalEventDistributor);
    return Promise.resolve();
}

export function mount(props) {
    console.log('app4vue: mount', props.globalEventDistributor);
    const vueLifecycles = singleSpaVue({
        Vue,
        appOptions: {
            el: '#' + props.globalEventDistributor,
            render: h => {
                console.log("app4vue: vue: render:" + props.globalEventDistributor);
                return h(App);
            }
        }
    });

    return vueLifecycles.mount(props);
}

export function unmount(props) {
    console.log('app4vue: unmount', props.globalEventDistributor);
    return Promise.resolve();
}
