import React, { Component } from 'react'
import { enquireScreen } from 'enquire-js';
import { withRouter } from 'next/router'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import ProductService from '../components/ProductService'
import CaseHome from '../components/CaseHome'
import Footer from '../components/Footer'
import {
  NavDataSource,
  BannerDataSource,
  Content00DataSource,
  CaseDataSource,
  Content30DataSource,
  FooterDataSource,
} from '../datas/data.source';

import "antd/dist/antd.css";
import '../less/styles.less'

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class Home extends Component {
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
					<Banner
		        id="Banner1_0"
		        key="Banner1_0"
		        dataSource={BannerDataSource}
		        isMobile={this.state.isMobile}
		      />,
		      // <ProductService
		      //   id="Content0_0"
		      //   key="Content0_0"
		      //   dataSource={Content00DataSource}
		      //   isMobile={this.state.isMobile}
		      // />,
		      <CaseHome
		        id="Content5_0"
		        key="Content5_0"
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

export default withRouter(Home)