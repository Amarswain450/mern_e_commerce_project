import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useParams} from "react-router-dom"
import ScreenHeader from "../../components/ScreenHeader";
import { clearCategory } from "../../redux-toolkit/reducers/categoryReducer";
import { useGetCategoryQuery } from "../../redux-toolkit/services/createService";
import Wrapper from "./Wrapper"


const Categories = () => {
    const {page} = useParams();
    const {success} = useSelector((state) => state.categoryReducer);
    const dispatch = useDispatch();

    const {data, isLoading} = useGetCategoryQuery(page);
    console.log(data, isLoading);

    useEffect(() => {
        return () => {
            dispatch(clearCategory());
        }
    },[]);
    return(
       <Wrapper>
           <ScreenHeader>
              <Link to="/dashboard/create-category" className="btn-dark">add categories <i className="bi bi-plus"></i></Link>
           </ScreenHeader>
           {success && <div className="alert-success">{success}</div>}
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel molestiae tempora voluptatibus rem neque optio, deserunt, autem, est distinctio assumenda ratione cum esse at. Vero inventore officia perspiciatis quisquam consequatur!
       </Wrapper>
    )
}
export default Categories;