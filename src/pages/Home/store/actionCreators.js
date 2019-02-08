import { getHomeList,getHomeMoreList } from '../../../api';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
})

const addHomeList = (list,nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        getHomeList().then(res => {
            const result = res.data.data
            dispatch(changHomeData(result))
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        getHomeMoreList().then(res => {
            const reslut = res.data.data
            dispatch(addHomeList(reslut,page+1))
        })
    }
}