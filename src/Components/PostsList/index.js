import React from 'react';

import PostItem from "../PostItem";

import "../AddedList/index.css";

const PostsList = ({records}) => {

    return (
            <div className={"addedPosts"}>
                {
                    records.map(post => (
                            <PostItem post={post}
                                      key={post.id}
                            />
                        )
                    )
                }
            </div>
    );
};

export default PostsList;