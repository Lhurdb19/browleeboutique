import React from "react";
import { Link } from "react-router-dom";
import Blogdate from '../Blog/blogdate';
import './Blog.css';

function Blog() {
  return (
    <div className="blog-container">
      <div className="blog-con-1">
        <div className="blog-box-1">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5fc9256370c4483828189e24/1607061253161-GL4VE5IMV7G4FFRTXJIN/naeim-jafari-svQZUVLOLjM-unsplash.jpg?format=2500w"
            alt=""
          />
          <div className="text">
            <Link to="/blog">
              No Bad Blood! The Reason Why Tamr Judge Finally Made Up With...
            </Link>
            <div className="box">
              <p>by Sunday Timahe</p>
              <Blogdate />
            </div>
          </div>
        </div>

        <div className="blog-box-2">
          <div className="blog-1">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className="text">
              <Link to="/blog">
                Amf Cannes Red Carpet Celebrities Kendall Jenner, Pamela...
              </Link>
              <div className="box">
                <p>by Eny Rodah</p>
                <Blogdate />
              </div>
            </div>
          </div>

          <div className="blog-1">
            <img
              src="https://mir-s3-cdn-cf.behance.net/projects/404/946426114726903.Y3JvcCw0NDE5LDM0NTcsMzgyLDA.jpg"
              alt=""
            />
            <div className="text">
              <Link to="/blog">
                Gigi Hadid, Rita Ora, Serena & Other Hot Celebs Stun At 2025...
              </Link>
              <div className="box">
                <p>by Sheedah</p>
                <Blogdate />
              </div>
            </div>
          </div>

          <div className="blog-1">
            <img
              src="https://wilkesshoppesonmain.com/wp-content/uploads/2019/07/blog-post2.jpg"
              alt=""
            />
            <div className="text">
              <Link to="/blog">
                Ireland Baldwin Shows Off Trendy Ilse Valfre Tattoo At
                Stagecoach...
              </Link>
              <div className="box">
                <p>by Arry</p>
                <Blogdate />
              </div>
            </div>
          </div>

          <div className="blog-1">
            <img
              src="https://whatstheword.s3.ap-south-1.amazonaws.com/images/word-plus-word/offerings/two.jpg"
              alt=""
            />
            <div className="text">
              <Link to="/blog">
                Billboard Music Awards: Best, Worst & Wackiest Dresses On The...
              </Link>
              <div className="box">
                <p>by Lee </p>
                <Blogdate />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-con-2">
        <div className="blog-box-3">
          <div className="blog-1">
            <img
              src="https://static.wixstatic.com/media/nsplsh_4b51316e36487a53616859~mv2_d_5184_3456_s_4_2.jpg/v1/crop/x_0,y_55,w_5184,h_2550/fill/w_560,h_276,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Toa%20Heftiba.jpg"
              alt=""
            />
            <div className="text">
              <Link to="/blog">
                Pot Party! See Farrah Abraham Flaunt Smoking Body At...
              </Link>
              <div className="box">
                <p>by Eny Rodah</p>
                <Blogdate />
              </div>
            </div>
          </div>

          <div className="blog-1">
            <img
              src="https://www.ipaylinks.com/en/images/home_section6_pic2.jpg"
              alt=""
            />
            <div className="text">
              <Link to="/blog">
                Kim Kardashian Steps Out In Paris Wearing Shocking Sparkly...
              </Link>
              <div className="box">
                <p>by Sheedah</p>
                <Blogdate />
              </div>
            </div>
          </div>

          <div className="blog-1">
            <img
              src="https://www.rsvponline.mx/800x600/filters:format(jpg):quality(75)/files/rsvp/images/main/2020/labial_rojo_.jpg"
              alt=""
            />
            <div className="text">
              <Link to="/blog">
                CMT Awards 2025 Red Carpet Arrivals Carrie Underwood, Sheryl...
              </Link>
              <div className="box">
                <p>by Arry</p>
                <Blogdate />
              </div>
            </div>
          </div>

          <div className="blog-1">
            <img
              src="https://wearingstreet.com/wp-content/uploads/2019/08/f11.jpg"
              alt=""
            />
            <div className="text">
              <Link to="/blog">
                A-list Battle! Angelina Jolie & Lady Gaga Fighting Over Who...
              </Link>
              <div className="box">
                <p>by Lee </p>
                <Blogdate />
              </div>
            </div>
          </div>
        </div>

        <div className="blog-box-4">
          <img
            src="https://images.squarespace-cdn.com/content/v1/59948da8914e6bec2f40df8e/1661630542898-FQNOEAD25SAH3YZACP5N/naeim-jafari-laobUPA4jR8-unsplash.jpg?format=1000w"
            alt=""
          />
          <div className="text">
            <Link to="/blog">
              No Bad Blood! The Reason Why Tamr Judge Finally Made Up With...
            </Link>
            <div className="box">
              <p>by Sunday Timahe</p>
              <Blogdate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
