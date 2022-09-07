import React from "react";
import PostcardBodyLeft from "./PostcardBodyLeft";
import PostcardBodyRight from "./PostcardBodyRight";

const PostcardBody = ()=>{
    return (
        <div className="postcard-body">
            <PostcardBodyLeft/>   
            <PostcardBodyRight/>
        </div>
    )
}

export default PostcardBody