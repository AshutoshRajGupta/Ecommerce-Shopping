import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            We are passionate about timepieces that not only tell time but also
            tell stories. Founded with a vision to curate a collection of
            watches that reflect elegance, precision, and individuality, we
            strive to offer more than just products – we offer experiences. Each
            watch in our collection is carefully selected to embody
            craftsmanship and style, catering to diverse tastes and preferences.
            Whether you're drawn to classic sophistication, modern minimalism,
            or bold statement pieces, we believe there's a watch here for every
            moment of your journey. With a commitment to quality, authenticity,
            and exceptional customer service, we invite you to explore our
            carefully curated selection and find the perfect timepiece that
            resonates with your unique essence.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
