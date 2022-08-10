import axios from "axios"


export const GetNews = async(dispatch) => {
    try{
        const { data } = await axios.get("https://techcrunch.com/wp-json/wp/v2/posts?per_page=10");
        dispatch({type:"GET_NEWS", payload:data})
    }catch(err) {
        console.log(err);
    }
};
