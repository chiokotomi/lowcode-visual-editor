
import { defineStore } from 'pinia';

export default (initializData) => defineStore('widgetConfig', {
    state: () => {
        return {
            baseWidgetsArr: [],
            moduleWidgetsArr: [],
            customWidgetsArr: [],
            ...initializData,
        }
    },
});