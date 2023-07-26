import React, {useState} from 'react';

import posts from "../Data";

const UseSearchVm = () => {
    const [searchedPosts, setSearchedPosts] = useState([]);
    const [imputedValue, setImputedValue] = useState("");

    const searchPosts = (e) => {
        const inputValue = e.target.value;
        setImputedValue(inputValue);

        const tempPosts = [];

        posts.forEach(post => {
            let count = 0;
            post.comments.forEach(comment => {
                if (comment.comment.toUpperCase().includes(inputValue.toUpperCase())) {
                    count++;
                    if (count === 1) {
                        tempPosts.push(post);
                    };
                };
            });
        });

        if(!inputValue){
            setSearchedPosts([])
        }else{
            setSearchedPosts(tempPosts)

        };
    };


    return{
        searchPosts,
        searchedPosts,
        imputedValue,
    };
};

export default UseSearchVm;