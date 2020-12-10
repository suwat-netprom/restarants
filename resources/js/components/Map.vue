<template>
        <GmapMap
            :center="restaurantsZone"
            :zoom="15"
            map-type-id="terrain"
            style="width: 100%; height:700px; will-change: transform; transform: translateZ(0);">
            <GmapMarker
                :key="index"
                v-for="(m, index) in restaurantsList"
                :position="m.geometry.location"
                :icon="icon"
                :clickable="true"
                :draggable="false"
                @click="center=m.geometry.location"/>
        </GmapMap>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
    name: "Map",
    components: {},
    props: {
        restaurantsList: {
            type: Array,
            required: true
        }
    },
    data () {
      return {
          icon:  {
              url:"../img/dishes.svg",
              size: { width: 100, height: 100, f: "px", b: "px" },
              scaledSize: { width: 50, height: 50, f: "px", b: "px" }
          },
          markers: '',
          mapCenter: '',
      }
    },
    computed: {
        ...mapGetters(['restaurantsZone']),
    }
}
</script>

<style scoped lang="scss">

</style>
