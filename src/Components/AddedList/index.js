import React from "react";

import useAddedListVM from "../../viewModel/useAddedListVM.js";

import "./index.css"


const AddedList = ({removePost, getRestoredPost, posts}) => {

    const {
        addPost,
        sortPosts,
        restorePosts,
        addedPosts
    } = useAddedListVM(removePost, getRestoredPost, posts);

    return (
        <div className={"listContainer"}>
            <button className={'addBtn'} onClick={addPost}>+</button>
            <div className={'addedPosts'}>
                {
                    addedPosts.map(post => (
                            <div key={post.id} className={"postContainer"}>
                                <img className={"postPhoto"} src={post.photoSrc} alt=""/>
                                <div className={"postNameBtn"}>
                                    <span>{post.title}, {Math.floor(post.averageRate)}</span>
                                    <button
                                        className={"removeBtn"}
                                        onClick={() => restorePosts(post.id)}
                                    >-</button>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
            <button
                className={'sortBtn'}
                onClick={sortPosts}
            >Sort</button>
        </div>
    );
};

export default AddedList;