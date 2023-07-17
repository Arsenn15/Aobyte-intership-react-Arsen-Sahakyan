import React, {Component} from "react";
import "./index.css"

class AddedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addedPosts: [],
        };
    }

    addPost = () => {
        let highestRatePost = {};
        let rate = 0;
        let highestPostId = null;
        for (const post of this.props.posts) {
            let totalRate = 0;
            const comments = [...post.comments]

            for (const comment of comments) {
                totalRate += comment.rating
            }

            const averageRate = totalRate / post.comments.length;

            if (averageRate > rate) {
                highestRatePost = {...post};
                rate = averageRate;
                highestPostId = post.id;
            }
        }

        if (!highestRatePost.id) {
            return;
        }

        this.setState({
            addedPosts: [...this.state.addedPosts, {...highestRatePost, averageRate: rate}]
        })

        this.props.removePost(highestPostId);
    }

    restorePost = (id) => {
        this.props.getRestoredPost(id);
        this.setState({
            addedPosts: [...this.state.addedPosts.filter(post => id !== post.id)]
        })
    }

    sortPosts = () => {
        const tempPosts =  this.state.addedPosts;
        let sortedPosts = [];
        if (tempPosts.length > 1) {
            if (tempPosts[0].averageRate > tempPosts[tempPosts.length-1].averageRate) {
                sortedPosts = [...this.state.addedPosts].sort((postA, postB) => {
                    return postA.averageRate - postB.averageRate;
                });
            } else {
                sortedPosts = [...this.state.addedPosts].sort((postA, postB) => {
                    return postB.averageRate - postA.averageRate;
                });
            }
        } else {
            return;
        }

        this.setState({
            addedPosts: sortedPosts
        })
    }

    render() {
        const {addedPosts} = this.state

        return (
            <div className={"listContainer"}>
                <button className={'addBtn'} onClick={this.addPost}>+</button>
                <div className={'addedPosts'}>
                    {
                        addedPosts.map(post => (
                                <div key={post.id} className={"postContainer"}>
                                    <img className={"postPhoto"} src={post.photoSrc} alt=""/>
                                    <div className={"postNameBtn"}>
                                        <span>{post.title}, {+post.averageRate.toFixed(2)}</span>
                                        <button
                                            className={"removeBtn"}
                                            onClick={() => this.restorePost(post.id)}
                                        >-</button>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
                <button
                    className={'sortBtn'}
                    onClick={this.sortPosts}
                >Sort</button>
            </div>
        )
    }
}

export default AddedList;