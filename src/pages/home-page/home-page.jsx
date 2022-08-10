import { useEffect } from "react";
import { ProductListing } from "../../component/product-listing/product-listing";
import { useNewsData } from "../../context/data-context";
import { GetNews } from "../../services/services";


export const Home = () => {

    const { data:{ newsData },dispatchData } = useNewsData();
    useEffect(() => {
        (async() => {
           await GetNews(dispatchData)
        })();
    },[])

    return(
        <div className="">
            <h1>Top News</h1>
            <ProductListing data={newsData} />
        </div>
    )
};