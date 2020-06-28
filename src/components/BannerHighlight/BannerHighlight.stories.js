import BannerHighlight from "./BannerHighlight"
import API from "@/static/db.json"

export default {
    title: "@uptownhr / BannerHighlight"
}

export const BlockWorkWithTitle = () => ({
    components: { BannerHighlight },
    data() {
        return {
            api: API
        }
    },
    template: `<banner-highlight text="Sample title" prompt="Discover" :image="api.image" to="/" />`
})
