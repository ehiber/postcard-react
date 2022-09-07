import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import PostcardBody from "./PostcardBody";

const Postcard = ()=>{
    return(
        <div className="postcard">
                <Header/>
                
                <PostcardBody/>

                <Footer/>
    </div>
    )
}

export default Postcard