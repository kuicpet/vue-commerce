import router from "../../router";
import Axios from "axios";

export function login({ commit }) {
    // getting user from randomuser.me and storing in state
    let url = "https://randomuser.me/apa/";
    Axios.get(url).then(function (response) {
        let userData = {
            displayName: response.data.results[0].name.first,
            email: response.data.results[0].email,
            photoUrl: response.data.results[0].picture.medium,
            uid: response.data.results[0].login.uuid
        }
        commit("setUserData", userData)
        router.push("/")
    })
    .catch(function (error) {
        console.log(error)
    });
}