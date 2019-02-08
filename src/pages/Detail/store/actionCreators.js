import { getDetails} from '../../../api';
import * as constants from './constants';

const changeDatail = (title,content) => ({
    type:constants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail =  (id) => {
    return (dispatch) => {
        
        getDetails(id).then(res => {
            const result = res.data.data;
            dispatch(changeDatail(result.title, result.content))
        })
    }
}