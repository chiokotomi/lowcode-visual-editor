
import { defineStore } from 'pinia';


export default defineStore('pageConfig', {
    state: () => {
        return {
            widgetIds: [],
            widgetPropsMap: {},
            height: 600,
            bgColor: '409EFF',
        }
    },
    // actions,
});