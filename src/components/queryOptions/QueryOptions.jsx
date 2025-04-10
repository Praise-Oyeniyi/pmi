import { queryOptions } from "@tanstack/react-query";
import { fetchApi } from "../../apis";



export default function createUpcomingQueryOptions(){
    return queryOptions({
        queryKey: ['coming'],
        queryFn: getComing,
    })
}

const getComing = async () =>{
    const comingLink = `/custom/v1/upcoming-events?category_id=55`
    const result = await fetchApi(comingLink)
    return result;
  }