import "./single-page.css";
import { useParams } from "react-router-dom";
import { useNewsData } from "../../context/data-context";
import { useEffect } from "react";
import { GetNews } from "../../services/services";


export const SinglePage = () => {

    const { itemId } = useParams();

    const { data: { newsData }, dispatchData } = useNewsData();
    useEffect(() => {
        (async () => {
            await GetNews(dispatchData)
        })();
    }, [])

    const singleNews = newsData?.find(e => e.id === parseInt(itemId));
    

    return (
        <div className="singleProduct">
            <div className="content-body">
                <h1 className="single-page-heading margin">{singleNews?.title.rendered}</h1>
                <div className="single-author">
                    {singleNews?.parsely.meta.author.map(a => <strong className="margin">{a.name}</strong>)}
                    <p className="date margin">{singleNews?.date}</p>
                </div>
                <div className="content">
                    <p dangerouslySetInnerHTML={{ __html: singleNews?.content.rendered }}></p>
                </div>
            </div>
        </div>
    )
}