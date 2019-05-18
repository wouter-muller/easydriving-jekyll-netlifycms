Vue.component('availability-widget', {
    template: `
        <div>
            <div class="s-availability">
                <div class="l-wrapper u-align-center">
                <h2 class="c-heading --large --green u-mb+">{{ this.heading }}</h2>
                    <div v-if="result === 'unknown'" class="u-mb+">
                        <label class="c-label u-mb-">{{ this.formQuestion }}</label>
                        <input type="text" class="s-availability__postal-code-input c-input" v-model="postalCode">
                        <button
                            class="s-availability__submit c-button --cta"
                            @click="checkPostalCode"
                        >{{ this.formSubmitText }}</button>
                    </div>
                    <div v-if="result === 'negative'" class="u-mb+">
                        <p class="c-paragraph u-mb">{{ this.negativeResultText }}</p>

                        <form
                            action="/"
                            name="availability-check-signup"
                            id="availability-check-signup"
                            data-netlify="true"
                            method="post"
                        >
                            <input type="hidden" name="form-name" value="availability-check-signup" />
                            <label class="c-label u-mb-">{{ this.emailAddress }}</label>
                            <input type="email" name="email-address" class="s-availability__email-input c-input" required>
                            <input type="hidden" name="postal-code" class="s-availability__postal-code-input c-input" v-model="postalCode" maxlength="7">
                            <button type="submit" class="c-button --cta">{{ this.negativeFormButtonText }}</button>
                        </form>

                    </div>
                    <div v-if="result === 'positive'" class="u-mb+">
                        <p class="c-paragraph u-mb">{{ this.positiveResultText }}</p>
                        <button class="c-button --cta" @click="$root.signUpModalVisible = true">{{ this.positiveResultButtonText }}</button>
                    </div>

                    <a href="/kaart" class="c-button --border">Kijk op een kaart waar alle deelauto's staan</a>

                </div>
            </div>
        </div>
    `,

    data() {
        return {
            postalCode: "",
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
