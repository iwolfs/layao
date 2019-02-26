import React, { PureComponent } from 'react'
import { enquireScreen } from 'enquire-js';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import NewsItem from '../components/NewsItem';
import MapContact from '../components/MapContact';
import ContactInfo from '../components/Contact';
import {
  NavDataSource,
  FooterDataSource,
} from '../datas/data.source';
import {
	MapDataSource,
	ContactDataSource,
} from '../datas/contact.data.source'

import "antd/dist/antd.css";
import '../less/styles.less'

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Contact extends PureComponent {
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
					<ContactInfo 
						id="Contact0_0"
						key="Contact0_0"
						dataSource={ContactDataSource}
						isMobile={this.state.isMobile}
					/>,
					<MapContact
						id="Map0_0"
						key="Map0_0"
						dataSource={MapDataSource}
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
