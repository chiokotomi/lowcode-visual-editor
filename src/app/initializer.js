/**
 * 数据初始化工具
 */
import {reduce} from 'lodash';
//  import validateParams from './validateParams';
 
export const getStoreInitData = (Vue, params = {}) => {
    const {widgetConfig = {}, defaultPropEditor, ...data} = params;
    if (defaultPropEditor) {
        Vue.component(`VisualEditor${defaultPropEditor.name}`, defaultPropEditor);
    }

    //  validateParams(params);
    const editors = reduce(widgetConfig, (result, conf, widgetType) => {
        if (conf.editor && !conf.editor.name) {
            throw new Error(`[VisualEditor Error]:A name is required in widgetEditorMap[${widgetType}]`);
        }
        const curEditor = conf.editor ? conf.editor : defaultPropEditor;

        const curEditorName = curEditor.name;
        Vue.component(`VisualEditor${curEditorName}`, curEditor);
        return {
            ...result,
            [widgetType]: `VisualEditor${curEditorName}`
        };
    }, {});

    const newWidgetConfig = reduce(widgetConfig, (result, conf, widgetType) => {
        return {
            ...result,
            [widgetType]: {...conf, editor: undefined}
        };
    }, {});

    return {
        ...data,
        widgetEditorMap: editors,
        widgetConfig: newWidgetConfig,
        pageConfig: {
            widgetIds: [],
            widgetPropsMap: {},
            height: 700,
            bgColor: '#fff',
        },
    };
};
 