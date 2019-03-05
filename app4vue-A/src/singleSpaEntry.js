import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';
import App from './App.vue'

Vue.config.productionTip = false;

// const time = new Date().getTime()
// const id = 'appGame'
//
// const vueLifecycles = singleSpaVue({
//     Vue,
//     appOptions: {
//         el: '#' + id,
//         render: h => h(App)
// }
// });

export function bootstrap(props) {
    console.log('app4vue-A: bootstrap', props.globalEventDistributor);
    return Promise.resolve();
}

export function mount(props) {
    console.log('app4vue-A: mount', props.globalEventDistributor);
    const vueLifecycles = singleSpaVue({
        Vue,
        appOptions: {
            el: '#' + props.globalEventDistributor,
            render: h => {
                console.log("app4vue-A: vue: render:" + props.globalEventDistributor);
                return h(App);
            }
        }
    });

    // createDomElement();
    return vueLifecycles.mount(props);
}

export function unmount(props) {
    console.log('app4vue-A: unmount', props.globalEventDistributor);
    return Promise.resolve();
}

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
