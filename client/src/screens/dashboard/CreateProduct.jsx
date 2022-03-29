import React, {useState} from 'react'
import { Link } from "react-router-dom"
import ScreenHeader from "../../components/ScreenHeader"
import Wrapper from "./Wrapper"
import Spinner from "../../components/Spinner"
import { useGetAllCategoriesQuery } from "../../redux-toolkit/services/createService"
import {TwitterPicker} from "react-color"
import { v4 as uuidv4 } from 'uuid';
import Colors from '../../components/Colors'

const CreateProduct = () => {
    const {data = [], isFetching} = useGetAllCategoriesQuery();

    const [state, setState] = useState({
        title: "",
        price: 0,
        discount: 0,
        stock: 0,
        category: '',
        colors: []
    });

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const saveColors = (color) => {
        const filtered = state.colors.filter((clr) => clr.color !== color.hex)
        setState({...state, colors: [...filtered, {color: color.hex, id: uuidv4()}]})
    }

    const deleteColor = (color) => {
        const filtered = state.colors.filter((clr) => clr.color !== color.color)
        setState({...state, colors: filtered});
    }


    return(
        <Wrapper>
            <ScreenHeader>
            <Link to="/dashboard/products" className="btn-dark"><i className="bi bi-arrow-left-short"></i> proudcts list</Link>
            </ScreenHeader>
            <div className="flex flex-wrap -mx-3">
                <div className="w-full xl:w-8/12 p-3">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="title" className="label">title</label>
                            <input 
                                type="text" 
                                name="title" 
                                className="form-control" 
                                id="title" 
                                placeholder="title..."
                                value={state.title} 
                                onChange={handleInput}
                            />
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="price" className="label">price</label>
                            <input 
                                type="number" 
                                name="price" 
                                className="form-control" 
                                id="price" 
                                placeholder="price..." 
                                value={state.price}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="discount" className="label">discount</label>
                            <input 
                                type="number" 
                                name="discount" 
                                className="form-control" 
                                id="discount" 
                                placeholder="discount..." 
                                value={state.discount}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="stock" className="label">stock</label>
                            <input 
                                type="number" 
                                name="stock" 
                                className="form-control" 
                                id="stock" 
                                placeholder="stock..." 
                                value={state.stock}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="categories" className="label">categories</label>
                            {!isFetching ? data?.categories?.length > 0 && <select name="categories" id="categories" className="form-control" value={state.category} onChange={handleInput}>
                                <option value="">Choose category</option>
                                {data?.categories?.map(category => (
                                    <option value={category.name} key={category._id}>{category.name}</option>
                                ))}
                            </select> : <Spinner />}  
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="colors" className="label">choose colors</label>
                            <TwitterPicker onChangeComplete={saveColors} />
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-4/12 p-3">
                   <Colors colors={state.colors} deleteColor={deleteColor} />
                </div>
            </div>
        </Wrapper>
    )
}
export default CreateProduct