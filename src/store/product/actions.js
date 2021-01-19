import axios from "axios";

//Get product list
export function getProducts({ commit }) {
    // dummy api used
    let url = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
    axios.get(url).then((response) => {
        if(response.status === 200) {
            commit("setProducts", response.data);
        } 
    }).catch(error => {
        console.log(error);
    });
}

//Get product details
export function productdetails({ commit }, id) {
    let url = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
    axios.get(url, { params: { id: id } }).then(( response ) => {
        if(response.status === 200) {
            commit("setProduct", response.data[0]);
        }
    }).catch(error => {
        console.log(error);
    });
}

// Add to cart
export function addCart({ commit, getters }, payload) {
    let cart = getters.cart
    let data = payload.product
    data["quantity"] = payload.quantity
    cart.push(data)
    commit("setCart", cart)
}

// Remove from cart
export function removeCart({ commit, getters }, id) {
    let cart = [];
    if(id) {
        for (let i = 0; i < getters.length; i++) {
            const element = getters.cart[i];
            if (element.id !== id) {
                cart.push(element)
            }
        }
    }
    commit("setCart", cart)
}

