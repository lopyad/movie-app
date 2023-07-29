import { useEffect } from "react";
import {Link, useParams} from "react-router-dom";
function Detail() {
    const {id} = useParams();
    const getDetail = async() => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        console.log(json);
      };
    useEffect(()=>{getDetail();}, []);
    return <h1><Link to="/">Detail</Link></h1>;
}
export default Detail;