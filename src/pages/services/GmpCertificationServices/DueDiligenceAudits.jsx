import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DueDiligenceAudits() {
  const listRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1400 });
    // AOS.refresh();
  }, []);

  useEffect(() => {
    if (listRefs.current) {
      ("");
    }
    const observers = [];

    listRefs.current.forEach((listRef) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const listItems =
              listRef.current.querySelectorAll(".list-group-item");
            listItems.forEach((item) => {
              item.classList.add("list-item-animation");
            });
            observer.unobserve(entry.target);
          }
        });
      });

      if (listRef.current) {
        observer.observe(listRef.current);
      }
      observers.push(observer);
    });
  }, []);
  return (
    <>
      <div className="top_container m-3">
        <div className="service_headingr">
          <h1 className="heading service-head-text" data-aos="fade-down">
            Due Diligence Audits
          </h1>
        </div>
        <div className="paragraph_container">
          {/* <p className="paragraph" data-aos="fade-down">
            At VidyaGxP, we're redefining the landscape of manufacturing
            intelligence with our pioneering Site Selection solutions. SteDesignQualificationValidation";
            into the future, we offer more than just software; we provide a
            gateway to excellence in manufacturing processes. Our Site Selection
            service is at the heart of this transformation, designed to elevate
            your operations to new heights of efficiency, compliance, and
            quality.
          </p> */}
        </div>
      </div>
      <div className="container-fluid section2 py-5 mb-5">
        <div className="container">
          <div className="row g-5 align-items-center row-xm">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img
                  className="img-fluid"
                  //   style={{ backdropFilter: 'none', opacity: 0.5 }}
                  style={{ width: "95%" }}
                  src="/duediligence.jpg"
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h3 className="why_line" data-aos="fade-left">
                Due Diligence Audits
              </h3>
              <div className="content_container ">
                <ul>
                  <li data-aos="fade-left" className=" fs-5 ">
                    {/* <b>Seamless Compliance:- </b> */}
                    Our due diligence audits help clients thoroughly assess the
                    compliance status of potential partners or acquisitions.
                  </li>
                  {/* <li data-aos="fade-left">
                    <b>Unmatched Efficiency:-</b>
                    Eliminate manual errors and reduce processing times with our automated, AI-driven platform. VidyaGxP
                    turns your data into actionable insights, streamlining workflows and boosting productivity.
                  </li> */}
                  {/* <li data-aos="fade-left">
                    <b>Robust Data Integrity:-</b>
                    Safeguard your critical manufacturing data with state-of-the-art security measures. Our electronic batch
                    records offer unparalleled transparency, traceability, and trust, thanks to advanced encryption, electronic
                    signatures, and comprehensive audit trails.
                  </li>
                  <li data-aos="fade-left">
                    <b>Real-time Operational Insight:Unmatched Efficiency:-</b>
                    Make informed decisions with real-time data at your fingertips. Our intuitive dashboards provide a panoramic
                    view of your manufacturing process, highlighting opportunities for optimization and innovation.
                  </li>
                  <li data-aos="fade-left">
                    <b>Scalable Solutions:-</b>
                    Whether you're a start-up or an established enterprise, VidyaGxP grows with you. Our flexible, scalable
                    solutions can be tailored to fit your unique needs, ensuring you're always ahead of the curve.
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="middle_line_container m-3" data-aos="zoom-in">
        <h4 className="middle_line">Join the VidhaGxP Revolution</h4>
        <p>
          Embrace the future with VidyaGxP and transform your electronic batch manufacturing records into a
          powerhouse of efficiency and compliance. Let's pave the way for manufacturing excellence together – because when
          you partner with VidyaGxP, you're not just optimizing your operations; you're setting a new standard for
          the industry.
        </p>
      </div> */}

      {/* <div className="bottom_line_container">
        <h5 className="bottom_line" data-aos="zoom-in">
          "Discover the VidyaGxP difference. Elevate your manufacturing process now."
        </h5>
      </div > */}
    </>
  );
}
