import React from 'react';
export const NavDataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    // children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
    children: '/static/images/logo.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: '首页', href: '/' } },
      { name: 'item1', a: { children: '关于莱耀', href: '/about' } },
      // { name: 'item~js8vhinq9o', a: { children: '产品中心', href: '/product' } },
      { name: 'item2', a: { children: '案例展示', href: '/case' } },
      // { name: 'item~js8vjg5t31t', a: { children: '公司新闻', href: '/news' } },
      { name: 'item3', a: { children: '联系我们', href: '/contact' } },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const BannerDataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { 
          className: 'bg',
          style: {
            backgroundImage: 'url(/static/images/banner/振石酒店.jpg)',
          }
        },
        title: {
          className: 'banner1-title',
          // children:
            // 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '桐乡振石大酒店',
        },
        button: { className: 'banner1-button', children: '查看详情' },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { 
          className: 'bg',
          style: {
            backgroundImage: 'url(/static/images/banner/奥克斯长沙洋湖垸.jpg)',
          }
        },
        title: {
          className: 'banner1-title',
          // children:
          //   'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '奥克斯长沙洋湖垸',
        },
        button: { className: 'banner1-button', children: '查看详情' },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: {
          className: 'banner1-text-wrapper js7krkzojll-editor_css',
        },
        bg: { 
          className: 'bg',
          style: {
            backgroundImage: 'url(/static/images/banner/浦东新希望产业园鸟瞰.jpg)',
          }
        },
        title: {
          className: 'banner1-title',
          // children:
          //   'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '浦东新希望产业园鸟瞰',
        },
        button: { className: 'banner1-button', children: '查看详情' },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: {
          className: 'banner1-text-wrapper js7krkzojll-editor_css',
        },
        bg: { 
          className: 'bg',
          style: {
            backgroundImage: 'url(/static/images/banner/济宁恒信公馆.jpg)',
          }
        },
        title: {
          className: 'banner1-title',
          // children:
          //   'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '济宁恒信公馆',
        },
        button: { className: 'banner1-button', children: '查看详情' },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: {
          className: 'banner1-text-wrapper js7krkzojll-editor_css',
        },
        bg: { 
          className: 'bg',
          style: {
            backgroundImage: 'url(/static/images/banner/上海马戏城.jpg)',
          }
        },
        title: {
          className: 'banner1-title',
          // children:
          //   'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '上海马戏城',
        },
        button: { className: 'banner1-button', children: '查看详情' },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: {
          className: 'banner1-text-wrapper js7krkzojll-editor_css',
        },
        bg: { 
          className: 'bg',
          style: {
            backgroundImage: 'url(/static/images/banner/西安环普工业园.jpg)',
          }
        },
        title: {
          className: 'banner1-title',
          // children:
          //   'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '西安环普工业园',
        },
        button: { className: 'banner1-button', children: '查看详情' },
      },
    ],
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
          },
          title: { className: 'content0-title', children: '一站式业务接入' },
          content: { children: '支付、结算、核算接入产品效率翻四倍' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
          },
          title: {
            className: 'content0-title',
            children: '一站式事中风险监控',
          },
          content: { children: '在所有需求配置环节事前风险控制和质量控制能力' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
          },
          title: { className: 'content0-title', children: '一站式数据运营' },
          content: { children: '沉淀产品接入效率和运营小二工作效率数据' },
        },
      },
    ],
  },
};
export const CaseDataSource = {
  wrapper: { className: 'home-page-wrapper case-home-wrapper' },
  page: { className: 'home-page case-home' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '客户案例', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: '',
      },
    ],
  },
  block: {
    className: 'case-home-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          id: 3001,
          wrapper: { className: 'case-home-block-content' },
          img: {
            children:
              '/static/images/case/thumbs/恒大会所综合楼.jpg',
          },
          content: { children: '恒大会所综合楼' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          id: 2001,
          wrapper: { className: 'case-home-block-content' },
          img: {
            children:
              '/static/images/case/thumbs/芭提雅酒店.jpg',
          },
          content: { children: '芭提雅酒店' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          id: 2003,
          wrapper: { className: 'case-home-block-content' },
          img: {
            children:
              '/static/images/case/thumbs/丹阳国际眼镜城.jpg',
          },
          content: { children: '丹阳国际眼镜城' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          id: 2006,
          wrapper: { className: 'case-home-block-content' },
          img: {
            children:
              '/static/images/case/thumbs/恒万商业楼.jpg',
          },
          content: { children: '恒万商业楼' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          id: 2007,
          wrapper: { className: 'case-home-block-content' },
          img: {
            children:
              '/static/images/case/thumbs/嘉兴南湖新天地.jpg',
          },
          content: { children: '嘉兴南湖新天地' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          id: 2008,
          wrapper: { className: 'case-home-block-content' },
          img: {
            children:
              '/static/images/case/thumbs/江苏三禾国际酒店.jpg',
          },
          content: { children: '江苏三禾国际酒店' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          id: 2009,
          wrapper: { className: 'case-home-block-content' },
          img: {
            children:
              '/static/images/case/thumbs/昆明壹方城.jpg',
          },
          content: { children: '昆明壹方城' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          id: 3003,
          wrapper: { className: 'case-home-block-content' },
          img: {
            children:
              '/static/images/case/thumbs/宁波私宅.jpg',
          },
          content: { children: '宁波私宅' },
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '蚂蚁金融云提供专业的服务',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '基于阿里云强大的基础资源',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '企业资源管理' },
          content: {
            className: 'content3-content',
            children:
              '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云安全' },
          content: {
            className: 'content3-content',
            children:
              '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云监控' },
          content: {
            className: 'content3-content',
            children:
              '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '移动' },
          content: {
            className: 'content3-content',
            children:
              '一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '分布式中间件' },
          content: {
            className: 'content3-content',
            children:
              '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '大数据' },
          content: {
            className: 'content3-content',
            children:
              '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
          },
        },
      },
    ],
  },
};

export const NewsItemDataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: '企业资源管理' },
  content: {
    className: 'content1-content',
    children:
      '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
  },
};
export const FooterDataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            '/static/images/logo.png',
        },
        content: {
          className: 'slogan',
          children: (
            <span>
              <p>公司名称：上海莱耀照明科技有限公司</p>
              <p>联系人：胡先生</p>
              <p>联系电话：13918141354</p>
              <p>联系地址：上海市嘉定区曹安公路4514弄3栋3号厂房</p>
            </span>
          ),
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于' },
        content: {
          children: (
            <span>
              <p>
                {' '}
                <a href="/about">关于莱耀</a>{' '}
              </p>{' '}
            </span>
          ),
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '案例' },
        content: {
          children: (
            <span>
              <p>
                {' '}
                <a href="/case">案例展示</a>{' '}
              </p>{' '}
            </span>
          ),
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '联系' },
        content: {
          children: (
            <span>
              <p>
                {' '}
                <a href="/contact">联系我们</a>{' '}
              </p>{' '}
            </span>
          ),
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2019 by <a href="http://www.layao.co">Layao</a> All Rights
        Reserved
      </span>
    ),
  },
};
