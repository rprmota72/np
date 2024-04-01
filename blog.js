import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import { getPagination, pagination } from "@/utilits";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blog = () => {
  let sort = 3;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    let list = document.querySelectorAll(".neoh_fn_moving_blog ul li");
    pagination(".neoh_fn_moving_blog ul li", sort, active);
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layout pageName={"Blog"}>
      <PageBanner pageName={"Blog"} />
      <div className="neoh_fn_blog_page">
        <div className="container">
          {/* Moving Blog List Shortcode */}
          <div className="neoh_fn_moving_blog">
            <ul>
              <li>
                <div className="item">
                  <img src="img/blog/1.jpg" alt="" className="moving_img" />
                  <p className="fn_date">
                    <span>Junho 01, 2022</span>
                  </p>
                  <h3 className="fn_title">
                    <Link legacyBehavior href="/blog-single">
                      Normal People
                    </Link>
                  </h3>
                  <p className="fn_desc">
                    Morbi non dignissim erat, a blandit felis nec lorem vel orci
                    varius congue ut vitae est
                  </p>
                  <p className="fn_read">
                    <Link legacyBehavior href="/blog-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Ler Mais</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </li>
              <li>
                <div className="item">
                  <img src="img/blog/2.jpg" alt="" className="moving_img" />
                  <p className="fn_date">
                    <span>Maio 25, 2022</span>
                  </p>
                  <h3 className="fn_title">
                    <Link legacyBehavior href="/blog-single">
                    Normal People
                    </Link>
                  </h3>
                  <p className="fn_desc">
                    Morbi non dignissim erat, a blandit felis nec lorem vel orci
                    varius congue ut vitae est
                  </p>
                  <p className="fn_read">
                    <Link legacyBehavior href="/blog-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Ler Mais</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </li>
              <li>
                <div className="item">
                  <img src="img/blog/3.jpg" alt="" className="moving_img" />
                  <p className="fn_date">
                    <span>Maio 13, 2022</span>
                  </p>
                  <h3 className="fn_title">
                    <Link legacyBehavior href="/blog-single">
                    Normal People
                    </Link>
                  </h3>
                  <p className="fn_desc">
                    Morbi non dignissim erat, a blandit felis nec lorem vel orci
                    varius congue ut vitae est
                  </p>
                  <p className="fn_read">
                    <Link legacyBehavior href="/blog-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Ler Mais</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </li>
              <li>
                <div className="item">
                  <img src="img/blog/4.jpg" alt="" className="moving_img" />
                  <p className="fn_date">
                    <span>Maio 08, 2022</span>
                  </p>
                  <h3 className="fn_title">
                    <Link legacyBehavior href="/blog-single">
                    Normal People
                    </Link>
                  </h3>
                  <p className="fn_desc">
                    Morbi non dignissim erat, a blandit felis nec lorem vel orci
                    varius congue ut vitae est.
                  </p>
                  <p className="fn_read">
                    <Link legacyBehavior href="/blog-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Ler Mais</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </li>
              <li>
                <div className="item">
                  <img src="img/blog/5.jpg" alt="" className="moving_img" />
                  <p className="fn_date">
                    <span>Abril 19, 2022</span>
                  </p>
                  <h3 className="fn_title">
                    <Link legacyBehavior href="/blog-single">
                    Normal People
                    </Link>
                  </h3>
                  <p className="fn_desc">
                    Morbi non dignissim erat, a blandit felis nec lorem vel orci
                    varius congue ut vitae est.
                  </p>
                  <p className="fn_read">
                    <Link legacyBehavior href="/blog-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Ler Mais</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </li>
              <li>
                <div className="item">
                  <img src="img/blog/6.jpg" alt="" className="moving_img" />
                  <p className="fn_date">
                    <span>Abril 12, 2022</span>
                  </p>
                  <h3 className="fn_title">
                    <Link legacyBehavior href="/blog-single">
                    Normal People
                    </Link>
                  </h3>
                  <p className="fn_desc">
                    Morbi non dignissim erat, a blandit felis nec lorem vel orci
                    varius congue ut vitae est
                  </p>
                  <p className="fn_read">
                    <Link legacyBehavior href="/blog-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Ler Mais</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </li>
              <li>
                <div className="item">
                  <img src="img/blog/7.jpg" alt="" className="moving_img" />
                  <p className="fn_date">
                    <span>Abril 07, 2022</span>
                  </p>
                  <h3 className="fn_title">
                    <Link legacyBehavior href="/blog-single">
                    Normal People
                    </Link>
                  </h3>
                  <p className="fn_desc">
                    Morbi non dignissim erat, a blandit felis nec lorem vel orci
                    varius congue ut vitae est
                  </p>
                  <p className="fn_read">
                    <Link legacyBehavior href="/blog-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Ler Mais</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </li>
              <li>
                <div className="item">
                  <img src="img/blog/8.jpg" alt="" className="moving_img" />
                  <p className="fn_date">
                    <span>Abril 03, 2022</span>
                  </p>
                  <h3 className="fn_title">
                    <Link legacyBehavior href="/blog-single">
                    Normal People
                    </Link>
                  </h3>
                  <p className="fn_desc">
                    Morbi non dignissim erat, a blandit felis nec lorem vel orci
                    varius congue ut vitae est
                  </p>
                  <p className="fn_read">
                    <Link legacyBehavior href="/blog-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Ler Mais</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </li>
              <li>
                <div className="item">
                  <img src="img/blog/9.jpg" alt="" className="moving_img" />
                  <p className="fn_date">
                    <span>Março 25, 2022</span>
                  </p>
                  <h3 className="fn_title">
                    <Link legacyBehavior href="/blog-single">
                    Normal People
                    </Link>
                  </h3>
                  <p className="fn_desc">
                    Morbi non dignissim erat, a blandit felis nec lorem vel orci
                    varius congue ut vitae est.
                  </p>
                  <p className="fn_read">
                    <Link legacyBehavior href="/blog-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Ler Mais</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* !Moving Blog List Shortcode */}
          {/* Pagination */}
          <div className="neoh_fn_pagination">
            <ul>
              {state &&
                state.map((s, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className={` ${active === s ? "current" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(s);
                      }}
                    >
                      {s}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          {/* !Pagination */}
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
