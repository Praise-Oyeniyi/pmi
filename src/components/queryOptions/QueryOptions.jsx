import { queryOptions } from "@tanstack/react-query";
import { fetchApi } from "../../apis";



export  function createUpcomingQueryOptions(id){
    return queryOptions({
        queryKey: ['coming', id],
        queryFn: ()=>getComing(id),
    })
}

export function createCertQueryOptions(){
    return queryOptions({
        queryKey:['certlist'],
        queryFn: getCert,
    })
}


export function createSpecialQueryOptions(){
    return queryOptions({
        queryKey: ['specialMenu'],
        queryFn: getMenu
    })
}
export function createEventDetailsQueryOptions(id){
    return queryOptions({
        queryKey: ['eventsdesc', id],
        queryFn: ()=>getEvent(id)
    })
}

export function createRelatedQueryOptions(id){
    return queryOptions({
        queryKey: ['related', id],
        queryFn: ()=>getRelated(id)
    })
}

const getComing = async (id) =>{
    const comingLink = `/custom/v1/upcoming-events?category_id=${id}`
    const result = await fetchApi(comingLink)
    return result;

}

const getMenu = async () =>{
    const menuLink = `/custom/v1/event-categories`
    const result = await fetchApi(menuLink)
    return result;
}


const getEvent = async (id) =>{
    const eventLink = `/custom-api/v1/event/${id}`
    const result = await fetchApi(eventLink)
    return result;
}

const getRelated = async (id) =>{
    const relatedLink = `/custom/v1/related-past-events/${id}`
    const result = await fetchApi(relatedLink)
    return result;
}

const getCert = async () =>{
    const certification = '/custom/v1/certifications-listing/'
    const result = await fetchApi(certification)
    return result
}