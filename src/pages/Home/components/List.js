import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store'

class List extends Component { 

    toDetail(id) {
        this.props.history.push('/detail',{id})
    }

    render() {
        let { getMoreList,page } = this.props
        return (
            <div>
                {
                    this.props.list.map( (item,index) => {
                        return(
                           
                                <ListItem key={index} onClick={() => this.toDetail(item.get('id'))}>
                                    <img className="pic" src={item.get('imgUrl')} alt=""/>
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            
                        )
                    })
                }
                
                <LoadMore onClick={()=>getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list:state.getIn(['home', 'articleList']),
    page:state.getIn(['home','articlePage'])
})

const mapDispatch = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})

export default	connect(mapState,mapDispatch) (withRouter(List))
