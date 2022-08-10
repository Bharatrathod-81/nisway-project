import { Link } from "react-router-dom";
import "./product-listing.css";

export const ProductListing = ({ data }) => {

    return (
        <div className="card-main-container">
            {data?.map(e =>
                <Link className="card-body" to={`/singlePage/${e.id}`}>
                    <div className="title-body">
                        <h1>{e.title.rendered}</h1>
                        {e.parsely.meta.author.map(a => <strong>{a.name}</strong>)}
                        <p className="date">{e.date}</p>
                    </div>
                    <div className="excerpt-body">
                        <p dangerouslySetInnerHTML={{ __html: e.excerpt.rendered.replace('[&hellip;]', '...') }}></p>
                    </div>
                    <div className="card-img-container">
                        <img className="card-img" src={e.jetpack_featured_media_url} />
                    </div>
                </Link>
            )}
        </div>
    )
};
