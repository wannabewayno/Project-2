module.exports = function(req) {
    let conditions = [];
    let Sequelize = require("sequelize");
    let Op = Sequelize.Op;
        
    // ingredients
    if (req.ingredients != null) {
        let ingredients = [];
        for (let i = 0; i < req.ingredients.length; i++) {
            ingredients.push({
                ingredients: { [Op.substring]: req.ingredients[i] }
            })
        }
        conditions.push({
            [Op.or]: ingredients
        })
    }

    // unwanted ingredients
    if (req.excludeIngredients != null) {
        for (let i = 0; i < req.excludeIngredients.length; i++) {
            conditions.push({
                    // need to use this method due to the way sequelize handles JSON requests 
                    ingredients: Sequelize.where(Sequelize.fn('', Sequelize.col('ingredients')), ' NOT LIKE', '%' + req.excludeIngredients[i] + '%')
            })
        }
    }

    // tags
    if (req.tags != null) {
        for (let i = 0; i < req.tags.length; i++) {
            conditions.push({
                tags: { [Op.substring]: req.tags[i] }
            })
        }
    }

    // author
    if (req.author != null) {
        conditions.push({
            name: req.author
        })
    }

    // cuisine
    if (req.cuisines != null) {
        for (let i = 0; i < req.cuisines.length; i++) {
            conditions.push({
                cuisine: { [Op.substring]: req.cuisines[i] }
            })
        }
    }

    // diet
    if (req.diets != null) {
        for (let i = 0; i < req.diets.length; i++) {
            conditions.push({
                diets: { [Op.substring]: req.diets[i] }
            })
        }
    }

    // name
    if (req.name != null) {
        conditions.push({
            name: req.name
        })
    }

    return conditions;
};
