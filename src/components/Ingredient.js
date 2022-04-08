import React from "react";
import "../style/ingredient.css";


const Ingredient = () => {
    return(
        <>
    <div className = "Main-container">
    <div className="Main-ingredient">

        <div className="Ingredient-title">
            Ingredient </div>
        <div className = "Ingredient-crust">
            <div className = "Title-Crust">
            Graham Cracker Crust
            </div>
            <div className ="SubIngredient">
           <div className = "SubCrust1">
            <div className = "Box"></div>
            <div className = "SubIngre">
           1 and 1/2 cups (150g) graham cracker crumbs (about 10 full sheet graham crackers)
           </div></div>

           <div className = "SubCrust1">
           <div className = "Box"></div>
           <div className = "SubIngre">
           5 Tablespoons (70g) unsalted butter, melted
           </div></div>

           <div className = "SubCrust1">
           <div className = "Box"></div>
           <div className = "SubIngre">
            1/4 cup (50g) granulated sugar
           </div></div>
        </div>
        </div>

        <div className = "Ingredient-crust">
            <div className ="Cake">
            Cheesecake
            </div>
            <div className ="SubIngredient">
           <div className = "SubCrust1">
           <div className = "Box"></div>
           <div className = "SubIngre">
           four 8-ounce blocks (904g) full-fat cream cheese, softened to room temperature
           </div></div>

           <div className = "SubCrust1">
           <div className = "Box"></div>
           <div className = "SubIngre">
           1 cup (200g) granulated sugar
           </div></div>

           <div className = "SubCrust1">
           <div className = "Box"></div>
           <div className = "SubIngre">
           1 cup (240g) full-fat sour cream, at room temperature
           </div></div>

           <div className = "SubCrust1">
           <div className = "Box"></div>
           <div className = "SubIngre">
           1 teaspoon pure vanilla extract
           </div></div>

           <div className = "SubCrust1">
           <div className = "Box"></div>
           <div className = "SubIngre">
           2 teaspoons fresh lemon juice (optional, but recommended)
           </div></div>

           <div className = "SubCrust1">
           <div className = "Box"></div>
           <div className = "SubIngre">
           3 large eggs, at room temperature
           </div></div>

           <div className = "SubCrust1">
           <div className = "Box"></div>
           <div className = "SubIngre">
           topping suggestions: salted caramel, lemon curd, strawberry topping, 
           chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, 
           or raspberry sauce(recipe in notes)
           </div>
        </div>
        </div>
        </div>
        

    </div>
    <div className = "More">
        <div className = "contentOneYield">
            <div className = "Container-more">
                Yields
            </div>
            <div className = "DescriptionYields">
                12 Servings
            </div>
        </div>

        <div className = "contentOne">
            <div className = "Container-more">
                PREP TIME
            </div>
            <div className = "Description">
                45 Minutes
            </div>
        </div>

        <div className = "contentOne">
            <div className = "Container-more">
                COOK TIME
            </div>
            <div className = "Description">
                1 Hour
            </div>
        </div>

        <div className = "contentOne">
            <div className = "Container-more">
                TOTAL TIME
            </div>
            <div className = "Description">
                7.75 Hours
            </div>
        </div>


    </div>
    </div>
        </>

    );
};
export default Ingredient;
