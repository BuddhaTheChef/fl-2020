import React, { Component } from 'react'
import $ from 'jquery';
import logo1 from '../../assets/carlslist1.jpg';
import logo2 from '../../assets/carlslist2.jpg';
import logo3 from '../../assets/ohhoney1.jpg';

export default class About extends Component {
 componentDidMount() {
   
        $.fn.timeline = function() {
          var selectors = {
            id: $(this),
            item: $(this).find(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline__img"
          };
          selectors.item.eq(0).addClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" +
              selectors.item
                .first()
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          var itemLength = selectors.item.length;
          $(window).scroll(function() {
            var max, min;
            var pos = $(this).scrollTop();
            selectors.item.each(function(i) {
              min = $(this).offset().top;
              max = $(this).height() + $(this).offset().top;
              var that = $(this);
              if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                selectors.item.removeClass(selectors.activeClass);
                selectors.id.css(
                  "background-image",
                  "url(" +
                    selectors.item
                      .last()
                      .find(selectors.img)
                      .attr("src") +
                    ")"
                );
                selectors.item.last().addClass(selectors.activeClass);
              } else if (pos <= max - 40 && pos >= min) {
                selectors.id.css(
                  "background-image",
                  "url(" +
                    $(this)
                      .find(selectors.img)
                      .attr("src") +
                    ")"
                );
                selectors.item.removeClass(selectors.activeClass);
                $(this).addClass(selectors.activeClass);
              }
            });
          });
        };
      
      
      $("#timeline-1").timeline();
 }
    render() {
        return (
            <div>  
                     <div class="timeline-container" id="timeline-1">
  <div class="timeline-header">
    <h2 class="timeline-header__title">TIMELINE DESIGN</h2>
    <h3 class="timeline-header__subtitle">NEW AND CREATIVE</h3>
  </div>
  <div class="timeline">
    <div class="timeline-item" data-text="NEW TIMELINE DESIGN">
      <div class="timeline__content"><img class="timeline__img" src={logo1} />
        <h2 class="timeline__content-title">2014</h2>
        <p class="timeline__content-desc">He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now inGreece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafawas still a boy. His mother Zubeyde, adevout and strong-willed woman, raised him and his sister.</p>
      </div>
    </div>
    <div class="timeline-item" data-text="NEW TIMELINE DESIGN">
      <div class="timeline__content"><img class="timeline__img" src={logo2}/>
        <h2 class="timeline__content-title">2015</h2>
        <p class="timeline__content-desc">First enrolled in a traditionalreligious school, he soon switched to a modern school. In 1893, he entered a military highschool where his mathematics teacher gave him the second name Kemal (meaning perfection)in recognition of young Mustafa's superior achievement.</p>
      </div>
    </div>
    <div class="timeline-item" data-text="NEW TIMELINE DESIGN">
      <div class="timeline__content"><img class="timeline__img" src={logo3}/>
        <h2 class="timeline__content-title">2016</h2>
        <p class="timeline__content-desc">In 1905, Mustafa Kemal graduated from the War Academy in Istanbul with the rank of Staff Captain. Posted in Damascus, he started with several colleagues, a clandestinesociety called "Homeland and Freedom" to fight against the Sultan'sdespotism.</p>
      </div>
    </div>
    <div class="timeline-item" data-text="NEW TIMELINE DESIGN">
      <div class="timeline__content"><img class="timeline__img" src="adventure-backpack-beach-214575.jpg"/>
        <h2 class="timeline__content-title">2017</h2>
        <p class="timeline__content-desc">In 1908 he helped the group of officers who toppled the Sultan. Mustafa Kemal'scareer flourished as he won his heroism in the far corners of the Ottoman Empire,including Albania and Tripoli. He also briefly served as a staff officer in Salonica andIstanbul and as a military attache in Sofia.</p>
      </div>
    </div>
    <div class="timeline-item" data-text="NEW TIMELINE DESIGN">
      <div class="timeline__content"><img class="timeline__img" src="azadeh-oveisi-1439715-unsplash.jpg"/>
        <h2 class="timeline__content-title">2018</h2>
        <p class="timeline__content-desc">In 1915, when Dardanelles campaign was launched, Colonel Mustafa Kemal became anational hero by winning successive victories and finally repelling the invaders.</p>
      </div>
    </div>
    <div class="timeline-item" data-text="NEW TIMELINE DESIGN">
      <div class="timeline__content"><img class="timeline__img" src="ui.jpg"/>
        <h2 class="timeline__content-title">2019</h2>
        <p class="timeline__content-desc">Promotedto general in 1916, at age 35, he liberated two major provinces in eastern Turkey thatyear. In the next two years, he served as commander of several Ottoman armies inPalestine, Aleppo, and elsewhere, achieving another major victory by stopping the enemyadvance at Aleppo.</p>
      </div>
    </div>
    <div class="timeline-item" data-text="NEW TIMELINE DESIGN">
      <div class="timeline__content"><img class="timeline__img" src="uy.jpg"/>
        <h2 class="timeline__content-title">2020</h2>
        <p class="timeline__content-desc">On May 19, 1919, Mustafa Kemal Pasha landed in the Black Sea port of Samsun to startthe War of Independence. In defiance of the Sultan's government, he rallied a liberationarmy in Anatolia and convened the Congress of Erzurum and Sivas which established thebasis for the new national effort under his leadership.</p>
      </div>
    </div>
    <div class="timeline-item" data-text="NEW TIMELINE DESIGN">
      <div class="timeline__content"><img class="timeline__img" src="ju.jpg"/>
        <h2 class="timeline__content-title">2021</h2>
        <p class="timeline__content-desc">
          On April 23, 1920, the GrandNational Assembly was inaugurated. Mustafa Kemal Pasha was elected to its Presidency.
          Fighting on many fronts, he led his forces to victory against rebels and invadingarmies. Following the Turkish triumph at the two major battles at Inonu in Western Turkey,the Grand National Assembly conferred on Mustafa Kemal Pasha the title ofCommander-in-Chief with the rank of Marshal.
        </p>
      </div>
    </div>
  
  </div>
</div>
            </div>
        )
    }
}
