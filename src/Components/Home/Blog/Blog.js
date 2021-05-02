import React from "react";
import "./Blog.css";
import blogImg1 from "../../../Images/Blog/screenshot-www.wired_.com-2020.09.08-10_48_18.png";
import blogImg2 from "../../../Images/Blog/screenshot-techcrunch.com-2020.09.08-10_48_58.png";
import blogImg3 from "../../../Images/Blog/screenshot-www.vox_.com-2020.09.08-10_49_54.png";

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog-title">
        <h2>BLOG</h2>
        <hr />
        <h5 className="text-secondary">My Blogs.</h5>
        <div className="row w-100 mt-5">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="blog-card">
              <img src={blogImg1} className="img-fluid" alt="" />
              <h4>Wired</h4>
              <p>
                Wired is a massively popular publication, good at capturing real
                insights into the tech world, no stranger to topics like
                technology, culture, politics, and social media
              </p>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  mb-3">
            <div className="blog-card">
              <img src={blogImg2} className="img-fluid" alt="" />
              <h4>TechCrunch</h4>
              <p>
                Invest yourself in the business-verse of the tech world with one
                of the most popular technology blogs thriving this year-
                TechCrunch.
              </p>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  mb-3">
            <div className="blog-card">
              <img src={blogImg3} className="img-fluid" alt="" />
              <h4>Recode</h4>
              <p>
                Currently, owned by VOX media, Recode gives the most updated
                independent technology news, analysis trends, and reviews from
                the most respected.
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
