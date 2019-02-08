import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends Component { 
    constructor(props) { 
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <RecommendWrapper>
                {
                    this.props.list.map(item => (
                        <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                    ))
                }               
            </RecommendWrapper>
        );
    }
}

const mapState = (state) => ({
    list:state.getIn(['home','recommendList'])
})

export default	connect(mapState,null)(Recommend)
