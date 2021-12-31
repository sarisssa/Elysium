import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const COLLECTION_ID_MAP = {
    accessories: 1,
    sneakers: 2,
    outerwear: 3,
    womens: 4,
    mens: 5
};

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
);