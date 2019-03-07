import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';
import App from './App.vue'

Vue.config.productionTip = false;

export function bootstrap(props) {
    console.log('app4vue: bootstrap', props.appName);
    return Promise.resolve();
}

export function mount(props) {
    console.log('app4vue: mount', props.appName);
    const vueLifecycles = singleSpaVue({
        Vue,
        appOptions: {
            el: '#' + props.appName,
            render: h => {
                console.log("app4vue: vue: render:" + props.appName);
                return h(App);
            }
        }
    });

    return vueLifecycles.mount(props);
}

export function unmount(props) {
    console.log('app4vue: unmount', props.appName);
    return Promise.resolve();
}
