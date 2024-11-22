const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList
    }
    else {
        return [];
    }

}

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {

    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list', storedListStr)
    }
}



////
const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList
    }
    else {
        return [];
    }

}

const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();

    storedList.push(id);
    const storedListStr = JSON.stringify(storedList)
    localStorage.setItem('cart-list', storedListStr)

}

export { addToStoredWishList, addToStoredCartList, getStoredCartList, getStoredWishList }