const main = {
    template: `
    <main class="content main">
        <div>
            <div class="banner">
                <img src="/static/images/banner.jpg" alt="">
            </div>
            
            <div class="article-box">
                <article v-for="track, index in tracks">
                    <router-link tag="li" v-bind:to="{ name: 'track', params: { trackID: index } }">
                        <img v-bind:src="'/static/images/' + track.img" alt="">
                        <h3>{{ track.title }}</h3>
                        <span>{{ track.artist }}</span>
                    </router-link>
                </article> 
            </div>
        </div>
    </main>
    `,
    // // Vuex
    // computed: {
    //     tracks() {
    //         return this.$store.state.tracks
    //     }
    // },

    computed: {
        tracks() {
            return this.$store.state.tracks
        }
    },
    mounted() {
        return this.$store.dispatch("fetchTracks")
    },

    // // Getter method
    // computed: {
    //     tracks() {
    //         return store.getters.allTracks
    //     },
    // }
}

    // Old version
    //     data() {
    //         return {
    //             tracks: []
    //         }
    //     },
    //     created: async function () {
    //         let response = await fetch('/tracks');
    //         if (response.status == 200){
    //             let result = await response.json();
    //             this.tracks = result;
    //         }
    //     }
    // }