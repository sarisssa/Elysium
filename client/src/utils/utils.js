
export const sortProducts = (allCategories, collections, eventValue) => {

    let filteredProducts = [];

    for (let key of allCategories) { //Iterate through all shop categories
        let curCollection = collections[key].items;
        let matchedItem = match(eventValue, curCollection);
        matchedItem.map(product => product.category = key); //Add collection title to each item
        filteredProducts.push(...matchedItem)
    }
    return filteredProducts;
}

//Assess if item name in curCollection matches user input
const match = (eventValue, items) => {
    let collectionItems = items;
    return collectionItems.filter(item => item.name.toLowerCase().indexOf(eventValue) !== -1);
};


