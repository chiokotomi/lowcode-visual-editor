
const widgets = import.meta.globEager('./*/*/index.vue');
const metas = import.meta.globEager('./*/*/meta.json');

const metaMap = {};
Object.entries(metas).forEach(([path, meta]) => {

    const { name, type, label, propsEditor, props } = meta;
    metaMap[meta.name] = {
        name, type, label, propsEditor, props,
    };
});

const components = {};
Object.entries(widgets).forEach(([key, module]) => {

    const widgetName = key.replace(/\.\/(.*)\/(.*)\/index\.(tsx|vue)/, '$2');
    components[widgetName] = {
        ...metaMap[widgetName],
        component: module.default,
    };
});


export default components;