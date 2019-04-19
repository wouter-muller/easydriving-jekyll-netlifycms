Vue.component('range-slider', {
    template: `
        <div>
            <div class="s-compare-costs__range-slider-wrapper">
                <div class="s-compare-costs__legend">0</div>
                <div class="s-compare-costs__range-slider">
                    <input
                        type="range"
                        class="c-range-input"
                        v-model.number="distance"
                        min="0"
                        :max="maximum"
                        @change="calculateCosts"
                    >
                </div>
                <div class="s-compare-costs__legend">{{ this.maximum }}</div>
            </div>
            <div class="s-compare-costs__distance">
                <p class="c-paragraph u-mb+">{{ this.description }}: <span><b>{{ this.distance }}</b> km</span></p>
            </div>
            <table class="c-table s-compare-costs__table">
                <thead>
                    <tr>
                        <td></td>
                        <td>VW Golf<br><span>(in eigen bezit)</span></td>
                        <td>Nissan Leaf<br><span>(via EasyDriving)</span></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Afschrijvingskosten</td>
                        <td>€ {{ this.afschrijvingskosten }}</td>
                        <td>€ 0</td>
                    </tr>
                    <tr>
                        <td>Verzekering</td>
                        <td>€ {{ this.verzekering }}</td>
                        <td>€ 0</td>
                    </tr>
                    <tr>
                        <td>Motorrijtuigenbelasting</td>
                        <td>€ {{ this.belasting }}</td>
                        <td>€ 0</td>
                    </tr>
                    <tr>
                        <td>Onderhoud/reparaties</td>
                        <td>€ {{ this.onderhoud }}</td>
                        <td>€ 0</td>
                    </tr>
                    <tr>
                        <td>Benzine</td>
                        <td>€ {{ this.benzine }}</td>
                        <td>€ 0</td>
                    </tr>
                    <tr>
                        <td>Lidmaatschap EasyDriving</td>
                        <td>-</td>
                        <td>€ 5</td>
                    </tr>
                    <tr>
                        <td>Huurkosten deelauto</td>
                        <td>-</td>
                        <td>€ {{ this.huurkosten }}</td>
                    </tr>
                </tbody>
                <thead class="s-compare-costs__table-totals">
                    <tr>
                        <td>TOTAAL</td>
                        <td>€ {{ this.totalOwn }}</td>
                        <td>€ {{ this.totalShare }}</td>
                    </tr>
                </thead>
            </table>
        </div>

    `,

    data() {
        return {
            distance: 5000,
            maximum: 20000,
            afschrijvingskosten: 3537,
            verzekering: 540,
            belasting: 600,
            onderhoud: 350,
            benzine: 0,
            huurkosten: 0,
            totalOwn: 0,
            totalShare: 0
        }
    },
    props: {
        description: {
            type: String
        },
        subscriptionCosts: {
            type: Number
        }
    },

    methods: {
        calculateCosts: function() {
            console.log('trigger');
            this.benzine = parseInt(this.distance / 16.5 * 1.7);
            this.huurkosten = parseInt(this.distance / 120 * 27.5);

            this.totalOwn = parseInt(this.afschrijvingskosten) + parseInt(this.benzine) + parseInt(this.belasting) + parseInt(this.verzekering) + parseInt(this.onderhoud);
            this.totalShare = parseInt(this.subscriptionCosts) + parseInt(this.huurkosten);
        }
    },

    created() {
        this.calculateCosts()
    }
})
