import {useEffect, useState} from "react";
import {posts} from "../Data";

const useAppVM = () => {
    const [editedPosts, setEditedPosts] = useState([]);

    useEffect(() => {
        setEditedPosts([...posts]);
    }, []);

    const removePost = (id) => {
        const currentPosts = editedPosts.filter(post => id !== post.id);
        setEditedPosts([...currentPosts]);
    }

    const getRestoredPost = (id) => {
        let restoredPost = {};
        for (const post of posts) {
            if (id === post.id) {
                restoredPost = {...post}
            };
        };

        setEditedPosts(prev => [...prev, restoredPost]);
    };

    return {
        removePost,
        getRestoredPost,
        editedPosts,
    };
};

export default useAppVM;