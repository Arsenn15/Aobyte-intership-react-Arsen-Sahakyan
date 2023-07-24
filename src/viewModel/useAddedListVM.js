import {useState} from "react";

const useAddedListVm = (removePost, getRestoredPost, posts) => {

    const [addedPosts, setAddedPosts] = useState([])

    const restorePosts = (id) => {
        getRestoredPost(id);
        const tempPosts = addedPosts.filter(post => id !== post.id)
        setAddedPosts(tempPosts)
    }

    const sortPosts = () => {
        let sortedPosts = [];

        if (addedPosts.length > 1) {
            if (addedPosts[0].averageRate > addedPosts[addedPosts.length-1].averageRate) {
                sortedPosts = addedPosts.sort((postA, postB) => {
                    return postA.averageRate - postB.averageRate;
                })
            } else {
                sortedPosts = [...addedPosts].sort((postA, postB) => {
                    return postB.averageRate - postA.averageRate;
                });
            }
        } else {
            return;
        }

        setAddedPosts([...sortedPosts])
    }

    const addPost = () => {
        let highestRatePost = {};
        let rate = 0;
        let highestPostId = null;
        for (const post of posts) {
            let totalRate = 0;
            const comments = [...post.comments];

            for (const comment of comments) {
                totalRate += comment.rating;
            };

            const averageRate = totalRate / post.comments.length;

            if (averageRate > rate) {
                highestRatePost = {...post};
                rate = averageRate;
                highestPostId = post.id;
            };
        };

        if (!highestRatePost.id) {
            return;
        };

        setAddedPosts(prev => [...prev, {...highestRatePost, averageRate: rate}])
        removePost(highestPostId);
    };

    return {
        addPost,
        sortPosts,
        restorePosts,
        addedPosts,
    };
};

export default useAddedListVm;