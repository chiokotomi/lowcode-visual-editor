
import { defineStore } from 'pinia';


export default defineStore('visualEditor', {
    state: () => {
        return {
            selectId: null,
            activeTabName: 'pageAttr',
        }
    },
    // actions,
});