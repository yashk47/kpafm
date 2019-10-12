import React, {Component} from 'react';
import Swiper from 'react-id-swiper';

class ServiceGridSlider extends Component{
    render(){
        const params = {
            slidesPerView : 3,
            loop: true,
            speed: 1000,
            watchSlidesVisibility: true,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
            },
            // Responsive breakpoints
            breakpoints: {
                1499:{
                    slidesPerView : 3
                },

                991:{
                    slidesPerView : 2
                },

                767:{
                    slidesPerView : 1

                },

                575:{
                    slidesPerView : 1
                }
            }

        }
        let data = [
            {img: 'service1.jpg', iconName: 'flaticon-002-welding', serviceTitle: 'Fetomaternal Medicine', serviceExcerpt: 'Maternal-fetal medicine specialist is the specialist within the field of obstetrics...', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service2.jpg', iconName: 'flaticon-fertilization', serviceTitle: 'Infertility', serviceExcerpt: 'Infertility is not a disease but a condition where in a particular couple is not able to conceive...', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service3.jpg', iconName: 'flaticon-pregnant-1', serviceTitle: 'Endoscopic Surgery', serviceExcerpt: 'Laparoscopy or endoscopy procedure means looking inside and typically ...', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service1.jpg', iconName: 'flaticon-010-tank-1', serviceTitle: 'High Risk Pregnancy', serviceExcerpt: 'High risk pregnancy – Pregnancy is one of the most exciting and happy phase of women’s life...', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service1.jpg', iconName: 'flaticon-010-tank-1', serviceTitle: 'Obstetrics and Gynaecology', serviceExcerpt: 'The common gynecological problems we cater to include adolescent gynaec problems...', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service1.jpg', iconName: 'flaticon-010-tank-1', serviceTitle: 'Neonatology', serviceExcerpt: 'A neonatal intensive care unit (NICU) is a specialised unit for care of ill or premature...', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service1.jpg', iconName: 'flaticon-010-tank-1', serviceTitle: 'Genetics', serviceExcerpt: 'Cytogenetics is a branch of genetics. Every individual has 46 chromosomes with XX sex...', serviceUrl: 'service-details-left-sidebar'},
        ];

        let DataList = data.map((val, i)=>{
            return(
                <div className="swiper-slide" key={i}>
                    <div className="service-grid-item">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                            <img src={`assets/img/service/${val.img}`} className="img-fluid" alt="" />
                        </a>
                        </div>
                        <div className="icon">
                        <i className={val.iconName} />
                        </div>
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>{val.serviceTitle}</a>
                        </h3>
                        <p className="subtitle">{val.serviceExcerpt}</p>
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`} className="see-more-link">SEE MORE</a>
                    </div>
                    </div>
                </div>
            )
        });
        return(
            <div>
                {/*====================  service grid slider area ====================*/}
                <div className="service-grid-slider-area section-space--inner--120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area text-center">
                        <h2 className="section-title section-space--bottom--50">Our Services <span className="title-icon" /></h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="service-slider">
                            <Swiper {...params}>
                                {DataList}
                            </Swiper>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*====================  End of service grid slider area  ====================*/}

            </div>
        )
    }
}


export default ServiceGridSlider;