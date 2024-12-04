import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

mapboxgl.accessToken = import.meta.env.PUBLIC_MAPBOX_TOKEN

export const MapBoxService = {
    initMap(container) {
        const map = new mapboxgl.Map({
            container: container,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [2.3522, 48.8566],
            zoom: 12,
        })
    },
}
