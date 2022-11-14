import { defineStore } from 'pinia';

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
    // const module = getStoreConfig(getStoreInitData(Vue, options));
    // 在提供的store里注册一个visualEditor的namespaces与对应的内部结构
    // const useVisualEditorStore = defineStore('visualEditor', module);    
    // useVisualEditorStore();
    initializeStoreData(getStoreInitData(Vue, options));
    setLocalStorage(TIME_TRAVEL_SNAPSHOTS, '[]');
    // 注册一些其他基础ui库的指令
    // Vue.use(Loading.directive);
    Vue.component('VisualEditor', VisualEditor);
    // 注册一些Visual Editor自定指令
    // Vue.use(directives);
    if (install.installed && VueInstance === Vue) return;
    install.installed = true;

    VueInstance = Vue;
}

export default { install };
