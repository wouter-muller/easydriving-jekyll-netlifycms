Vue.component('ride-tool', {
    template: `
        <form>
            <div class="s-ride-tool__cars-grid">
                <slot></slot>
            </div>

            <div class="s-ride-tool__specs-grid">
                <label>Aantal uren</label>
                <input
                    type="range"
                    v-model.number="hours"
                    min="1"
                    max="10"
                    @input="calculateCosts"
                >
                <div>{{ this.hours }} uur</div>

                <label>Aantal km</label>
                <input
                    type="range"
                    v-model.number="distance"
                    min="0"
                    max="200"
                    @input="calculateCosts"
                >
                <div>{{ this.distance }} km</div>

                <label>Ritprijs</label>
                <p class="s-ride-tool__price">
                    € {{ this.price }}
                </p>
            </div>
        </form>
    `,

    data() {
        return {
            price: 0,
            hours: 1,
            distance: 10,
            pricePerKm: 0,
            pricePerHour: 0
        }
    },
    props: {
        pricePerHourProp: {
            type: Number
        },
        pricePerKmProp: {
            type: Number
        }
    },
    methods: {
        calculateCosts: function() {
            this.pricePerHour = this.pricePerHourProp;
            this.pricePerKm = this.pricePerKmProp;
            this.price = (this.hours * this.pricePerHour) + (this.distance * this.pricePerKm)
            this.price = this.price.toFixed(2).replace(".", ",")
        }
    },

    created() {
        this.calculateCosts();
    }
})
