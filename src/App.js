import AddedList from "./Components/AddedList";
import useAppVM from "./viewModel/useAppVM.js";
import PostsList from "./Components/PostsList";
import Search from "./Components/Search";
import Pagination from "./Components/Pagination";

import "./index.css"

const App = () => {

    const {
        removePost,
        getRestoredPost,
        editedPosts
    } = useAppVM();

    return (
        <div className={'listsContainer'}>
            <div className={"container"}>
                <Pagination/>
                <Search/>
            </div>
            <div className={"container"}>
                <AddedList
                    removePost={removePost}
                    getRestoredPost={getRestoredPost}
                    posts={editedPosts}
                />
                <AddedList
                    removePost={removePost}
                    getRestoredPost={getRestoredPost}
                    posts={editedPosts}/>
            </div>

        </div>
    );
};

export default App;