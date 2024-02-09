import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          {/* <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
            </div>
          </div> */}
          <div className="col-md-9 d-flex justify-content-center align-items-center">
            <div
              className="card w-75 p-3 text-center"
              style={{
                backgroundColor: "#f0f0f0",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                className="mb-4"
                style={{
                  color: "#333",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "bold",
                }}
              >
                {auth?.user?.name}
              </h3>
              <h4
                className="mb-4"
                style={{
                  color: "#555",
                  fontFamily: "Arial, sans-serif",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                {auth?.user?.email}
              </h4>
              <p
                className="mb-0"
                style={{
                  color: "#777",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "bold",
                }}
              >
                {auth?.user?.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
