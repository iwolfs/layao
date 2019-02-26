import React, { PureComponent } from 'react'
import { enquireScreen } from 'enquire-js';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import AboutIntro from '../components/AboutIntro';
import {
  NavDataSource,
  FooterDataSource,
} from '../datas/data.source';
import {
	AboutIntroDataSource,
} from '../datas/about.data.source'

import "antd/dist/antd.css";
import '../less/styles.less'

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class About extends PureComponent {
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
					<AboutIntro
						id="AboutIntro0_0"
						key="AboutIntro0_0"
						dataSource={AboutIntroDataSource}
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
