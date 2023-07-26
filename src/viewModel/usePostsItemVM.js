import {useState} from "react";

import {posts} from "../Data";
import generateUUID from "../Hooks";

const usePostsListVM = () => {
    const [inputValue, setInputValue] = useState("");

    const changeInputValue = (event) => {
        setInputValue(event.target.value)
    }

    const addComments = ( event, id , NewComment ) => {
        if(event.key === "Enter"){
            posts.map(post => {
                if(post.id === id){
                    post.comments.push({
                        comment: NewComment,
                        rating: 0,
                        id: generateUUID(),
                    })
                    return post;
                }
            })
            setInputValue("")
        }
    }

    return {
        addComments,
        changeInputValue,
        inputValue,
    }
}

export default usePostsListVM;