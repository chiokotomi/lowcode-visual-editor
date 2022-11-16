import useVisualEditorStore from './visualEditor';
import usePageConfigStore from './pageConfig';
import useWidgetConfigStore from './widgetConfig';

export default function useStore(data) {
    return {
        visualEditor: useVisualEditorStore(),
        pageConfig: usePageConfigStore(),
        widgetConfig: useWidgetConfigStore(data?.widgetConfig || {})(),
    }
}

export function initializeStoreData(data) {
    const { pageConfig, widgetConfig } = useStore(data);
    pageConfig.$state = data.pageConfig;
    // widgetConfig.$state = data.widgetConfig;
    widgetConfig.baseWidgetsArr = Object.entries(data.widgetConfig)
        .filter(([, value]) => value.type === 'baseWidgets')
        .map(([key, ]) => key);
    widgetConfig.moduleWidgetsArr = Object.entries(data.widgetConfig)
        .filter(([, value]) => value.type === 'moduleWidgets')
        .map(([key, ]) => key);
    widgetConfig.customWidgetsArr = Object.entries(data.widgetConfig)
        .filter(([, value]) => value.type === 'customWidgets')
        .map(([key, ]) => key);
}