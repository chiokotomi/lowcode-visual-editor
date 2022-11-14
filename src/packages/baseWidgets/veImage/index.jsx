import { Image } from 'vant';

export default {
    name: 'veImage',
    type: 'baseWidgets',
    label: '单图组件',
    preview: ({ props, styles }) => {
      const btnProps = {
        ...props,
        type: 'primary'
      };
      return () => <Image
        width="100"
        height="100"
        lazy-load
      />
    },
    render: ({ props, styles }) => {
        // const { registerRef } = useGlobalProperties();
        return () => (
          <div style={styles}>
           <Image {...props}></Image>
            {/* <Button ref={(el) => registerRef(el, block._vid)} {...props}></Button> */}
          </div>
        );
    },
    props: {
      width: 100,
      height: 100,
      src: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    },
    propsEditor: [
      {
        props: 'width',
        type: 'input',
        defaultValue: 100,
        label: '图片宽度'
      },
      {
        props: 'height',
        type: 'input',
        defaultValue: 100,
        label: '图片高度'
      },
      {
        props: 'src',
        type: 'input',
        defaultValue: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
        label: '图片资源地址'
      },
    ]
}