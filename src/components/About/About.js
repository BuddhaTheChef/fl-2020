import React, { Component } from 'react'
import $ from 'jquery';
import logo1 from '../../assets/t1.jpg';
import logo2 from '../../assets/t2.jpg';
import logo3 from '../../assets/t3.jpg';
import logo4 from '../../assets/t4.jpg';
import logo5 from '../../assets/carlslist1.jpg';
import logo6 from '../../assets/ohhoney1.jpg';

import logo8 from '../../assets/t8.jpg';


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
             
              if (i === itemLength - 2 && pos > min + $(this).height() / 2) {
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
    <h2 class="timeline-header__title">PERSONAL TIMELINE</h2>
    <h3 class="timeline-header__subtitle">Journey into a new passion</h3>
  </div>
  <div class="timeline">
    <div class="timeline-item" data-text="THE YEAR 2014">
      <div class="timeline__content"><img class="timeline__img" src={logo1} alt="logo for stuff" />
        <h2 class="timeline__content-title">2014</h2>
        <p class="timeline__content-desc">
          During my time with hard labor work, such as landscaping. I wanted to challenge my mind instead of my body so I took it upon myself to learn coding. Starting with free programs such as freeCodeCamp and Codecademy. 
        </p>
      </div>
    </div>
    <div class="timeline-item" data-text="THE YEAR 2015">
      <div class="timeline__content"><img class="timeline__img" src={logo2} alt="logo for stuff"/>
        <h2 class="timeline__content-title">2015</h2>
        <p class="timeline__content-desc">
          In 2015, I was still progressing on my own creating small applications. Starting with small portfolio applications and getting into algorthims and data sturctures to improve my logic as a developer.  
        </p>
      </div>
    </div>
    <div class="timeline-item" data-text="THE YEAR 2016">
      <div class="timeline__content"><img class="timeline__img" src={logo3} alt="logo for stuff"/>
        <h2 class="timeline__content-title">2016</h2>
        <p class="timeline__content-desc">2016, I was getting into mobile development and working on backend knowledge to produce full stack applications and then started applying to coding bootcamps while learning more algorithms and design patterns.</p>
      </div>
    </div>
    <div class="timeline-item" data-text="THE YEAR 2017">
      <div class="timeline__content"><img class="timeline__img" src={logo4} alt="logo for stuff"/>
        <h2 class="timeline__content-title">2017</h2>
        <p class="timeline__content-desc">In 2017, I applied to bootcamps while working on my frontend and JavaScript skills I worked on things such as paralax scroll and DOM manipulation.</p>
      </div>
    </div>
    <div class="timeline-item" data-text="THE YEAR 2018">
      <div class="timeline__content"><img class="timeline__img" src={logo5} alt="logo for stuff"/>
        <h2 class="timeline__content-title">2018</h2>
        <p class="timeline__content-desc">2018 was a great year that jump started my carrer, I enrolled in a Full Stack Web Development bootcamp in Dallas,TX called DevMountain. Here I was able to collaberate with other developers and create beautiful applications.</p>
      </div>
    </div>
    <div class="timeline-item" data-text="THE YEAR 2019">
      <div class="timeline__content"><img class="timeline__img" src={logo6} alt="logo for stuff"/>
        <h2 class="timeline__content-title">2019</h2>
        <p class="timeline__content-desc">Promotedto general in 1916, at age 35, he liberated two major provinces in eastern Turkey thatyear. In the next two years, he served as commander of several Ottoman armies inPalestine, Aleppo, and elsewhere, achieving another major victory by stopping the enemyadvance at Aleppo.</p>
      </div>
    </div>
    <div class="timeline-item" data-text="THE YEAR 2020">
      <div class="timeline__content"><img class="timeline__img" src={logo3} alt="logo for stuff"/>
        <h2 class="timeline__content-title">2020</h2>
        <p class="timeline__content-desc">On May 19, 1919, Mustafa Kemal Pasha landed in the Black Sea port of Samsun to startthe War of Independence. In defiance of the Sultan's government, he rallied a liberationarmy in Anatolia and convened the Congress of Erzurum and Sivas which established thebasis for the new national effort under his leadership.</p>
      </div>
    </div>
    <div class="timeline-item" data-text="THE YEAR 2021">
      <div class="timeline__content"><img class="timeline__img" src={logo8} alt="logo for stuff"/>
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
