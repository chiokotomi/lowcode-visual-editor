/**
 * 数据初始化工具
 */

export const getStoreInitData = (Vue, params = {}) => {
    const {widgetConfigMap = {}, pageConfig = {}, ...data} = params;

    const newWidgetConfigMap = {};
    Object.entries(widgetConfigMap).forEach(([widgetName, widgetConfig]) => {
        const { name, type, label, propsEditor, props, component } = widgetConfig;
        Vue.component(widgetName, component);
        newWidgetConfigMap[widgetName] = { name, type, label, propsEditor, props };
    });
    return {
        ...data,
        widgetConfig: newWidgetConfigMap,
        pageConfig: {
            ...pageConfig,
        },
    };
};
 