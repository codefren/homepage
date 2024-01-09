
import React from "react";
import { useState, useEffect, useRef } from "react";
import Particles from 'react-particles-js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedCursor from "react-animated-cursor"
import WOW from 'wowjs';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
export default function Index() {
  // React.useEffect(() => {
  //   document.body.classList.toggle("landing-page");
  //   // Specify how to clean up after this effect:
  //   return function cleanup() {
  //     document.body.classList.toggle("landing-page");
  //   };
  // }, []);

  React.useEffect(() => {
    // document.body.classList.toggle("landing-page");
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      // document.body.classList.toggle("landing-page");
      document.body.classList.toggle("index-page");
    };
  }, []);


  const [scroll, setScroll] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    if(window.innerWidth<=991){
      setSswiperValue(3)
    }else{
      setSswiperValue(5)
    }
  };

  const [swiperValue,setSswiperValue]=useState(5);
  const homeSeccion = useRef(null);
  const servicesSeccion = useRef(null);
  const portafolioSeccion = useRef(null);
  const colaboracionSeccion = useRef(null);
  const contactoSeccion = useRef(null);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, [])
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])


  return (
    <>
      <>
        <AnimatedCursor
          innerSize={12}
          outerSize={12}
          color='255, 255, 225'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            'ul'
          ]}
        />
        {/*Start Page Header*/}
        <header className={`page-header ${scroll ? "is-sticky" : ""} header-basic`} id="page-header">
          <div className="header-search-box">
            <div className="close-search" />
            <form
              className="nav-search search-form"
              role="search"
              method="get"
              action="/"
            >
              <div className="search-wrapper">
                <label className="search-lbl">Search for:</label>
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search..."
                  name="searchInput"
                  autofocus="autofocus"
                />
                <button className="search-btn" type="submit">
                  <i className="bi bi-search icon" />
                </button>
              </div>
            </form>
          </div>
          <div className="container">
            <nav className="menu-navbar">
              <div className="header-logo">
                <h1 className="name-icon">
                 Patineta<span>Studio</span>
                </h1>
                {/*<a className="logo-link" href="/">
                  <img
                    className="logo-img light-logo"
                    loading="lazy"
                    src={require("assets/img/logo_ligth_patineta.png")}
                    alt="logo"
                  />
                  <img
                    className="logo-img  dark-logo"
                    loading="lazy"
                    src={require("assets/img/logo_ligth_patineta.png")}
                    alt="logo"
                  />
        </a>*/}
              </div>
              <div className="links menu-wrapper ">
                <ul className="list-js links-list">
                  <li className="menu-item has-sub-menu">
                    <span
                      className="menu-link   active"
                      onClick={() => scrollDown(homeSeccion)}
                    >
                      home
                    </span>

                  </li>

                  <li className="menu-item ">
                    <span
                      className="menu-link  "
                      onClick={() => scrollDown(servicesSeccion)}
                    >
                      servicios
                    </span>

                  </li>
                  <li className="menu-item ">
                    <span
                      className="menu-link  "
                      onClick={() => scrollDown(portafolioSeccion)}
                    >
                      portfolio
                    </span>

                  </li>

                  <li className="menu-item">
                    <span
                      className="menu-link  "
                      onClick={() => scrollDown(colaboracionSeccion)}
                    >
                      Colaboraciones{" "}
                    </span>
                  </li>


                  <li className="menu-item">
                    <span
                      className="menu-link  "
                      onClick={() => scrollDown(contactoSeccion)}
                    >
                      Contacto{" "}
                    </span>
                  </li>
                </ul>
              </div>

            </nav>
          </div>
        </header>
        {/*End Page Header*/}
        {/* Start  Page hero*/}
        <section
          className="page-hero  d-flex align-items-center  tringle-bg"
          id="page-hero"
        >
          <div
            className="overlay-photo-image-bg"
            data-bg-img="assets/images/sections-bg-images/pattern-bg-1.jpg"

            data-bg-opacity=".2"
            style={{
              backgroundImage:
                'url("assets/images/sections-bg-images/pattern-bg-1.jpg")',
              opacity: "0.2"
            }}
          />

          <div className="particles-js  dots" id="particles-js">
            <Particles
              params={{
                "particles": {
                  "number": {
                    "value": 200,
                    "density": {
                      "enable": false
                    }
                  },
                  "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                      "speed": 4,
                      "size_min": 0.3
                    }
                  },
                  "line_linked": {
                    "enable": false
                  },
                  "move": {
                    "random": true,
                    "speed": 1,
                    "direction": "top",
                    "out_mode": "out"
                  }
                },
                "interactivity": {
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "bubble"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "repulse"
                    }
                  },
                  "modes": {
                    "bubble": {
                      "distance": 250,
                      "duration": 2,
                      "size": 1,
                      "opacity": 0
                    },
                    "repulse": {
                      "distance": 400,
                      "duration": 4
                    }
                  }
                }
              }} />

          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 ">
                {/*Start of .hero-text-area*/}
                <div className="hero-text-area" ref={homeSeccion}>
                  <div className="row">
                    <div className="col-12   ">
                      <div className="hero-social-icons mb-3 ">
                        <div className="sc-wrapper dir-row sc-flat">
                          <ul className="sc-list">
                            <li className="sc-item " title="Facebook">
                              <a
                                className="sc-link"
                                href="#0"
                                title="social media icon"
                              >
                                <i className="fab fa-facebook-f sc-icon" />
                              </a>
                            </li>
                            <li className="sc-item " title="youtube">
                              <a
                                className="sc-link"
                                href="#0"
                                title="social media icon"
                              >
                                <i className="fab fa-youtube sc-icon" />
                              </a>
                            </li>
                            <li className="sc-item " title="instagram">
                              <a
                                className="sc-link"
                                href="#0"
                                title="social media icon"
                              >
                                <i className="fab fa-instagram sc-icon" />
                              </a>
                            </li>
                            <li className="sc-item " title="twitter">
                              <a
                                className="sc-link"
                                href="#0"
                                title="social media icon"
                              >
                                <i className="fab fa-twitter sc-icon" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12       ">
                      <div className="pre-title ">Soluciones IOT </div>
                      <h1 className="hero-title  ">
                        Facilitamos los mejores servicios & Soluciones IOT

                      </h1>
                    </div>
                    <div className="col-10       ">
                      <p className="hero-subtitle ">
                        Transformamos Ideas en realidades y soluciones digitales, con el lema de que si lo puedes pensar se puede crear.
                      </p>
                    </div>
                    <div className="col-12   ">
                      <div className="cta-links-area ">
                        <button
                          className=" btn-outline cta-link cta-link-primary "
                     
                        >
                          Quienes Somos
                        </button>
                        
                      </div>
                    </div>
                  </div>
                </div>
                {/*End of .hero-text-area*/}
              </div>
              {/*start of .image-area */}
              <div
                className="col-12   mx-md-auto col-lg-6 text-center "
                data-tilt=""
                style={{
                  willChange: "transform",
                  transform:
                    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
                }}
              >
                <div className="hero-image-area mb-5 mb-lg-0">
                  <div className="hero-img-wraper  ">
                    <img
                      className="img-fluid "
                      src={require("assets/img/illustration-1.png")}

                      alt=""
                      draggable="false"
                    />
                  </div>
                </div>
              </div>
              {/*End of .image-area */}
            </div>
          </div>
        </section>
        {/* End  Page hero*/}
        {/* Start  services Section*/}
        <section className="services services-boxed mega-section " ref={servicesSeccion} id="services">
          <div className="container">
            <div className="sec-heading  ">
              <div className="content-area">
                <span
                  className="pre-title       wow fadeInUp"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp"
                  }}
                >
                  servicios
                </span>
                <h2
                  className="title    wow fadeInUp"
                  data-wow-delay=".4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp"
                  }}

                >
                  <span className="hollow-text">Nuestros </span> Servicios:
                </h2>
                <p
                  className="subtitle   wow fadeInUp"
                  data-wow-delay=".6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.6s",
                    animationName: "fadeInUp"
                  }}

                >
                  te presentamos un abánico de servicios
                  tecnológicos que te permitan encontrar en un mismo lugar la solucion a tu necesidad .
                </p>
              </div>
              <div
                className="cta-area   wow fadeInUp"

                data-wow-delay=".8s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeInUp"
                }}
              >

              </div>
            </div>
            <div className="row gx-4 gy-4 services-row ">
              <div className="col-12 col-md-6  col-lg-4 mx-auto ">
                {/*Start First service box*/}
                <div
                  className="box service-box  wow fadeInUp reveal-start"
                  data-wow-offset={0}
                  data-wow-delay=".1s"

                  style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp"
                  }}
                >
                  <div className="service-icon">
                    <i className="flaticon-web-development font-icon" />
                  </div>
                  <span className="service-num hollow-text">1 </span>
                  <div className="service-content">
                    <h3 className="service-title">Desarrollo a Medida</h3>
                    <p className="service-text">
                      Garantizamos la creación de experiencias tecnológicas cautivadoras y funcionales en base a tus necesidades, que moldean la manera en que interactuamos con el mundo digital.
                    </p>
                  </div>

                </div>
                {/* End First service box   */}
              </div>
              <div className="col-12 col-md-6  col-lg-4 mx-auto ">
                {/*Start Second service box*/}
                <div
                  className="box service-box wow fadeInUp reveal-start"
                  data-wow-offset={0}
                  data-wow-delay=".2s"

                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp"
                  }}
                >
                  <div className="service-icon">
                    <i className="flaticon-nanotechnology font-icon" />
                  </div>
                  <span className="service-num hollow-text">2 </span>
                  <div className="service-content">
                    <h3 className="service-title">Integraciones</h3>
                    <p className="service-text">
                      Proporcionamos las mejores soluciones, que permitan mantener la sintonía armoniosa de diversas herramientas y
                      sistemas que, al trabajar juntas, generan la mayor eficiencia, productividad y experiencia del usuario.
                    </p>
                  </div>

                </div>
                {/* End Second service box*/}
              </div>
              <div className="col-12 col-md-6  col-lg-4 mx-auto  ">
                {/*Start Third service box*/}
                <div
                  className="box service-box  wow fadeInUp reveal-start"
                  data-wow-offset={0}
                  data-wow-delay=".3s"

                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp"
                  }}
                >
                  <div className="service-icon">
                    <i className="flaticon-web-domain font-icon" />
                  </div>
                  <span className="service-num hollow-text">3 </span>
                  <div className="service-content">
                    <h3 className="service-title">Infraestructura </h3>
                    <p className="service-text">
                      Te brindamos el apoyo necesario para que tus herramientas tecnológicas,
                      tengan el mejor entorno de funcionamiento, Optimizando la gentión de Alojamiento, servidores y balanceo de carga entre otros.

                    </p>
                  </div>

                </div>
                {/* End Third service box*/}
              </div>
              <div className="col-12 col-md-6  col-lg-4 mx-auto  ">
                {/*Start fourth service box*/}
                <div
                  className="box service-box  wow fadeInUp reveal-start"
                  data-wow-offset={0}

                  data-wow-delay=".4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp"
                  }}
                >
                  <div className="service-icon">
                    <i className="flaticon-profile font-icon" />
                  </div>
                  <span className="service-num hollow-text">4 </span>
                  <div className="service-content">
                    <h3 className="service-title">Dessarrollo de Aplicaciones</h3>
                    <p className="service-text">
                      Tranformamos ideas en realidad digital, de hacer que la tecnología se integre perfectamente en la vida cotidiana de las personas.  a través de soluciones personalizadas y creativas que llevan la innovación directamente a la palma de la mano de los usuarios.
                    </p>
                  </div>

                </div>
                {/* End fourth service box   */}
              </div>
              <div className="col-12 col-md-6  col-lg-4 mx-auto  ">
                {/*Start 5th service box*/}
                <div
                  className="box service-box  wow fadeInUp reveal-start"
                  data-wow-offset={0}
                  data-wow-delay=".5s"

                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp"
                  }}
                >
                  <div className="service-icon">
                    <i className="flaticon-search font-icon" />
                  </div>
                  <span className="service-num hollow-text">5 </span>
                  <div className="service-content">
                    <h3 className="service-title">SEO</h3>
                    <p className="service-text">
                      Mejoramos tu posicionamiento y además en las clasificaciones en motores de búsqueda,
                      buscando construir una presencia digital sólida y relevante que resuene con la audiencia objetivo, impulsando el crecimiento orgánico y la visibilidad en línea a lo largo del tiempo.
                    </p>
                  </div>

                </div>
                {/* End 5th service box*/}
              </div>
              <div className="col-12 col-md-6  col-lg-4 mx-auto  ">
                {/*Start 6th service box*/}
                <div
                  className="box service-box  wow fadeInUp  reveal-start"

                  data-wow-offset={0}
                  data-wow-delay=".6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.6s",
                    animationName: "fadeInUp"
                  }}
                >
                  <div className="service-icon">
                    <i className="flaticon-strategy font-icon" />
                  </div>
                  <span className="service-num hollow-text">6 </span>
                  <div className="service-content">
                    <h3 className="service-title">Analisis de datos</h3>
                    <p className="service-text">
                      Te ayudamos en el correcto monitoreo del trafico que ingresa a tus sitios para que puedas conseguir finalmente con las estratégia definida en tu audiencia.
                    </p>
                  </div>

                </div>
                {/* End 6th service box*/}
              </div>
            </div>
          </div>
        </section>
        {/* End  services Section*/}




        {/* Start  portfolio-slider Section*/}
        <section
          className="portfolio portfolio-blocks mega-section   "
          id="portfolio"
          ref={portafolioSeccion}
        >
          <div className="container">
            <div className="sec-heading  ">
              <div className="content-area">
                <span
                  className="pre-title       wow fadeInUp"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp"
                  }}
                >
                  portfolio
                </span>
                <h2
                  className="title    wow fadeInUp"

                  data-wow-delay=".4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp"
                  }}
                >
                  Nuestro <span className="hollow-text">portafolio</span>
                </h2>
              </div>
              <div
                className="cta-area   wow fadeInUp"

                data-wow-delay=".8s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeInUp"
                }}
              >

              </div>
            </div>
            <div className="portfolio-wrapper  ">
              {/*a menu of links to show the photos users needs   */}
              <ul
                className="portfolio-btn-list wow fadeInUp"
                data-wow-delay=".2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp"
                }}
              >
                <li className="portfolio-btn active " data-filter="*">
                  Todo
                </li>
                <li className="portfolio-btn        " data-filter=".mobile">
                  Aplicación Movil
                </li>
                <li className="portfolio-btn        " data-filter=".web">
                  Web
                </li>
                <li className="portfolio-btn        " data-filter=".data">
                  Analytics
                </li>
                <li className="portfolio-btn        " data-filter=".hosting">
                  Alojamiento
                </li>
              </ul>
              <div
                className="portfolio-group wow fadeIn"
                data-wow-delay=".4s"
                style={{
                  height: 932,
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeIn"
                }}
              >
                <div className="row ">
                  <div
                    className="col-12  col-md-6  col-lg-4  portfolio-item mobile "
                    style={{ position: "absolute", left: "0%", top: 0 }}
                  >
                    <div className="item   ">
                      <a
                        className="portfolio-img-link"
                        href="portfolio-single.html"
                      >
                        <img
                          className="portfolio-img   img-fluid "
                          loading="lazy"
                          src={require("assets/img/1.jpg")}
                          alt="portafolio-one"
                        />
                      </a>
                      <div className="item-info ">
                        <h3 className="item-title">Aplicación Movil</h3>
                        <i className="bi bi-arrow-right icon " />
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12  col-md-6  col-lg-4  portfolio-item web  "
                    style={{ position: "absolute", left: "33.3325%", top: 0 }}
                  >
                    <div className="item   ">
                      <a
                        className="portfolio-img-link"
                        href="portfolio-single.html"
                      >
                        <img
                          className="portfolio-img   img-fluid "
                          loading="lazy"
                          src={require("assets/img/2.jpg")}
                          alt="portfolio-two"
                        />
                      </a>
                      <div className="item-info ">
                        <h3 className="item-title">Alojamiento</h3>
                        <i className="bi bi-arrow-right icon " />
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12  col-md-6  col-lg-4  portfolio-item data "
                    style={{ position: "absolute", left: "66.6651%", top: 0 }}
                  >
                    <div className="item   ">
                      <a
                        className="portfolio-img-link"
                        href="portfolio-single.html"
                      >
                        <img
                          className="portfolio-img   img-fluid "
                          loading="lazy"
                          src={require("assets/img/3.jpg")}
                          alt="portfolio-tree"
                        />
                      </a>
                      <div className="item-info ">
                        <h3 className="item-title">Analytics</h3>
                        <i className="bi bi-arrow-right icon " />
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12  col-md-6  col-lg-4  portfolio-item mobile "
                    style={{ position: "absolute", left: "0%", top: 466 }}
                  >
                    <div className="item   ">
                      <a
                        className="portfolio-img-link"
                        href="portfolio-single.html"
                      >
                        <img
                          className="portfolio-img   img-fluid "
                          loading="lazy"
                          src={require("assets/img/4.jpg")}
                          alt="portfolio-four"
                        />
                      </a>
                      <div className="item-info ">
                        <h3 className="item-title">Alojamiento</h3>
                        <i className="bi bi-arrow-right icon " />
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12  col-md-6  col-lg-4  portfolio-item hosting "
                    style={{ position: "absolute", left: "33.3325%", top: 466 }}
                  >
                    <div className="item   ">
                      <a
                        className="portfolio-img-link"
                        href="portfolio-single.html"
                      >
                        <img
                          className="portfolio-img   img-fluid "
                          loading="lazy"
                          src={require("assets/img/5.jpg")}
                          alt="portfolio-five"
                        />
                      </a>
                      <div className="item-info ">
                        <h3 className="item-title">SEO</h3>
                        <i className="bi bi-arrow-right icon " />
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12  col-md-6  col-lg-4  portfolio-item mobile"
                    style={{ position: "absolute", left: "66.6651%", top: 466 }}
                  >
                    <div className="item   ">
                      <a
                        className="portfolio-img-link"
                        href="portfolio-single.html"
                      >
                        <img
                          className="portfolio-img   img-fluid "
                          loading="lazy"
                          src={require("assets/img/6.jpg")}
                          alt="portfolio-six"
                        />
                      </a>
                      <div className="item-info ">
                        <h3 className="item-title">other category</h3>
                        <i className="bi bi-arrow-right icon " />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End  portfolio-slider Section*/}
        {/* Start  our-clients Section*/}
        <section
          className="our-clients  mega-section   wow fadeInUp"
          id="our-clients"
          ref={colaboracionSeccion}
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp"
          }}
        >
          <div className="container">
            <div className="sec-heading   centered ">
              <div className="content-area">
                <h2
                  className="title    wow fadeInUp"
                  data-wow-delay=".4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp"
                  }}
                >
                  Colaboraciones e Integraciones
                </h2>
              </div>
            </div>
            <div className=" clients-logos d-flex align-items-center justify-content-around flex-wrap">
              {/*Swiper*/}
              <Swiper
                spaceBetween={swiperValue>3?50:30}
                slidesPerView={swiperValue}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{ cursor: "grab" }}
              >

                <SwiperSlide>
                  <div className="client-logo  ">
                    <a href="#0">
                      <img
                        className="img-fluid logo "
                        loading="lazy"
                        src={require("assets/img/logo_tock_lock.png")}
                        alt=" "
                      />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-logo  ">
                    <a href="#0">
                      <img
                        className="img-fluid logo "
                        loading="lazy"
                        src={require("assets/img/tuya_asmart.png")}
                        alt=" "
                      />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-logo  ">
                    <a href="#0">
                      <img
                        className="img-fluid logo "
                        loading="lazy"
                        src={require("assets/img/logo_anfikey_.png")}
                        alt=" "
                      />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-logo  ">
                    <a href="#0">
                      <img
                        className="img-fluid logo "
                        loading="lazy"
                        src={require("assets/img/logo_anfikey_.png")}
                        alt=" "
                      />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-logo  ">
                    <a href="#0">
                      <img
                        className="img-fluid logo "
                        loading="lazy"
                        src={require("assets/img/logo_anfikey_.png")}
                        alt=" "
                      />
                    </a>
                  </div>
                </SwiperSlide>


              </Swiper>

            </div>
          </div>
        </section>
        {/* End  our-clients Section*/}


        {/* Start  blog Section*/}
        <section className="contact-us-form-section  mega-section  " ref={contactoSeccion} data-aos="fade-up">

          <div className="row">
            <div className="container">
              <div className="col-12 ">
                <div className="contact-form-panel">
                  <div className="sec-heading centered    ">
                    <div className="content-area">
                      <h2
                        className="title    wow fadeInUp"
                        data-wow-delay=".4s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.4s",
                          animationName: "fadeInUp"
                        }}
                      >
                        Contacto
                      </h2>
                    </div>
                  </div>
                  <div
                    className="contact-form-inputs "
                    data-aos="fade-up"
                    data-wow-delay=".6s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.6s",
                      animationName: "fadeInUp"
                    }}
                  >
                    <div className="custom-form-area input-boxed">
                      {/*Form To have user messages*/}
                      <form
                        className="main-form"
                        id="contact-us-form"
                        action="/"
                        method="post"
                      >
                        <span className="done-msg" />
                        <div className="row ">
                          <div className="col-12 col-lg-6">
                            <div className="input-wrapper">
                              <input
                                className="text-input"
                                id="user-name"
                                name="UserName"
                                type="text"
                              />
                              <label className="input-label" htmlFor="user-name">
                                {" "}
                                Nombre <span className="req">*</span>
                              </label>
                              <span className="b-border" />
                              <span className="error-msg" />
                            </div>
                          </div>
                          <div className="col-12 col-lg-6">
                            <div className="input-wrapper">
                              <input
                                className="text-input"
                                id="user-email"
                                name="UserEmail"
                                type="email"
                              />
                              <label className="input-label" htmlFor="user-email">
                                {" "}
                                Correo  <span className="req">*</span>
                              </label>
                              <span className="b-border" />
                              <span className="error-msg" />
                            </div>
                          </div>

                          <div className="col-12 ">
                            <div className="input-wrapper">
                              <textarea
                                className=" text-input"
                                id="msg-text"
                                name="message"
                                defaultValue={""}
                              />
                              <label className="input-label" htmlFor="msg-text">
                                {" "}
                                Consulta<span className="req">*</span>
                              </label>
                              <span className="b-border" />
                              <i />
                              <span className="error-msg" />
                            </div>
                          </div>
                          <div className="col-12 submit-wrapper">
                            <button
                              className=" btn-solid"
                              id="submit-btn"
                              type="submit"
                              name="UserSubmit"
                            >
                              Enviar mensaje
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* End  blog Section*/}


        {/* Start  page-footer Section*/}
        <footer className="page-footer dark-color-footer" id="page-footer">
          <div
            className="overlay-photo-image-bg"
            data-bg-img="assets/images/sections-bg-images/footer-bg-1.jpg"
            data-bg-opacity=".25"
            style={{
              backgroundImage:
                'url("assets/images/sections-bg-images/footer-bg-1.jpg")',
              opacity: "0.25"
            }}
          />
          <div className="container">
            <div className="row footer-cols">
              <div className="col-12 col-md-8 col-lg-4  footer-col ">
                 <h1 className="name-icon">
                 Patineta<span>Studio</span>
                </h1>
                <div className="footer-col-content-wrapper">
                  <p className="footer-text-about-us ">
                    te invitamos a suscribirte para que tengas información actualizada sobre nuestros productos y servicios.
                  </p>
                </div>
                <div className="form-area ">
                  <div className="mailchimp-form ">
                    <form
                      className="one-field-form"
                      method="post"
                      action="#0"
                    >
                      <div className="field-group ">
                        <label className="email-label" htmlFor="email-input">
                          {" "}

                        </label>
                        <input
                          className="email-input "
                          type="email"
                          defaultValue=""
                          name="EMAIL"
                          id="email-input"
                          placeholder="correo electrónico"
                          autoComplete="off"
                        />
                        <div className="cta-area">
                          <input
                            className="btn-solid subscribe-btn"
                            type="submit"
                            defaultValue="Subscribe"
                            name="subscribe"
                          />
                        </div>
                      </div>
                      <span className="email-notice">
                        *no comartiremos tu información personal
                      </span>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-2  footer-col ">

              </div>
              <div className="col-6 col-lg-2 footer-col ">

              </div>
              <div className="col-12     col-lg-4 footer-col ">
                <h2 className=" footer-col-title    ">Información de Contacto</h2>
                <div className="footer-col-content-wrapper">
                  <div className="contact-info-card">
                    <i className="bi bi-envelope icon" />
                    <a
                      className="text-lowercase  info"
                      href="mailto:example@support.com"
                    >
                      example@support.com
                    </a>
                  </div>
                  <div className="contact-info-card">
                    <i className="bi bi-geo-alt icon" />
                    <span className="text-lowercase  info">
                      5 Xyz st., Abc, alexandria, egypt.
                    </span>
                  </div>
                  <div className="contact-info-card">
                    <i className="bi bi-phone icon" />
                    <a className="info" href="tel:+20123456789">
                      +20123456789
                    </a>
                  </div>
                  <div className="contact-info-card">
                    <div className="social-icons">
                      <div className="sc-wrapper dir-row sc-size-32">
                        <ul className="sc-list">
                          <li className="sc-item " title="Facebook">
                            <a
                              className="sc-link"
                              href="#0"
                              title="social media icon"
                            >
                              <i className="fab fa-facebook-f sc-icon" />
                            </a>
                          </li>
                          <li className="sc-item " title="youtube">
                            <a
                              className="sc-link"
                              href="#0"
                              title="social media icon"
                            >
                              <i className="fab fa-youtube sc-icon" />
                            </a>
                          </li>
                          <li className="sc-item " title="instagram">
                            <a
                              className="sc-link"
                              href="#0"
                              title="social media icon"
                            >
                              <i className="fab fa-instagram sc-icon" />
                            </a>
                          </li>
                          <li className="sc-item " title="twitter">
                            <a
                              className="sc-link"
                              href="#0"
                              title="social media icon"
                            >
                              <i className="fab fa-twitter sc-icon" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyrights ">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 d-flex justify-content-start">

                </div>
                <div className="col-12 col-md-6 d-flex justify-content-end">
                  <div className="terms-links">
                    <a href="#0">Terminos y Condiciones </a>|{" "}
                    <a
                      href="#0"
                      data-bs-toggle="modal"
                      data-bs-target="#privacyPolicyModal"
                    >
                      Politica de privacidad.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* End  page-footer Section*/}
        {/* Start loading-screen Component*/}
        {/* End loading-screen Component*/}
        {/* Start back-to-top Button*/}
        <div className={`back-to-top ${scroll ? "show" : ""}`} id="back-to-top" onClick={goToTop}>
          <i className="bi bi-arrow-up icon " />
        </div>
        {/* End back-to-top Button*/}
        {/* Start privacy-policy-modal*/}
        <div
          className="modal privacy-policy-modal fade"
          id="privacyPolicyModal"
          aria-labelledby="PrivacyPolicyModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable modal-xl ">
            <div className="modal-content text-dark">
              <div className="modal-header">
                <h2 className="modal-title" id="PrivacyPolicyModalLabel">
                  Privacy Policy Modal Title
                </h2>
                <button
                  className="btn-close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="content">
                  <h4>privacy policy item Title goes here </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores saepe, labore sequi libero nesciunt optio quidem iste,
                    dolorum nostrum ex at. Recusandae ducimus aut autem temporibus
                    tempore rerum, consequuntur doloribus perspiciatis, labore totam
                    dolorem veritatis repellendus omnis illo sint ut?
                  </p>
                </div>
                <div className="content">
                  <h4>privacy policy item Title goes here </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores saepe, labore sequi libero nesciunt optio quidem iste,
                    dolorum nostrum ex at. Recusandae ducimus aut autem temporibus
                    tempore rerum, consequuntur doloribus perspiciatis, labore totam
                    dolorem veritatis repellendus omnis illo sint ut?
                  </p>
                </div>
                <div className="content">
                  <h4>privacy policy item Title goes here </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores saepe, labore sequi libero nesciunt optio quidem iste,
                    dolorum nostrum ex at. Recusandae ducimus aut autem temporibus
                    tempore rerum, consequuntur doloribus perspiciatis, labore totam
                    dolorem veritatis repellendus omnis illo sint ut?
                  </p>
                </div>
                <div className="content">
                  <h4>privacy policy item Title goes here </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores saepe, labore sequi libero nesciunt optio quidem iste,
                    dolorum nostrum ex at. Recusandae ducimus aut autem temporibus
                    tempore rerum, consequuntur doloribus perspiciatis, labore totam
                    dolorem veritatis repellendus omnis illo sint ut?
                  </p>
                </div>
                <div className="content">
                  <h4>privacy policy item Title goes here </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores saepe, labore sequi libero nesciunt optio quidem iste,
                    dolorum nostrum ex at. Recusandae ducimus aut autem temporibus
                    tempore rerum, consequuntur doloribus perspiciatis, labore totam
                    dolorem veritatis repellendus omnis illo sint ut?
                  </p>
                </div>
                <div className="content">
                  <h4>privacy policy item Title goes here </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores saepe, labore sequi libero nesciunt optio quidem iste,
                    dolorum nostrum ex at. Recusandae ducimus aut autem temporibus
                    tempore rerum, consequuntur doloribus perspiciatis, labore totam
                    dolorem veritatis repellendus omnis illo sint ut?
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn-solid"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Click to close
                </button>
                <button className="btn-outline" type="button">
                  Do somthing else
                </button>
              </div>
            </div>
          </div>
        </div>
      </>


    </>
  );
}
