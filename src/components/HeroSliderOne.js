import React, {Component} from 'react';
import Swiper from 'react-id-swiper';

class HeroSliderOne extends Component{
    
    render(){
        const params = {
            slidesPerView : 1,
            loop: true,
            speed: 2000,
            watchSlidesVisibility: true,
            effect: 'fade',
            navigation: {
                nextEl: '.ht-swiper-button-next',
                prevEl: '.ht-swiper-button-prev'
            },
            renderPrevButton: () => (
                <div className="ht-swiper-button-prev ht-swiper-button-nav d-none d-xl-block"><i className="ion-ios-arrow-left" /></div>
              ),
              renderNextButton: () => (
                <div className="ht-swiper-button-next ht-swiper-button-nav d-none d-xl-block"><i className="ion-ios-arrow-forward" /></div>
              ),
            autoplay: {
                delay: 5000,
            }
        }

        let data = [
            {bgImg: '1.jfif', sliderTitle: 'Where The Waiting Ends & Families Begin', sliderSubtitle: 'Your Path To PARENTHOOD Starts Here.', btnLink: 'contact-us'},
            {bgImg: '2.jfif', sliderTitle: 'Where The Waiting Ends & Families Begin', sliderSubtitle: 'Your Path To PARENTHOOD Starts Here.', btnLink: 'contact-us'},
            {bgImg: '3.jfif', sliderTitle: 'Where The Waiting Ends & Families Begin', sliderSubtitle: 'Your Path To PARENTHOOD Starts Here.', btnLink: 'contact-us'}
        ];

        let DataList = data.map((val, i)=>{
            return(
                
                <div className="swiper-slide" key={i}>
                    <div className="hero-slider__single-item" style={{ backgroundImage: `url(assets/img/slider/${val.bgImg})` }} >
                        <div className="hero-slider__content-wrapper">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="hero-slider__content">
                                    <div flex>
                                    <h2 className="hero-slider__title">{val.sliderTitle}</h2></div>    
                                    <p className="hero-slider__text">{val.sliderSubtitle}</p> 
                                    <div flex ><a className="hero-slider__btn" href={`${process.env.PUBLIC_URL}/${val.btnLink}`}>Make An Appointment Today</a></div>
                                                                        
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return(
            <div>
                {/*====================  hero slider area ====================*/}
                <div className="hero-alider-area">
                    <Swiper {...params}>
                        {DataList}
                    </Swiper>
                </div>
                {/*====================  End of hero slider area  ====================*/}

            </div>
        )
    }
}

export default HeroSliderOne;