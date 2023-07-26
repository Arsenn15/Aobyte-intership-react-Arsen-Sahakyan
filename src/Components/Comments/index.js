import React from 'react';

import useCommentVM from "../../viewModel/useCommentVM";

import "./index.css"


const Comments = ({comment}) => {

    const {changeRating} = useCommentVM();

    return (
        <div>
            <span className={"commentTitle"}>{comment.comment}</span>
            <div className={"labelContainer"}>
                <label htmlFor={"1"}
                        className={"rateInput"}
                >1
                    <input type="radio"
                           className={"inputRate"}
                           id={"1"}
                           value={1}
                           name={comment.id}
                           onChange={(e) => changeRating(comment.id, e.target.value)}
                    />
                </label>
                <label htmlFor={"2"}
                        className={"rateInput"}
                >2
                    <input type="radio"
                           className={"inputRate"}
                           id={"2"}
                           value={2}
                           name={comment.id}
                           onChange={(e) => changeRating(comment.id, e.target.value)}
                    />
                </label>
                <label htmlFor={"3"}
                       className={"rateInput"}
                >3
                    <input type="radio"
                           className={"inputRate"}
                           id={"3"}
                           value={3}
                           name={comment.id}
                           onChange={(e) => changeRating(comment.id, e.target.value)}
                    />
                </label>
                <label htmlFor={"4"}
                       className={"rateInput"}
                >4
                    <input type="radio"
                           id={"4"}
                           className={"inputRate"}
                           name={comment.id}
                           value={4}
                           onChange={(e) => changeRating(comment.id, e.target.value)}
                    />
                </label>
                <label htmlFor={"5"}
                       className={"rateInput"}
                >5
                    <input type="radio"
                           id={"5"}
                           className={"inputRate"}
                           value={5}
                           name={comment.id}
                           onChange={(e) => changeRating(comment.id, e.target.value)}
                    />
                </label>
            </div>
        </div>
    );
};

export default Comments;