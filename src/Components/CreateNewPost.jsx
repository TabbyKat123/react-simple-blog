import React from "react";
const CreateNewPost = () => {
    return (
        <>
        {/*short syntax for the react fragment tag */}
    <form>
        <h1>Create New Post</h1>
        <input type="text" 
           placeholder="title" 
            size="39"
            onChange={props.savePostTitleToState}
            required></input>
        <br/>
        <br/>
        <textarea 
            onChange={props.savePostContentToState}
            placeholder="contents" 
            rows="8" 
            cols="41" 
            required></textarea>
        <br/>
        <br/>
        <button>Save Post</button>
    </form>
        </>
    );
};

export default CreateNewPost;