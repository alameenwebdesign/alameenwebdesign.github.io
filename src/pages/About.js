import { useEffect } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Team1 from "../assets/images/Team1.webp";
import Team2 from "../assets/images/Team2.webp";
import Team3 from "../assets/images/Team3.webp";
import SpeedTest from "../assets/images/speed-test.png";
import CustomWebsite from "../assets/images/custom-website.webp";
import Infographic from "../assets/images/infographic.webp"; // New infographic image import
import professionalPortrait from "../assets/images/professional-image.jpg"; // New professional portrait image import
import work from "../assets/images/work-in-action.jpg"; // New work-in-action image import
import "../styles/about.css";
import SocialProof from "../components/SocialProof.js";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on page load

    new bootstrap.Carousel(
      document.querySelector("#carouselExampleAutoplaying"),
      {
        interval: 3000,
        ride: "carousel",
      }
    );
  }, []);

  return (
    <>
      {/* About Section */}
      <section className="about-section container py-5 text-center about-custom-section mx-auto mb-5">
        <h2 className="fw-bold display-5 text-uppercase about-custom-heading">
          About Alameen Web Design
        </h2>
        <p className="lead fw-semibold text-light fs-4 about-custom-subheading">
          Luxury Websites That Drive Massive Revenue & Conversions
        </p>

        <div
          id="carouselExampleAutoplaying"
          className="carousel slide my-4 about-custom-carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner about-custom-carousel-inner">
            <div className="carousel-item active about-custom-carousel-item">
              <img
                src={Team1}
                className="d-block w-100 rounded about-custom-carousel-img"
                alt="Professional Web Design"
              />
            </div>
            <div className="carousel-item about-custom-carousel-item">
              <img
                src={Team2}
                className="d-block w-100 rounded about-custom-carousel-img"
                alt="Creative Web Solutions"
              />
            </div>
            <div className="carousel-item about-custom-carousel-item">
              <img
                src={Team3}
                className="d-block w-100 rounded about-custom-carousel-img"
                alt="High-Performance Websites"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev about-custom-carousel-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon about-custom-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next about-custom-carousel-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon about-custom-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="w-100">
          <p className="fw-semibold text-light fs-5 about-custom-description text-center">
            At Alameen Web Design, we specialize in crafting premium websites
            tailored to elevate your brand and drive exceptional results. Our
            expert team blends stunning aesthetics with cutting-edge technology,
            ensuring seamless user experiences and high conversion rates. Let’s
            build something extraordinary together.
          </p>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="container text-center py-5 about-custom-difference-section-unique mb-5">
        <h2 className="fw-bold text-uppercase display-5 about-custom-heading-unique">
          What Makes Us Different?
        </h2>
        <div className="about-difference-content-unique text-light fs-5">
          <p className="about-point-1">
            <strong>1️⃣ We Create Websites That Sell</strong>
          </p>
          <p className="about-point-1-desc">
            Most designers just focus on aesthetics. We go beyond that. Our
            websites are engineered to convert visitors into paying customers.
            Every button, every section, and every word is strategically placed
            for maximum impact.
          </p>

          <p className="about-point-2">
            <strong>2️⃣ We Combine Web Design & Deep Marketing Expertise</strong>
          </p>
          <p className="about-point-2-desc">
            Unlike most web designers, we’re not just coders—we’re marketers
            first. We understand buyer psychology, sales funnels, and how to
            make people click, trust, and buy.
          </p>

          <p className="about-point-3">
            <strong>3️⃣ Ultra-Fast, Google-Friendly & Mobile-Optimized</strong>
          </p>
          <p className="about-point-3-desc">
            🚀 Speed matters. Studies show that 47% of visitors expect a site to
            load in under 2 seconds—or they leave. Our sites are blazing fast,
            perfectly responsive, and SEO-powered to rank higher and attract
            more traffic.
          </p>
          <img
            src={SpeedTest}
            className="img-fluid rounded shadow my-3 about-speed-test-img"
            alt="Speed Performance Test"
          />

          <p className="about-point-4">
            <strong>4️⃣ 100% Custom-Made for Maximum Profits</strong>
          </p>
          <p className="about-point-4-desc">
            No generic templates. We create tailor-made solutions based on your
            brand, audience, and business goals—so your site actually works for
            your success.
          </p>
          <img
            src={CustomWebsite}
            className="img-fluid rounded shadow my-3 about-custom-website-img"
            alt="Custom Website Design"
          />

          <p className="about-point-5">
            <strong>5️⃣ A Hassle-Free, Stress-Free Process</strong>
          </p>
          <p className="about-point-5-desc">
            We make the entire experience easy, smooth, and enjoyable for you.
            No delays, no confusion—just fast, powerful results.
          </p>
        </div>
      </section>

      {/* SocialProof Section with additional spacing */}
      <section className="mb-5">
        <SocialProof />
      </section>

      {/* Profit-Generating Websites Section */}
      <section className="container py-5 text-center about-profit-section mb-5 unique-profit-section">
        <h2 className="fw-bold display-5 text-uppercase about-profit-heading unique-profit-heading">
          How We Turn Websites into Profit-Generating Machines
        </h2>
        <div className="row mt-4 gx-4 gy-4 unique-profit-row">
          {" "}
          {/* Added gx-4 for horizontal spacing */}
          {/* Why Most Websites Fail */}
          <div
            className="col-md-6 p-4 rounded border border-danger shadow-sm unique-profit-fail-col"
            style={{ backgroundColor: "#FFECEC" }}
          >
            <h3 className="text-danger fw-bold unique-profit-fail-heading d-flex align-items-center">
              ❌ Why Most Websites Fail
            </h3>
            <ul className="list-unstyled text-start fs-5 text-dark unique-profit-fail-list">
              <li className="unique-profit-fail-item">
                🚨 94% of users judge a business by its website.
              </li>
              <li className="unique-profit-fail-item">
                ⚡ 47% of visitors expect sites to load in under 2 seconds.
              </li>
              <li className="unique-profit-fail-item">
                💰 Weak messaging = lost sales & missed opportunities.
              </li>
              <li className="unique-profit-fail-item">
                🔎 Unoptimized websites rank lower on Google.
              </li>
            </ul>
          </div>
          {/* How We Make You Win */}
          <div
            className="col-md-6 p-4 rounded border border-success shadow-sm unique-profit-win-col"
            style={{ backgroundColor: "#ECFFE1" }}
          >
            <h3 className="text-success fw-bold unique-profit-win-heading d-flex align-items-center">
              ✅ How We Make You Win 🏆
            </h3>
            <ul className="list-unstyled text-start fs-5 text-dark unique-profit-win-list">
              <li className="unique-profit-win-item">
                🎨 Visually stunning, conversion-driven design.
              </li>
              <li className="unique-profit-win-item">
                ⚡ Ultra-fast performance & 99.9% uptime.
              </li>
              <li className="unique-profit-win-item">
                ✍️ High-impact copywriting that turns visitors into buyers.
              </li>
              <li className="unique-profit-win-item">
                🔝 SEO-powered content to dominate Google rankings.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 unique-profit-infographic-container">
          <img
            src={Infographic}
            alt="Comparison Infographic: Failing vs. High-Converting Website"
            className="img-fluid rounded shadow about-infographic-img unique-profit-infographic-img"
          />
        </div>
      </section>

      {/* Founder Section */}
      <section className="container py-5 text-center founder-section mb-5">
        <h2 className="fw-bold display-5 text-uppercase founder-heading">
          Meet the Founder – Alameen
        </h2>
        <div className="row align-items-center my-4">
          {/* Professional Portrait */}
          <div className="col-md-5">
            <img
              src={professionalPortrait}
              alt="Alameen Professional Portrait"
              className="img-fluid rounded founder-portrait"
            />
          </div>
          {/* Founder Story */}
          <div className="col-md-7 text-start">
            <p className="lead founder-intro">
              Hey, I’m Alameen, the founder of Alameen Web Design.
            </p>
            <p className="founder-story">
              I started this journey because I saw businesses wasting money on
              websites that don’t work. I’ve spent over a decade mastering the
              science of high-converting web design and digital marketing—so you
              don’t have to.
            </p>
            <p className="founder-belief">
              I believe your website should be your #1 salesperson, working 24/7
              to bring in customers. That’s exactly what we build.
            </p>
            <p className="founder-funfact">
              💡 Fun Fact: I designed my first website at age 5 and turned my
              passion into a thriving business.
            </p>
          </div>
        </div>
        {/* Candid Work-in-Action Photo */}
        <div className="row mt-4">
          <div className="col">
            <img
              src={work}
              alt="Alameen at Work"
              className="img-fluid rounded shadow founder-candid-photo"
            />
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="container my-5 py-5 text-center cta-section">
        <h2 className="fw-bold display-5 text-uppercase cta-heading">
          Let’s Build Your Winning Website Today
        </h2>

        <div className="my-4 cta-banner-wrapper">
          {/* Replace the src with your high-quality CTA banner graphic */}
          <img
            src={work}
            alt="Call-to-Action Banner"
            className="img-fluid rounded shadow cta-banner-img"
          />
          <div className="mt-3 cta-banner-btn-wrapper">
            <a
              href="/contact"
              className="btn btn-primary btn-lg cta-btn-get-started"
            >
              Get Started Now
            </a>
          </div>
        </div>

        <p className="fs-4 fw-semibold my-4 cta-message">
          🚀 Your competitors are using high-performance websites to grow—why
          not you?
        </p>

        <ul className="list-unstyled fs-5 fw-semibold cta-list">
          <li className="cta-list-item">
            🔹 More clicks. More sales. More business growth.
          </li>
          <li className="cta-list-item">
            🔹 No templates. No fluff. Just real results.
          </li>
          <li className="cta-list-item">🔹 100% satisfaction guarantee.</li>
        </ul>

        <h3 className="fs-3 fw-bold my-4 cta-subheading">
          🎯 Let’s create a website that actually works for you.
        </h3>

        <div className="cta-final-btn-wrapper">
          <a
            href="/contact"
            className="btn btn-outline-primary btn-lg cta-btn-premium"
          >
            Get Your Premium Website Now →
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
