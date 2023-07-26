import React, {useState} from 'react';

import posts from "../../Data";
import PostItem from "../PostItem";

import "../AddedList/index.css"


const PostsList = () => {
    const [allPosts, setAllPosts] = useState(posts)

    return (
        <div className={"listContainer"}>
            <div className={"addedPosts"}>
                {
                    allPosts.map(post => (
                            <PostItem post={post}
                                      key={post.id}
                            />
                        )
                    )
                }
            </div>

        </div>
    );
};

export default PostsList;