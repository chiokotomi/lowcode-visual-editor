import { TIME_TRAVEL_SNAPSHOTS } from 'app/common/config';
import { setLocalStorage } from 'app/common/utils/localStorage';
import { initializeStoreData } from 'app/stores';
import { getStoreInitData } from './initializer';
import VisualEditor from './VisualEditor.vue';

export let VueInstance;

export function install(Vue, {store, ...options} = {}) {
    if (!store) {
        throw new Error('Please provide a store!!');
    }
    initializeStoreData(getStoreInitData(Vue, options));
    setLocalStorage(TIME_TRAVEL_SNAPSHOTS, '[]');
    // 注册一些其他基础ui库的指令
    // Vue.use(Loading.directive);
    Vue.component('VisualEditor', VisualEditor);
    if (install.installed && VueInstance === Vue) return;
    install.installed = true;

    VueInstance = Vue;
}

export default { install };
