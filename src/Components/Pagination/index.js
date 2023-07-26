import React from 'react';

import PostsList from "../PostsList";
import usePaginationVM from "../../viewModel/usePaginationVM";

import "./index.css";


const Pagination = () => {

    const {
        numbers,
        prePage,
        changePage,
        records,
        nextPage,
        currentPage,
    } = usePaginationVM();

    return (
        <div className={"listContainer"}>
            <PostsList records={records}/>
            <nav className={"navBar"}>
                <ul className={"paginationContainer"}>
                    <li className={"paginationItem"}>
                        <a href="#"
                           className={"pageNumber"}
                           onClick={prePage}
                        >Back</a>
                    </li>
                    {
                        numbers.map((number,index)=>{
                            return <li className={"paginationItem"}
                                       key={index}>
                                <a href="#"
                                   className={`${currentPage === number ? "active":"pageNumber"}`}
                                   onClick={() => changePage(number)}
                                >{number}</a>
                            </li>
                        })
                    }
                    <li className={"paginationItem"}>
                        <a href="#"
                           className={"pageNumber"}
                           onClick={nextPage}
                        >Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
