import React from 'react';

import PostItem from "../PostItem";
import useSearchVM from "../../viewModel/useSearchVM";

import "./index.css"
import "../AddedList/index.css"


const Search = () => {

    const {
        searchPosts,
        searchedPosts,
        imputedValue,
    } = useSearchVM();

    return (
        <div className={"listContainer"}>
            <input placeholder={"Search"} className={"input"} onChange={searchPosts} value={imputedValue} type="text"/>
            <div className={"addedPosts"}>
                {
                    searchedPosts.map(post => (
                            <PostItem
                                key={post.id}
                                post={post}
                            />
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Search;