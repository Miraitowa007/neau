import fetch from '../common'
export function getNewsList(params){
    return fetch({
        url: `/articleList`,
        method: 'get',
        params
    })
}