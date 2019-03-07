import eventHub from './eventHub'

export class GlobalEventDistributor {

    constructor() {
        this.stores = [];
        this.eventHub = eventHub;
    }

    registerStore(store) {
        this.stores.push(store);
    }

    $on(event, payload) {
        this.eventHub.$on(event, payload);
    }

    $emit(event, payload) {
        this.eventHub.$emit(event, payload);
    }

    dispatch(event) {
        this.stores.forEach((s) => s.dispatch(event));
    }
}
