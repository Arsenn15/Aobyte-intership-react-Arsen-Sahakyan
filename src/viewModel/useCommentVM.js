import React, {useState} from 'react';

import posts from "../Data";

const UseCommentVm = () => {

    const [allPosts, setAllPosts] = useState(posts);

    const changeRating = (id, newRating) => {
        const updatedPostRating = allPosts.map(post => {
            post.comments.forEach(comment => {
                if (comment.id === id) {
                    comment.rating = +newRating

                };
            });
            return post;
        });
        setAllPosts(updatedPostRating);
    };

    return {
        changeRating,
        allPosts,
    };
};

export default UseCommentVm;