import React, { PureComponent } from 'react'
import { enquireScreen } from 'enquire-js';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import CaseList from '../../components/CaseList';
import BannerSingle from '../../components/BannerSingle';
import BannerView from '../../components/BannerView';
import {
  NavDataSource,
  FooterDataSource,
} from '../../datas/data.source';
import {
	CaseDataSource,
	BannerDataSource,
} from '../../datas/case.data.source'

import {
	BannerViewDataSource,
} from '../../datas/case.view.data.source'

import "antd/dist/antd.css";
import '../../less/styles.less'

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class CaseDetail extends PureComponent {
	constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

	componentDidMount() {
		const { url } = this.props


    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  getBannerSource() {
  	const { url } = this.props
  	const dataSource = BannerViewDataSource.find(item => String(item.id) === url.query.id) 
  	return dataSource || BannerViewDataSource[0]
  }


	render() {
		const bannerDataSource = this.getBannerSource()
		
		return (
			<div
				className="templates-wrapper"
			>
				{[<Nav 
						id="Nav0_0"
						key="Nav0_0"
						dataSource={NavDataSource}
	        	isMobile={this.state.isMobile}
					/>,
					<BannerView
						id="Banner0_0"
						key="Banner0_0"
						dataSource={bannerDataSource}
						isMobile={this.state.isMobile}
					/>,
		      <Footer
		        id="Footer1_0"
		        key="Footer1_0"
		        dataSource={FooterDataSource}
		        isMobile={this.state.isMobile}
		      />,
				]}
			</div>
		)
	}
}
