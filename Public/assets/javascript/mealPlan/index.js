$(document).ready(function(){
  // Initializers
  // ==============================================================================

  // upon load, we find all recipeIDs and do a get request for all of their recipe information
  loadRecipes()

  // event listeners
  // ==============================================================================

  // when you click on a thumbnail opens modal
  $('.container').on('click','.recipe-card',async function(event){
      const recipeID = $(this).data('id');
      const allRecipes = await JSON.parse(localStorage.getItem('searchResults')); //search results are stored in localstorage for quick access
      const thisRecipe = allRecipes[recipeID]; //This is now the JSON of our recipe.
      //open the modal and pass it the recipe information
      openModal(thisRecipe);
    });

  // when you click on create recipe, comes up with a modal
  $('#create-recipe').on('click',function(){
    createRecipeForm('#modal-goes-here');

  });
  
  // add an event listener to remove modals
  removeElement('.close-button','.modal-container',['#modal-goes-here'],noScroll);



});


//TODO: function changes day titles based on current time

//TODO: need db to store meal planning information:

//TODO: if recipe is not set, add a placeholder and a way to search from favourites

//TODO: INDEX.HTML need a function to pick up pagination of elements and only display if there's more to show
//TODO: INDEX.HTML only show button if results div has results in it