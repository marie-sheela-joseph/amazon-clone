
const initialState = {
    products: [{ id: 1, title: 'Apple iPhone 14 (128 GB) - Blue', price: 794.00, rating: 4, image: './assets/p_1.jpg' },
    { id: 2, title: 'Panasonic LUMIX DC-S5 II Full Frame Mirrorless Camera with 20-60mm F3.5-5.6 Lens, 4K 60P and 6k 30P Unlimited Video Recording, Flip Screen, Wi-Fi, Active IS, with extra DMW-BLK22 Battery, Black', price: 2349.00, rating: 5, image: './assets/p_2.jpg' },
    { id: 3, title: 'TCL 55CF630K 139cm (55 inch) QLED Fire TV (4K Ultra HD, HDR 10+, Dolby Vision & Atmos, Smart TV, Game Master, 60Hz Motion clarity, Press & Ask Alexa), Black', price: 399, rating: 4, image: './assets/p_3.jpg' },
    { id: 4, title: 'Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours Of Listening Time - Rose Gold (Latest Model)', price: 139.99, rating: 5, image: './assets/p_4.jpg' },
    { id: 5, title: 'Blivener Soft Touch Area Rug Bedroom Anti- Skid Yoga Carpet Shaggy Rugs Fluffy Motley Tie - dye Carpets Light Grey 160 x 200 cm', price: 73.89, rating: 3, image: './assets/p_5.jpg' },
    { id: 6, title: 'YRPRSODF TV Game Console Built in 883 Games, Handheld Retro Video Game Machine with 2.4G Wireless Gamepad Somatosensory Control, HDMI USB Plug and Play, Home Interactive& Puzzle Games,Grey', price: 59.99, rating: 4, image: './assets/p_6.jpg' }],
    cart: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_PRODUCT': return { ...state, cart: [...state.cart, action.id] }
        case 'REMOVE_FROM_CART': return { ...state, cart: state.cart.filter((p) => p !== action.id) }
        default: return state;
    }
}

export { initialState, reducer }
