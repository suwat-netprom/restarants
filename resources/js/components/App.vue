<template>
    <div id="app">

        <div class="container-fluid">
            <div class="row content">
                <br>
                <navbar class="col-sm-12 col-md-3 sidenav" :isfetch="progress"/>

                <div class="col-sm-12 col-md-9">
                    <h3><small>MAP</small></h3>
                    <hr>
                    <google-map :restaurants-list="restaurantsList"/>
                </div>
            </div>
        </div>

        <app-footer/>
    </div>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'
import Map from "./Map"
import {mapGetters, mapActions} from "vuex";
export default {
    name: 'App',
    components: {
        'navbar': Navbar,
        'app-footer': Footer,
        'google-map': Map
    },
    computed: {
        ...mapGetters(['restaurantsList']),
        progress() {
            return  !this.restaurantsList.length>0
        }
    }
}
</script>

<style lang="scss">
.row.content {
    height: 100%
}
.sidenav {
    background-color: #f1f1f1;
    height: 100%;
}
footer {
    background-color: #555;
    color: white;
    padding: 15px;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    text-align: center;
}
@media screen and (max-width: 767px) {
    .sidenav {
        height: auto;
        padding: 15px;
    }
    .row.content {
        height: auto;
    }
}
</style>
