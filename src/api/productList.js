import fetch from '../common'
export function getProductList(params){
    return fetch({
        url: `/list`,
        method: 'get',
        params
    })
}