import { Button } from 'vant';

export default {
    name: 'veButton',
    type: 'baseWidgets',
    label: '按钮组件',
    preview: ({ props, styles }) => {
      const btnProps = {
        ...props,
        type: 'primary'
      };
      return () => <Button {...btnProps}>按钮</Button>
    },
    render: ({ props, styles }) => {
        // const { registerRef } = useGlobalProperties();
        return () => (
          <div style={styles}>
           <Button {...props}></Button>
            {/* <Button ref={(el) => registerRef(el, block._vid)} {...props}></Button> */}
          </div>
        );
    },
    props: {
        text: '按钮',
        type: 'primary',
        size: 'normal',
    },
    propsEditor: [
      {
        props: 'text',
        type: 'input',
        defaultValue: '按钮',
        label: '按钮文字'
      },
      {
        props: 'type',
        type: 'select',
        defaultValue: 'primary',
        label: '按钮类型',
        options: [
          {
            label: '主要按钮',
            value: 'primary'
          },
          {
            label: '成功按钮',
            value: 'success'
          },
          {
            label: '默认按钮',
            value: 'default',
          },
          {
            label: '警告按钮',
            value: 'warning',
          },
          {
            label: '危险按钮',
            value: 'danger',
          },
        ]
      },
      {
        props: 'size',
        type: 'select',
        options: [
          {
            label: '大型',
            value: 'large',
          },
          {
            label: '普通',
            value: 'normal',
          },
          {
            label: '小型',
            value: 'small',
          },
          {
            label: '迷你',
            value: 'mini',
          },
        ],
        defaultValue: 'normal',
      }
    ]
}