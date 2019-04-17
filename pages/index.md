---
layout: default
title: home
title_tag: EasyDriving
permalink: /
active_postal_codes: 9355, 9613
hero_heading: Samen slim rijden
hero_subheading: Elektrische deelauto’s voor jou en je buurt!
hero_button_text: Meld je nu aan
our_cars_heading: Onze auto's
our_cars_car1_image: /uploads/nissan-leaf.png
our_cars_car1_title: Nissan Leaf
our_cars_car1_description: '€ 2,75 per uur of € 27,50 per dag'
our_cars_car2_image: /uploads/hyundai-kona.png
our_cars_car2_title: Hyundai Kona
our_cars_car2_description: '€ 4,75 per uur of € 47,50 per dag'
our_cars_car3_image: /uploads/tesla-model-s.png
our_cars_car3_title: Tesla Model S
our_cars_car3_description: 'vanaf € 15,00 per uur of € 150,00 per dag'
our_cars_car4_image: /uploads/tesla-model-x.png
our_cars_car4_title: Tesla Model X
our_cars_car4_description: 'vanaf € 17,50 per uur of € 175,00 per dag'
our_cars_button_text: Meer informatie
usps_1_image: /uploads/usp1.svg
usps_1_heading: Beter voor het milieu
usps_1_text: >-
  Elektrische auto’s zijn energie-neutraal bij het rijden. Bovendien werkt
  EasyDriving samen met lokale energie-collectieven waardoor de opgewekte
  energie 100% groen is.
usps_2_image: /uploads/usp2.svg
usps_2_heading: Goedkoper
usps_2_text: >-
  Voor huishoudens die hun (tweede) auto niet vaak gebruiken is EasyDriving veel
  goedkoper dan het hebben van een eigen auto. Zie onze <a
  href="#kosten-vergelijker">kostenvergelijker</a>.
usps_button_text: Lees verder
how_it_works__heading: Hoe werkt het?
how_it_works__title1: Meld je aan!
how_it_works__text1: >-
  Meld je aan en je ontvangt binnen één werkdag een uitnodiging voor uw
  persoonlijke account van OnzeAuto. Daarna kan de app gedownload en meteen in
  gebruik genomen worden.
how_it_works__title2: Reserveer een auto
how_it_works__text2: >-
  Via onze mobiele app kun je vantevoren bij jou in de buurt een auto reserveren. Reserveer per uur
  of per dag. Alles kan.
how_it_works__title3: Open de auto met de app
how_it_works__text3: >-
  Met de app kunnen gebruikers via een smartphone de auto openen.
  Sleuteloverdracht is dus niet nodig. De verrekening volgt achteraf. Gemak
  staat voorop, dus geen gedoe.
how_it_works__title4: Rij met de auto!
how_it_works__text4: >-
  Als je klaar bent kun je de auto weer terugbrengen naar de vaste parkeerplek
  met laadpaal. Laad de auto ook weer op voor de volgende gebruiker.
how_it_works_button_text: Meer informatie
---

{% include home/hero.html %}

<div class="s-availability" data-active-postal-codes="{{ page.active_postal_codes }}">
    <div class="l-wrapper u-align-center">
    <h2 class="c-heading --large u-mb+">Is EasyDriving al beschikbaar in jouw buurt?</h2>
        <div style="display: nxone">
            <form action="/" >
                <label class="c-label u-mb-">Wat is je postcode?</label>
                <input type="text" class="s-availability__postal-code-input c-input">
                <button type="submit" class="s-availability__submit c-button --cta">Versturen</button>
            </form>
        </div>
        <div>
            <p class="c-paragraph u-mb">Helaas, EasyDriving is nog niet in uw buurt beschikbaar. Vul hier uw e-mail adres in als u op de hoogte wil worden gehouden wanneer we in uw buurt van start gaan!</p>

            <form>
                <label class="c-label u-mb-">E-mail adres</label>
                <input type="email" class="s-availability__email-input c-input" required>
                <label class="c-label u-mb-">Wat is je postcode?</label>
                <input type="text" class="s-availability__postal-code-input c-input" value="9613 AZ" maxlength="7">
                <button type="submit" class="c-button --cta">Hou mij op de hoogte</button>
            </form>

        </div>
        <div>
            <p class="c-paragraph u-mb">Goed nieuws! EasyDriving is in uw buurt beschikbaar!</p>
            <a href="#" class="c-button --cta">{{ page.hero_button_text }}</a>


        </div>
    </div>
</div>

{% include home/our-cars.html %}

{% include home/usps.html %}

{% include home/how-it-works.html %}

