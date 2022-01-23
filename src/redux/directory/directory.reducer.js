const INITIAL_STATE = {
    sections: [
        {
            title: 'accessories',
            imageUrl: 'https://static.zumiez.com/skin/frontend/delorum/default/images/back-to-school-backpacks-cookies-july21-444x500.jpg',
            id: 1,
            linkUrl: 'shop/accessories'
        },
        {
            title: 'outerwear',
            imageUrl: 'https://cdn.shopify.com/s/files/1/1147/7882/articles/London-Streetwear-2019_75c5deb2-57f6-42b0-802c-a03647568bd8_1200x630.jpg?v=1563405513',
            id: 2,
            linkUrl: 'shop/outerwear'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://www.highsnobiety.com/static-assets/thumbor/n_3CL-cxlepbKGdED84mnLu1udg=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2018/01/16122913/Sneaker-Main.jpg',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'pants',
            imageUrl: 'https://fashionista.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTY1Mzc5MzE4NTYwNTk3NDA5/aleali-may-streetwear-1.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/pants'
        },
        {
            title: 'shirts',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/shirts'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;