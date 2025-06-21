import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import {
  FaUserShield,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaSignInAlt,
  FaClock,
  FaUserTag,
  FaCheckCircle,
} from "react-icons/fa";

const AdminDashboard = () => {
  const [auth] = useAuth();

  // Mock data (replace with actual values from backend if available)
  const mockLoginStats = {
    lastLogin: "2025-06-20 14:45 IST",
    loginCount: 128,
    createdAt: "2024-01-10",
  };

  const permissions = [
    "Create & Manage Categories",
    "Create & Manage Products",
    "View & Process Orders",
    "Manage Users",
    "Access Dashboard Reports",
  ];

  return (
    <Layout title={"Admin Dashboard"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>

          <div className="col-md-9">
            <div
              className="card p-4 mb-4 shadow-sm"
              style={{ borderRadius: "10px" }}
            >
              <div className="d-flex align-items-center mb-3">
                <div
                  className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
                  style={{ width: 70, height: 70, fontSize: "2rem" }}
                >
                  <FaUserShield />
                </div>
                <div className="ms-3">
                  <h4 className="mb-0">{auth?.user?.name}</h4>
                  <small className="text-muted">Administrator</small>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6 mb-3">
                  <h6 className="text-muted">
                    <FaEnvelope className="me-2" />
                    Email
                  </h6>
                  <p>{auth?.user?.email}</p>
                </div>
                <div className="col-md-6 mb-3">
                  <h6 className="text-muted">
                    <FaPhoneAlt className="me-2" />
                    Contact
                  </h6>
                  <p>{auth?.user?.phone || "Not Provided"}</p>
                </div>
                <div className="col-md-12 mb-3">
                  <h6 className="text-muted">
                    <FaMapMarkerAlt className="me-2" />
                    Address
                  </h6>
                  <p>{auth?.user?.address || "No address added yet"}</p>
                </div>
              </div>
            </div>

            {/* Login Stats Card */}
            <div
              className="card p-4 mb-4 shadow-sm"
              style={{ borderRadius: "10px" }}
            >
              <h5 className="mb-3 text-primary">Login Statistics</h5>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <h6>
                    <FaSignInAlt className="me-2" />
                    Last Login
                  </h6>
                  <p>{mockLoginStats.lastLogin}</p>
                </div>
                <div className="col-md-4 mb-3">
                  <h6>
                    <FaClock className="me-2" />
                    Total Logins
                  </h6>
                  <p>{mockLoginStats.loginCount}</p>
                </div>
                <div className="col-md-4 mb-3">
                  <h6>
                    <FaUserTag className="me-2" />
                    Account Created
                  </h6>
                  <p>{mockLoginStats.createdAt}</p>
                </div>
              </div>
            </div>

            {/* Permissions Card */}
            <div
              className="card p-4 shadow-sm"
              style={{ borderRadius: "10px" }}
            >
              <h5 className="mb-3 text-primary">Role-Based Permissions</h5>
              <ul className="list-group list-group-flush">
                {permissions.map((perm, idx) => (
                  <li
                    key={idx}
                    className="list-group-item d-flex align-items-center"
                  >
                    <FaCheckCircle className="me-2 text-success" />
                    {perm}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
