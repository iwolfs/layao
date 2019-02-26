import React, { PureComponent } from 'react'
import { enquireScreen } from 'enquire-js';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import CaseList from '../../components/CaseList';
import BannerSingle from '../../components/BannerSingle';
import {
  NavDataSource,
  FooterDataSource,
} from '../../datas/data.source';
import {
	CaseDataSource,
	BannerDataSource,
} from '../../datas/case.data.source'

import "antd/dist/antd.css";
import '../../less/styles.less'

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Case extends PureComponent {
	constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

	componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }


	render() {
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
					<BannerSingle
						id="Banner0_0"
						key="Banner0_0"
						dataSource={BannerDataSource}
						isMobile={this.state.isMobile}
					/>,
					<CaseList
						id="NewsItem0_0"
						key="NewsItem0_0"
						dataSource={CaseDataSource}
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
