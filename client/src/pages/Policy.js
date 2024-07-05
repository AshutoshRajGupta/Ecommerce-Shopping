import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src="/images/pp.jpg" alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4 policyy">
          <p>
            We use your Personal Information only for providing and improving
            the Site. By using the Site, you agree to the collection and use of
            information in accordance with this policy. Information Collection
            and Use While using our Site, we may ask you to provide us with
            certain personally identifiable information that can be used to
            contact or identify you. Personally identifiable information may
            include, but is not limited to your name, email address, and phone
            number ("Personal Information").
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
