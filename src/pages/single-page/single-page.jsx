import "./single-page.css";
import { useParams } from "react-router-dom";
import { useNewsData } from "../../context/data-context";



export const SinglePage = () => {

    const { itemId } = useParams();

    const { data } = useNewsData();


    const singleNews = data.find(e => e.id === parseInt(itemId));

    return (
        <div className="singleProduct">
            <div className="content-body">
                <h1 className="single-page-heading margin">{singleNews?.title.rendered}</h1>
                <div className="single-author">
                    {singleNews?.parsely.meta.author.map(a => <strong key={a.name} className="margin">{a.name}</strong>)}
                    <p className="date margin">{singleNews?.date}</p>
                </div>
                <img className="card-img" src={singleNews?.jetpack_featured_media_url} alt="img" />
                <section className="content">
                    <p dangerouslySetInnerHTML={{ __html: singleNews?.content.rendered }}></p>
                </section>
            </div>
        </div>
    )
}