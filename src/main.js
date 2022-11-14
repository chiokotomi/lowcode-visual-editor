import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VisualEditor } from 'app';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import { Lazyload } from 'vant';
// import '@vant/touch-emulator';
import 'vant/lib/index.css';


const store = createPinia();
const app = createApp({
    template:  `<VisualEditor :className="'custom-classname'"/>`
});

const params = {
    // theme,
    title: '页面标题',
    widgetConfig: [],
    defaultPropEditor: []
};


app.use(store);
app.use(ElementPlus);
app.use(Lazyload);
app.use(VisualEditor, {store, ...params});
app.mount('#app');
