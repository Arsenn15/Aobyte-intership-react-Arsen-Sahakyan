import React from 'react';

import usePostsItemVM from "../../viewModel/usePostsItemVM";
import Comments from "../Comments";

const PostItem = ({post}) => {

    const {
        inputValue,
        addComments,
        changeInputValue
    } = usePostsItemVM();

    return (
        <div>
            <div className={"postContainer"} key={post.id}>
                <div>
                    <img className={"postPhoto"} src={post.photoSrc} alt=""/>
                </div>
                <div className={"postNameBtn"}>

                    <span className={"postTitle"}>{post.title}</span>
                    {
                        post.comments.map((comment) => <Comments
                            key={comment.id}
                            comment={comment}/>)
                    }
                    <input
                        value={inputValue}
                        onChange={(event) => changeInputValue(event)}
                        onKeyDown={(event) => addComments(event, post.id, inputValue)} type="text"
                        placeholder={"Comment..."}
                    />
                </div>
            </div>
        </div>
    );
};

export default PostItem;