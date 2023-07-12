import {Component} from "react";
import POSTS from "./Data";
import AddedList from "./Components/AddedList";
import "./index.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: POSTS,
            editedPosts: POSTS,
        };
    }

    removePost = (id) => {
        const editedPosts = this.state.editedPosts.filter(post => id !== post.id)
        this.setState({
            editedPosts
        })
    }

    getRestoredPost = (id) => {
        let restoredPost = {};
        for (const post of this.state.posts) {
            if (id === post.id) {
                restoredPost = {...post}
            }
        }

        this.setState({
            editedPosts: [...this.state.editedPosts, restoredPost]
        })
    }

    render() {
        const {editedPosts} = this.state;
        console.log(editedPosts)
        return (
            <div className={'listsContainer'}>
                <AddedList removePost={this.removePost} getRestoredPost={this.getRestoredPost} posts={editedPosts}/>
                <AddedList removePost={this.removePost} getRestoredPost={this.getRestoredPost} posts={editedPosts}/>
            </div>
        )
    }
}

export default App;

