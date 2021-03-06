const alltracks = {
    template: `
    <div>
        <h1>All tracks</h1>
        <select v-model="sortBy">
            <option v-for="sortOption in sortOptions" 
                :label="sortOption.label" 
                :value="sortOption.value">
            </option>
        </select>
        <input class="searchbar" type="text" v-model="search" placeholder="Search"/>
    </div>
    <div class="framedbox">
        <div class="article-box">
            <tracklist v-for="track in filteredTracks"
                :key="track.trackid"
                :track="track">
            </tracklist>
        </div>
    </div>
    `,
    data() {
        return {
            sortOptions: [
                { label: 'Custom order', value: 'none' },
                { label: 'Title', value: 'title' },
                { label: 'Artist', value: 'artist' },
                { label: 'Genre', value: 'genre' }
            ],
            search: '',
            sortBy: 'none'
        }
    },
    computed: {
        // create a new filtered array
        filteredTracks() {
            const temp = this.$store.getters.getTracks.filter((track) => {
                return track.title.toLowerCase().includes(this.search.toLowerCase())
            })
            
            if (this.sortBy == 'title') {
                return temp.sort((a, b) => {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                        return -1
                    }
                    if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1
                    }
                    return 0
                })
            } else if (this.sortBy == 'artist') {
                return temp.sort((a, b) => {
                    if (a.artist.toLowerCase() < b.artist.toLowerCase()) {
                        return -1
                    }
                    if (a.artist.toLowerCase() > b.artist.toLowerCase()) {
                        return 1
                    }
                    return 0
                })
            } else if (this.sortBy == 'genre') {
                return temp.sort((a, b) => {
                    if (a.genre.toLowerCase() < b.genre.toLowerCase()) {
                        return -1
                    }
                    if (a.genre.toLowerCase() > b.genre.toLowerCase()) {
                        return 1
                    }
                    return 0
                })
            } else {
                return temp
            }
        } 
    },
    mounted() {
        // calls the 'fetchTracks' action in store
        return this.$store.dispatch("fetchTracks")
    }
}