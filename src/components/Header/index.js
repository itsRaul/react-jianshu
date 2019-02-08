import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/Login/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
} from './style'

class Header extends Component { 

    //输入框的入门搜索
    getListArea() {
        let { focused,mouseIn,list,page,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage } = this.props;
        let newList = list.toJS()

        const pageList = [];
        //分页处理
		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
        }
        
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle
                        onClick={() => handleChangePage(page, totalPage)}>
                        热门搜索
                        <SearchInfoSwitch>
                            <i  className="iconfont spin">&#xe851;</i>换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }

    render() {
        let {
            focused,
            list,
            handleInputFocus,
            handleInputBlur,
            login,
            logout
        } = this.props
        
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
						login ? 
							<NavItem onClick={logout} className='right'>退出</NavItem> : 
							<Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
					}
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames="slide"
                            >
                            <NavSearch 
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}></NavSearch> 
                        </CSSTransition>                   
                        <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe614;</i>                         
                        {this.getListArea()}
                    </SearchWrapper>  
                                  
                </Nav>
                <Addition>                   
                    <Button className="writting">写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused']),
        mouseIn: state.getIn(['header','mouseIn']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login','login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //输入框获取焦点，输入框变长
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
         //输入框失去焦点，输入框恢复原样
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        //改变页数
        handleChangePage(page,totalPage) {
            if (page<totalPage) {
                dispatch(actionCreators.changePage(page+1))
            }else {
                dispatch(actionCreators.changePage(1))
            }
            
        },
        logout() {
			dispatch(loginActionCreators.logout())
		}
    }
}

export default	connect(mapStateToProps,mapDispatchToProps)(Header)
