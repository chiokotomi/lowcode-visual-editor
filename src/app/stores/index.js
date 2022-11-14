import useVisualEditorStore from './visualEditor';
import usePageConfigStore from './pageConfig';
import useWidgetConfigStore from './widgetConfig';

export default function useStore() {
    return {
        visualEditor: useVisualEditorStore(),
        pageConfig: usePageConfigStore(),
        widgetConfig: useWidgetConfigStore(),
    }
}

export function initializeStoreData(data) {
    const { pageConfig } = useStore();
    pageConfig.$state = data.pageConfig;
}