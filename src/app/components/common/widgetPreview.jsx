import { defineComponent } from 'vue';

export default defineComponent({
    name: 'WidgetPreview',
    props: {
        element: {
            type: Object,
            default: () => ({}),
        },
    },
    setup(props) {
        return props.element.element.preview({
            styles: props.element.element.styles || {},
            props: props.element.element.props || {},
            model: {},
            block: props.element.element,
            custom: {},
        });
    },
});
