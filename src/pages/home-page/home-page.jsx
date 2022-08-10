import { ProductListing } from "../../component/product-listing/product-listing";
import { useNewsData } from "../../context/data-context";


export const Home = () => {

    const { data } = useNewsData();

    return(
        <div className="">
            <h1>Top News</h1>
            <ProductListing data={data} />
        </div>
    )
};