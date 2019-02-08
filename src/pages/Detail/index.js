import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import { DetailWrapper, Header, Content } from './style';

class Detail extends Component { 
    constructor(props) { 
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.props.getDetail(this.props.location.state.id)
    }

    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content 
                    dangerouslySetInnerHTML={{__html:this.props.content}}/>
                    
            </DetailWrapper>
        );
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
})

export default	connect(mapState,mapDispatch)(withRouter(Detail))
