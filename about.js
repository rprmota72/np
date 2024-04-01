import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

const About = () => {
  return (
    <Layout pageName={"About"}>
      <PageBanner pageName={"About"} />
      <div className="neoh_fn_aboutpage">
        {/* Information Section */}
        <section id="information">
          <div className="container">
            {/* About Item #1 */}
            <div className="neoh_fn_about_item">
              <div className="img_item">
                <img src="img/about/1.jpg" alt="" />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">Normal People</h3>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div className="desc">
                  <p>
                  Temos o propósito de dar mais vida à vida, expandindo todas as ligações possíveis e imaginárias.
A nossa visão é ser o motor da transformação de Portugal numa sociedade melhor, em que tudo e todos estarão ligados a todos e a tudo de formas extraordinárias.
A nossa Missão é ligar pessoas, empresas, instituições e coisas, a tudo e todos, potenciando as mais avançadas tecnologias para entregar a melhor experiência, surpreendendo e construindo com os nossos clientes relações empáticas e transparentes.
Atuar sempre com ambição, atitude de desafio e de transformação do presente, com o futuro como inspiração e com a criação de valor para a sociedade como objetivo último.
                  </p>
                  <p>
                    






                  </p>
                </div>
                <div className="buttons">
                  <a
                    href="https://opensea.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="neoh_fn_button"
                  >
                    <span className="icon">
                      <img src="svg/opensea.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">Normal People</span>
                  </a>
                  <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="neoh_fn_button"
                  >
                    <span className="icon">
                      <img src="svg/discord.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">Normal People</span>
                  </a>
                </div>
              </div>
            </div>
            {/* !About Item #1 */}
            {/* Guarantee List */}
            <div className="neoh_fn_gualist">
              <ul>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img
                      src="svg/search-engine.svg"
                      alt=""
                      className="fn__svg"
                    />
                    <h3 className="fn_title">Transparência</h3>
                    <p className="fn_desc fn_animated_text">
                      Morbi non dignissim erat, a blandit felis. Suspendisse nec
                      lorem vel orci varius congue ut vitae est.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img src="svg/management.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Uma equipa experiente</h3>
                    <p className="fn_desc fn_animated_text">
                      Morbi non dignissim erat, a blandit felis. Suspendisse nec
                      lorem vel orci varius congue ut vitae est.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img src="svg/padlock.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Segurança Garantida</h3>
                    <p className="fn_desc fn_animated_text">
                      Morbi non dignissim erat, a blandit felis. Suspendisse nec
                      lorem vel orci varius congue ut vitae est.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Guarantee List */}
            {/* About Item #2 */}
            <div className="neoh_fn_about_item reverse">
              <div className="img_item">
                <img src="img/about/2.jpg" alt="" />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">Milhares de utilizadores</h3>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div className="desc">
                  <p>
                  Lorem ipsum dolor sit amet. Ut dolore voluptatem non illum iusto hic architecto minus qui velit dolorem est animi dolor ex officiis minus. Ea omnis velit et laborum ullam At nostrum error et magnam veniam ut voluptatem nesciunt qui internos sunt non aperiam asperiores. Eum velit optio ea ipsam assumenda et aperiam quae ab minima laboriosam in nihil dolores. Qui doloribus consequatur eum corrupti omnis qui sunt nisi qui omnis doloremque.
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet. Ut dolore voluptatem non illum iusto hic architecto minus qui velit dolorem est animi dolor ex officiis minus. Ea omnis velit et laborum ullam At nostrum error et magnam veniam ut voluptatem nesciunt qui internos sunt non aperiam asperiores. Eum velit optio ea ipsam assumenda et aperiam quae ab minima laboriosam in nihil dolores. Qui doloribus consequatur eum corrupti omnis qui sunt nisi qui omnis doloremque.
                  </p>
                </div>
                <div className="buttons">
                  <a href="#" className="neoh_fn_button only_text">
                    <span className="text">Adere à nossa comunidade</span>
                  </a>
                </div>
              </div>
            </div>
            {/* !About Item #2 */}
          </div>
        </section>
        {/* !Information Section */}
        {/* Video Section */}
        <section id="video">
          {/* Dividers */}
          <img
            src="svg/divider.svg"
            alt=""
            className="fn__svg fn__divider top_divider"
          />
          <img
            src="svg/divider.svg"
            alt=""
            className="fn__svg fn__divider bottom_divider"
          />
          {/* !Dividers */}
          {/* Video Shortcode */}
          <div className="neoh_fn_video">
            <div className="bg_overlay">
              <div className="bg_image" data-bg-img="img/hero/bg.jpg" />
              <div className="bg_color" />
            </div>
            <div className="v_content">
              <a
                className="popup-youtube"
                href="//www.youtube.com/embed/7e90gBu4pas?autoplay=1"
              >
                <img src="svg/play.svg" alt="" className="fn__svg" />
              </a>
            </div>
          </div>
          {/* !Video Shortcode */}
        </section>
        {/* !Video Section */}
        {/* Team Section */}
        <section id="team">
          <div className="container">
            {/* Main Title */}
            <div className="neoh_fn_title">
              <h3 className="fn_title">A nossa Equipa</h3>
              <div className="line">
                <span />
              </div>
            </div>
            {/* !Main Title */}
            <div className="mw_650 fn_description">
              <p className="fn_desc fn_animated_text">
                A nossa ideia nasceu em Lisboa e rapidamente se transformou numa visão. A nossa equipa é composta pelos melhores.
              </p>
            </div>
            {/* Team List Shortcode */}
            <div className="neoh_fn_team">
              <ul className="team_list">
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/1.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Rui Mota</h3>
                        <p className="fn_desc">Administrador de Sistemas</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fn-icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-behance" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/2.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Rui Mota</h3>
                        <p className="fn_desc">Administrador de Sistemas</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fn-icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-behance" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/3.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Rui Mota</h3>
                        <p className="fn_desc">Administrador de Sistemas</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fn-icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-behance" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/4.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Rui Mota</h3>
                        <p className="fn_desc">Administrador de Sistemas</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fn-icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-behance" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/5.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Rui Mota</h3>
                        <p className="fn_desc">Administrador de Sistemas</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fn-icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-behance" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/6.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Rui Mota</h3>
                        <p className="fn_desc">Administrador de Sistemas</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fn-icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-behance" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Team List Shortcode */}
          </div>
        </section>
        {/* !Team Section */}
      </div>
    </Layout>
  );
};
export default About;
