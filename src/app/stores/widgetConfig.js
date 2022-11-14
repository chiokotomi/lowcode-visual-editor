
import { defineStore } from 'pinia';
import baseWidgets from '@/packages/baseWidgets';

export default defineStore('widgetConfig', {
    state: () => {
        return {
            ...baseWidgets,
        }
    },
    // actions,
});