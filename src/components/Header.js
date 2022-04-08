import React from "react";
import "../style/header.css";


const Header = () => {
    return(
        <>
    <div className = "Main-header">
        
           <div className = "MTitle">
               Classic Cheescake Recipe
           </div>
           <div className = "MSubTitle">
           <div className = "SubTitle">
           Look no further for a creamy and ultra smooth classic cheesecake recipe! 
           Paired with a buttery graham cracker crust, no one can deny its simple decadence. 
           For the best results, bake in a water bath.
           </div></div>

        <div className = "HImage">
            < img className = "HImage" src={require('../images/cake.png')} />
        </div>
             
    
    </div>
        </>

    );
};
export default Header;
