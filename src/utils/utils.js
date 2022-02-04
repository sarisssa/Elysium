
export const sortProducts = (allCategories, collections, eventValue) => {

    let filteredProducts = [];
    for (let key of allCategories) {
        let curCollection = collections[key].items;
        let matchedItem = match(eventValue, curCollection);
        matchedItem.map(product => product.category = key); //Add collection title to each item
        filteredProducts.push(...matchedItem)
    }
    return filteredProducts;
}

const match = (s, items) => {
    let values = items;
    return values.filter(v => v.name.toLowerCase().indexOf(s) !== -1);
};


