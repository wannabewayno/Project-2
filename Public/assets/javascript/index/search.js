

const search = query => {
    console.log(query);
    //! Will have to trim() and lowerCase() all user input strings
    console.log(`running search function`);
    // starts loading spinner
    const interval = spinner('#search-button');

   
    // // TODO: do an ajax request with query
    // $.get('endpoint',{
        
    // })
    /* // TODO:
    .then( results => {
        ! might need to JSON.parse some columns or not we'll see
        * here we need to make two copies of the information
        * 1.) an array of objects with keys imageURL, title and recipe id
        * 2.) a nesteed object that has contains the full recipe (all information) with recipe id as the key
        recipeCardInfo = {};
        recipeInfo     = {};

        * assume results come back in an array for through all results and re-structure the information
        results.forEach(recipe => {
            recipeCardInfo.push(
                {
                    imageURL: recipe.imageURL,
                    title: recipe.name,
                    recipeID: recipe.id,
                }
            )

            recipeInfo[recipe.id] = recipe;
        })
        
        * now we can push our recipeInfo into local storage, so when we pull up the modal
        * we don't have to do another query and have the user wait a few/fraction-of seconds
        localstorage.setItem(JSON.stringify(recipeInfo));

        * we now pass the recipeCardInfo to render the recipe cards for the user to look at
        * when they click on any of these cards, it will pull that recipe from local storage
        renderResults(recipeCardInfo);

        clear the spinner when we're done
        clearSpinner(interval);
    })
    */
    
    /*
    TODO: write the renderResults function that populates the search-results with recipeCardInfo
    * this will just be template literal js file sorry.
    const renderResults = recipeCardInfo => {
        recipeCardInfo.forEach(recipeCardObject => {
            const recipeThumbnail = createThumbnail(recipeCardObject) // somehow make recipe card in this function, either a template or template literals
            $('#search-results').append(recipeThumbnail)
        });
    }
    */
}