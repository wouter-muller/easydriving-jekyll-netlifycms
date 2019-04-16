---
layout: default
title: home
title_tag: EasyDriving
permalink: /
hero_heading: Samen slim rijden
hero_subheading: Elektrische deelauto’s voor jou en je buurt!
our_cars_heading: Onze auto's
our_cars_car1_image: /_site/dist/img/uploads/nissan-leaf.png
our_cars_car2_image: /_site/dist/img/uploads/hyundai-kona.png
our_cars_car3_image: /_site/dist/img/uploads/tesla-model-s.png
our_cars_car4_image: /_site/dist/img/uploads/tesla-model-x.png
our_cars_car1_title: Nissan Leaf
our_cars_car2_title: Hyundai Kona
our_cars_car3_title: Tesla Model S
our_cars_car4_title: Tesla Model X
our_cars_car1_description: '€ 2,75 per uur of € 27,50 per dag'
our_cars_car2_description: '€ 4,75 per uur of € 47,50 per dag'
our_cars_car3_description: 'vanaf € 15,00 per uur of € 150,00 per dag'
our_cars_car4_description: 'vanaf € 17,50 per uur of € 175,00 per dag'
---
<div class="s-hero">
    <div class="s-hero__bg"></div>
    <div class="s-hero__inner">
        <div class="l-wrapper">
            <h1 class="s-hero__heading">{{ page.hero_heading }}</h1>
            <h2 class="s-hero__sub-heading">{{ page.hero_subheading }}</h2>
            <a href="#" class="c-button --cta">{{ page.hero_button_text }}</a>
        </div>
    </div>
</div>

<div class="s-our-cars">
    <div class="l-wrapper">
        <h2 class="c-heading --large u-align-center u-mb+">{{ page.our_cars_heading }}</h2>
        <div class="s-our-cars__grid u-mb">
             <div class="s-our-cars__car-wrapper">
                <div class="s-our-cars__car-image">
                    <img src="{{ site.image_path }}{{ page.our_cars_car1_image }}">
                </div>
                <h3 class="c-heading --medium u-align-center u-mb-">{{ page.our_cars_car1_title }}</h3>
                <p class="c-paragraph u-align-center">{{ page.our_cars_car1_description }}</p>
            </div>

             <div class="s-our-cars__car-wrapper">
                <div class="s-our-cars__car-image">
                    <img src="{{ site.image_path }}{{ page.our_cars_car2_image }}">
                </div>
                <h3 class="c-heading --medium u-align-center u-mb-">{{ page.our_cars_car2_title }}</h3>
                <p class="c-paragraph u-align-center">{{ page.our_cars_car2_description }}</p>
            </div>

             <div class="s-our-cars__car-wrapper">
                <div class="s-our-cars__car-image">
                    <img src="{{ site.image_path }}{{ page.our_cars_car3_image }}">
                </div>
                <h3 class="c-heading --medium u-align-center u-mb-">{{ page.our_cars_car3_title }}</h3>
                <p class="c-paragraph u-align-center">{{ page.our_cars_car3_description }}</p>
            </div>

             <div class="s-our-cars__car-wrapper">
                <div class="s-our-cars__car-image">
                    <img src="{{ site.image_path }}{{ page.our_cars_car4_image }}">
                </div>
                <h3 class="c-heading --medium u-align-center u-mb-">{{ page.our_cars_car4_title }}</h3>
                <p class="c-paragraph u-align-center">{{ page.our_cars_car4_description }}</p>
            </div>



        </div>
        <div class="u-align-center">
            <a href="#" class="c-button --border u-align-center">Meer informatie</a>
        </div>
    </div>
</div>
