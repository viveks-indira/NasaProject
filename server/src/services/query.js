
const Default_Page_Number=1;
const Default_Page_Limit=0;

export function getPagination(query){
    const page=Math.abs(query.page) || Default_Page_Number;
    const limit=Math.abs(query.limit) || Default_Page_Limit;

    const skip=(page-1)*limit
    return {
        skip,
        limit,
    }
}

export default {
    getPagination,
}