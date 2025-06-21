import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ]);
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  // Fetch orders
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/all-orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching orders. Please try again later.");
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  // Update order status
  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(`/api/v1/auth/order-status/${orderId}`, {
        status: value,
      });
      toast.success("Order status updated successfully.");
      getOrders();
    } catch (error) {
      console.log(error);
      toast.error("Error updating order status.");
    }
  };

  return (
    <Layout title={"All Orders Data"}>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center mb-4">All Orders</h1>
          {orders.length === 0 ? (
            <div className="alert alert-info text-center">
              No orders found. Please check back later.
            </div>
          ) : (
            orders.map((o, i) => (
              <div key={o._id} className="border shadow mb-4 p-3 rounded">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Status</th>
                      <th scope="col">Buyer</th>
                      <th scope="col">Date</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{i + 1}</td>
                      <td>
                        <Select
                          bordered={false}
                          value={o?.status}
                          onChange={(value) => handleChange(o._id, value)}
                          style={{ width: 150 }}
                        >
                          {status.map((s, index) => (
                            <Option key={index} value={s}>
                              {s}
                            </Option>
                          ))}
                        </Select>
                      </td>
                      <td>{o?.buyer?.name}</td>
                      <td>{moment(o?.createdAt).fromNow()}</td>
                      <td>{o?.payment?.success ? "Success" : "Failed"}</td>
                      <td>{o?.products?.length}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="container mt-3">
                  {o?.products?.map((p) => (
                    <div key={p._id} className="row mb-3 p-3 border rounded">
                      <div className="col-md-3">
                        <img
                          src={`/api/v1/product/product-photo/${p._id}`}
                          className="img-fluid"
                          alt={p.name}
                          style={{ maxHeight: "120px", objectFit: "cover" }}
                        />
                      </div>
                      <div className="col-md-9">
                        <h5>{p.name}</h5>
                        <p>
                          {p.description.length > 30
                            ? `${p.description.substring(0, 30)}...`
                            : p.description}
                        </p>
                        <p>
                          <strong>Price:</strong> ₹{p.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AdminOrders;
