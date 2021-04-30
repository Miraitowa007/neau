import fetch from '../common'
export function getProductList(params){
    return fetch({
        url: `/newslist`,
        method: 'get',
        params
    })
}