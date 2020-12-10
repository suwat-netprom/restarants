import axios from 'axios'

const state = {
    restaurants: [],
    location: {
        zone: '',
        lat: '',
        lng: ''
    }
};

const getters = {
    restaurantsList: state => state.restaurants,
    restaurantsZone: state => state.location
};

const actions = {
    async fetchRestaurants({commit}, {location}){
        const response = await axios.post("http://127.0.0.1:8000/api/restaurant/lists", {
            location: location
        });
        commit("setRestaurants", response.data)
        commit("setZone", response.data.results[0])
        return new Promise( (res,rej) => {
             res({status: 'ok'})
        });
    },
};

const mutations = {
    setRestaurants: (state, restaurants) => {
        state.restaurants = restaurants.results
    },
    setZone: (state, zone) => {
        if (zone){
            state.location.zone = zone.plus_code.compound_code
            state.location.lat = zone.geometry.location.lat
            state.location.lng = zone.geometry.location.lng
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
