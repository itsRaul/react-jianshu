import http from '../utils/request'

/**
 * @name getHeaderList
 * @description 热门搜索
 */
export function getHeaderList() {
    return http({
        url: 'api/headerList.json', 
        method: 'get',   
    })
}

export function getHomeList() {
    return http({
        url: 'api/home.json', 
        method: 'get',   
    })
}

export function getHomeMoreList() {
    return http({
        url: 'api/homeList.json', 
        method: 'get',   
    })
}

export const getDetails = (id) => {
    const params = {
        id
    }
    return http({
        url: '/api/detail.json', 
        method: 'get',   
        params,
    })
}