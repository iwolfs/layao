export const MapDataSource = {
  wrapper: { className: 'home-page-wrapper contact-map-wrapper' },
  Content: {
    className: 'icon-wrapper',
    children: {
      icon: {
        className: 'icon',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg',
        name: '主要图标',
      },
      iconShadow: {
        className: 'icon-shadow',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg',
        name: '图标影阴',
      },
      url: { children: 'http://f.amap.com/53a1F_09A6LvY', name: '跳转地址' },
      title: { children: '公司地址', name: '弹框标题' },
      content: {
        children: '上海市嘉定区曹安公路4514弄3栋3号厂房',
        name: '弹框内容',
      },
    },
  },
};

export const ContactDataSource = {
  wrapper: { className: 'home-page-wrapper contact-info-wrapper' },
  OverPack: { className: 'home-page contact-info' },
  textWrapper: { className: 'contact-info-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '上海莱耀照明科技有限公司',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '专业致力于城市景观照明的规划设计',
      },
    ],
  },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
    className: 'contact-info-img',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'contact-info-icon',
        },
        title: { className: 'contact-info-title', children: '联系人' },
        content: {
          className: 'contact-info-content',
          children:
            '胡先生',
        },
      },
      {
        name: 'block1',
        img: {
          className: 'contact-info-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: { className: 'contact-info-title', children: '联系电话' },
        content: {
          className: 'contact-info-content',
          children:
            '13918141354',
        },
      },
      {
        name: 'block2',
        img: {
          className: 'contact-info-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'contact-info-title', children: '联系地址' },
        content: {
          className: 'contact-info-content',
          children:
            '上海市嘉定区曹安公路4514弄3栋3号厂房',
        },
      },
    ],
  },
};