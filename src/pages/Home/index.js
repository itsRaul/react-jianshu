import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';
import { actionCreators } from './store';

import { 
	HomeWrapper,
	HomeLeft,
    HomeRight,
    BackTop,
} from './style';

class Home extends Component { 
    constructor(props) { 
        super(props);
        this.state = {

        };
    }

    handleScrollTop() {
        console.log('11')
		window.scrollTo(0, 0);
	}

    componentDidMount() {
        this.props.changeHomeData()
    }

    render() {
        return (
            <HomeWrapper>
				<HomeLeft>
					<img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
					<Topic/>
                    <List/>
				</HomeLeft>
				<HomeRight>
					
				</HomeRight>
                    <Recommend/>
                    <Writer/>
				    <BackTop onClick={()=>this.handleScrollTop()}>顶部</BackTop>
			</HomeWrapper>
        );
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo()
        dispatch(action)
    }
});

export default	connect(null,mapDispatch)(Home)
