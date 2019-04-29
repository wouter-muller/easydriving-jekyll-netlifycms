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
                        @input="calculateCosts"
                    >
                </div>
                <div class="s-compare-costs__legend">{{ this.maximum }}</div>
            </div>
            <div class="s-compare-costs__distance">
                <p class="c-paragraph u-mb+">{{ this.description }}: <span><b>{{ this.distance }}</b> km</span></p>
            </div>
            <table class="c-table s-compare-costs__table u-mb">
                <thead>
                    <tr>
                        <td class="u-hide@mobile"></td>
                        <td>{{ this.carOne }}<br><span>(in eigen bezit)</span></td>
                        <td>{{ this.carTwo }}<br><span>(via EasyDriving)</span></td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="u-hide@mobile">
                        <td>{{ this.afschrijvingskostenLabel }}</td>
                        <td>€ {{ this.afschrijvingskosten }}</td>
                        <td>€ 0</td>
                    </tr>
                    <tr class="u-hide@mobile">
                        <td>{{ this.verzekeringLabel }}</td>
                        <td>€ {{ this.verzekering }}</td>
                        <td>€ 0</td>
                    </tr>
                    <tr class="u-hide@mobile">
                        <td>{{ this.belastingLabel }}</td>
                        <td>€ {{ this.belasting }}</td>
                        <td>€ 0</td>
                    </tr>
                    <tr class="u-hide@mobile">
                        <td>{{ this.onderhoudLabel }}</td>
                        <td>€ {{ this.onderhoud }}</td>
                        <td>€ 0</td>
                    </tr>
                    <tr class="u-hide@mobile">
                        <td>{{ this.benzineLabel }}</td>
                        <td>€ {{ this.benzine }}</td>
                        <td>€ 0</td>
                    </tr>
                    <tr class="u-hide@mobile">
                        <td>{{ this.subscriptionLabel }}</td>
                        <td>-</td>
                        <td>€ {{ this.subscriptionCosts }}</td>
                    </tr>
                    <tr class="u-hide@mobile">
                        <td>{{ this.deelautoLabel }}</td>
                        <td>-</td>
                        <td>€ {{ this.huurkosten }}</td>
                    </tr>
                </tbody>
                <thead class="s-compare-costs__table-totals">
                    <tr>
                        <td class="u-hide@mobile">TOTAAL</td>
                        <td>€ {{ this.totalOwn }}</td>
                        <td>€ {{ this.totalShare }}</td>
                    </tr>
                </thead>
            </table>
        </div>

    `,

    data() {
        return {
            distance: 0,
            maximum: 0,
            afschrijvingskosten: 0,
            verzekering: 0,
            belasting: 0,
            onderhoud: 0,
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
        },
        distanceProp: {
            type: Number
        },
        maximumProp: {
            type: Number
        },
        afschrijvingskostenProp: {
            type: Number
        },
        verzekeringProp: {
            type: Number
        },
        belastingProp: {
            type: Number
        },
        onderhoudProp: {
            type: Number
        },
        benzineprijs: {
            type: Number
        },
        stroomkosten: {
            type: Number
        },
        carOne: {
            type: String
        },
        carTwo: {
            type: String
        },
        afschrijvingskostenLabel: {
            type: String
        },
        verzekeringLabel: {
            type: String
        },
        belastingLabel: {
            type: String
        },
        onderhoudLabel: {
            type: String
        },
        benzineLabel: {
            type: String
        },
        subscriptionLabel: {
            type: String
        },
        deelautoLabel: {
            type: String
        }
    },

    methods: {
        calculateCosts: function() {
            this.benzine = parseInt(this.distance / 16.5 * this.benzineprijs);
            this.huurkosten = parseInt(this.distance / 120 * 27.5 + (this.distance * this.stroomkosten));

            this.totalOwn = parseInt(this.afschrijvingskosten)
                            + parseInt(this.benzine)
                            + parseInt(this.belasting)
                            + parseInt(this.verzekering)
                            + parseInt(this.onderhoud);
            this.totalShare = parseInt(this.subscriptionCosts)
                              + parseInt(this.huurkosten);
        }
    },

    created() {
        this.distance = this.distanceProp;
        this.maximum = this.maximumProp;
        this.afschrijvingskosten = this.afschrijvingskostenProp;
        this.verzekering = this.verzekeringProp;
        this.belasting = this.belastingProp;
        this.onderhoud = this.onderhoudProp;
        this.calculateCosts();
    }
})
