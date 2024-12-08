import http from "./http"
const getAll=()=>{
    return http.get('/address')
}
const get=(id)=>{
    return http.get(`/address/${id}`)
}
const post=(data)=>{
    return http.post('/address',data)
}
const put=(id,data)=>{
    return http.put(`/address/${id}`,data)
}
const delet=(id)=>{
    return http.delete(`/address/${id}`)
}

export let inputs={
    getAll,
    get,
    post,
    put,
    delet
}