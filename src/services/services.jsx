import axios from "axios";

export const GetNews = async(setData) => {
    try{
        const { data } = await axios.get("https://techcrunch.com/wp-json/wp/v2/posts?per_page=10");
        setData(data);
    }catch(err) {
        console.log(err);
    }
};