import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useParams} from "react-router-dom"
import ScreenHeader from "../../components/ScreenHeader";
import Spinner from "../../components/Spinner";
import { clearCategory } from "../../redux-toolkit/reducers/categoryReducer";
import { useGetCategoryQuery } from "../../redux-toolkit/services/createService";
import Wrapper from "./Wrapper"


const Categories = () => {
    const {page} = useParams();
    const {success} = useSelector((state) => state.categoryReducer);
    const dispatch = useDispatch();

    const {data = [], isLoading} = useGetCategoryQuery(page);
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
           {
            !isLoading ? data?.categories?.length > 0 && <div>
              <table className="w-full bg-gray-900 rounded-md">
                 <thead>
                    <tr className="border-b border-gray-800 text-left">
                       <th className="p-3 uppercase text-sm font-medium text-gray-500">name</th>
                       <th className="p-3 uppercase text-sm font-medium text-gray-500">edit</th>
                       <th className="p-3 uppercase text-sm font-medium text-gray-500">delete</th>
                    </tr>
                 </thead>
                 <tbody>
                    {data?.categories?.map(category => (
                       <tr key={category._id} className="odd:bg-gray-800">
                          <td className="p-3 capitalize text-sm font-normal text-gray-400">{category.name}</td>
                          <td className="p-3 capitalize text-sm font-normal text-gray-400"><button>edit</button></td>
                          <td className="p-3 capitalize text-sm font-normal text-gray-400"><button>delete</button></td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div> : <Spinner />}
       </Wrapper>
    )
}
export default Categories;