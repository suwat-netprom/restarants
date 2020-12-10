<template>
    <div class="col-sm-3 sidenav">
        <h3>Search restaurants near you</h3>
        <div class="input-group">
            <input v-model="location.zone" v-on:keyup.enter="findRestaurant" type="text" class="form-control" style="font-size: medium" :placeholder="location.zone">
            <span class="input-group-btn">
                  <button @click="findRestaurant" class="btn btn-default" type="button">
                    <span class="glyphicon glyphicon-search"></span>
                  </button>
            </span>
        </div>
        <hr>
        <div v-if="restaurantsList.length > 0" class="overflow-auto" style="height: 700px; overflow-y:scroll; position:relative;">
            <div v-for="(item, index) in restaurantsList" class="media">
                <div class="media-body">
                    <h3 class="media-heading">{{item.name}}</h3>
                    <span style="font-size: medium">{{item.formatted_address}}</span>
                </div>
            </div>
        </div>
        <b-overlay :show="progress" no-wrap/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
    name: 'Navbar',
    props: {
        isfetch: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            progress: true,
            drawer: true,
            location: {
                zone: 'Bang sue',
                lat: '13.804',
                lng: '100.537'
            },
            restaurantsLists: ''
        }
    },
    computed: {
        ...mapGetters(["restaurantsList"]),
    },
    methods: {
        ...mapActions(['fetchRestaurants']),
        findRestaurant () {
            this.progress = true
            this.fetchRestaurants({location: this.location})
                .then(()=> this.progress = false)
                .catch((err)=> {
                    this.progress = false
                    console.log(err)
                })
        }
    },
    created() {
        this.fetchRestaurants({location: this.location})
            .then(()=>this.progress = false)
            .catch((err)=> {
                this.progress = false
                console.log(err)
            })
    }
}
</script>
