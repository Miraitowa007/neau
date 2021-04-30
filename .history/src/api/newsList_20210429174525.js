import fetch from '../common'
export function getNewsList(params){
    return fetch({
        url: `/ArticleList`,
        method: 'get',
        params
    })
}