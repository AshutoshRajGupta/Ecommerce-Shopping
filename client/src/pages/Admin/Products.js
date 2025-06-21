import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Spin } from "antd";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get all products
  const getAllProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      if (data?.products) {
        setProducts(data.products);
      } else {
        toast.error("No products available");
      }
    } catch (error) {
      toast.error("Something went wrong while fetching products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center mb-4">ALL PRODUCTS</h1>

          {loading ? (
            <div className="text-center">
              <Spin size="large" />
            </div>
          ) : products.length === 0 ? (
            <div className="alert alert-info text-center">
              No products available. Please add some products.
            </div>
          ) : (
            <div className="d-flex flex-wrap justify-content-center">
              {products.map((p) => (
                <Link
                  key={p._id}
                  to={`/dashboard/admin/product/${p.slug}`}
                  className="product-link m-2"
                >
                  <div className="card product-card" style={{ width: "18rem" }}>
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description}</p>
                      <p className="text-muted">
                        <strong>Price:</strong> ₹{p.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
