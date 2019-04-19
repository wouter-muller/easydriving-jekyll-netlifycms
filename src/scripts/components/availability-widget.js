Vue.component('availability-widget', {
    template: `
        <div>
            <div class="s-availability" data-active-postal-codes="site.data.settings.active_postal_codes">
                <div class="l-wrapper u-align-center">
                <h2 class="c-heading --large --green u-mb+">{{ this.heading }}</h2>
                    <div v-if="result === 'unknown'">
                        <label class="c-label u-mb-">{{ this.formQuestion }}</label>
                        <input type="text" class="s-availability__postal-code-input c-input" v-model="postalCode">
                        <button
                            class="s-availability__submit c-button --cta"
                            @click="checkPostalCode"
                        >{{ this.formSubmitText }}</button>
                    </div>
                    <div v-if="result === 'negative'">
                        <p class="c-paragraph u-mb">{{ this.negativeResultText }}</p>

                        <form
                            action="/"
                            name="availability-check-signup"
                            id="availability-check-signup"
                            data-netlify="true"
                            method="post"
                        >
                            <label class="c-label u-mb-">{{ this.emailAddress }}</label>
                            <input type="email" class="s-availability__email-input c-input" required>
                            <label class="c-label u-mb-">{{ this.formQuestion }}</label>
                            <input type="text" class="s-availability__postal-code-input c-input" v-model="postalCode" maxlength="7">
                            <button type="submit" class="c-button --cta">{{ this.negativeFormButtonText }}</button>
                        </form>

                    </div>
                    <div v-if="result === 'positive'">
                        <p class="c-paragraph u-mb">{{ this.positiveResultText }}</p>
                        <a href="#" class="c-button --cta">{{ this.positiveResultButtonText }}</a>
                    </div>
                </div>
            </div>
        </div>
    `,

    data() {
        return {
            postalCode: "9613 AZ",
            result: "unknown"
        }
    },
    props: {
        activePostalCodes: {
            type: String
        },
        heading: {
            type: String
        },
        formQuestion: {
            type: String
        },
        formSubmitText: {
            type: String
        },
        negativeResultText: {
            type: String
        },
        emailAddress: {
            type: String
        },
        negativeFormButtonText: {
            type: String
        },
        positiveResultText: {
            type: String
        },
        positiveResultButtonText: {
            type: String
        }
    },

    methods: {
        checkPostalCode: function() {
            var postalCodeDigits = this.postalCode.substring(0,4);

            if (this.activePostalCodes.indexOf(postalCodeDigits) === -1) {
                this.result = "negative";
            } else {
                this.result = "positive";
            }
        }
    }
})
