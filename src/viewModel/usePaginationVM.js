import React, {useState} from 'react';
import posts from "../Data";

const UsePagination = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = posts.slice(firstIndex, lastIndex);
    const numberPage = Math.ceil(posts.length / recordsPerPage);
    const numbers = [...Array(numberPage + 1).keys()].slice(1);

    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        };
    };

    const changePage = (id) => {
        setCurrentPage(id);
    };

    const nextPage = () => {
        if (currentPage !== numberPage) {
            setCurrentPage(currentPage + 1);
        };
    };


    return {
        numbers,
        prePage,
        changePage,
        records,
        nextPage,
        currentPage,
    };
};

export default UsePagination;
