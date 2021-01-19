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
    cart.push(payload)
    commit("setCart", cart)
}

// Remove from cart
export function removeCart({ commit, getters }, id) {
    let cart = [];
    if(id) {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (element.id !== id) {
                cart.push(element)
            }
        }
    }
    commit("setCart", cart)
}

