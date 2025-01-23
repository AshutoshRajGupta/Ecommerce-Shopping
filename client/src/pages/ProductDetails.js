import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container product-details">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="350"
            width={"350px"}
          />
        </div>

        <div
          className="col-md-6 product-details-info"
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h1
            style={{
              textAlign: "left",
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            PRODUCT DETAILS
          </h1>
          <hr />
          <h5
            style={{ textAlign: "left", marginBottom: "10px", color: "#555" }}
          >
            <i className="fas fa-tag"></i>
            Name: {product.name}
          </h5>
          <h5
            style={{ textAlign: "left", marginBottom: "10px", color: "#555" }}
          >
            {" "}
            <i className="fas fa-info-circle"></i>
            Description: {product.description}
          </h5>
          <h5
            style={{ textAlign: "left", marginBottom: "10px", color: "#555" }}
          >
            <i className="fas fa-rupee-sign"></i>
            Price:{" "}
            {product?.price?.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </h5>
          <h5
            style={{ textAlign: "left", marginBottom: "20px", color: "#555" }}
          >
            <i className="fas fa-list"></i>
            Category: {product?.category?.name}
          </h5>
          <button
            className="btn btn-secondary ms-1"
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              backgroundColor: "#007bff",
              borderColor: "#007bff",
              color: "#fff",
            }}
            onClick={() => {
              setCart([...cart, product]);
              localStorage.setItem("cart", JSON.stringify([...cart, product]));
              toast.success("Item Added to cart");
            }}
          >
            <i className="fas fa-shopping-cart"></i>
            ADD TO CART
          </button>
        </div>
      </div>
      <hr />
      <div className="row container similar-products">
        <h4>SIMILAR PRODUCTS ➡️</h4>
        {relatedProducts.length < 1 && (
          <p className="text-center">NO SIMILAR PRODUCTS FOUNDS</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" key={p._id}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                    })}
                  </h5>
                </div>
                <p className="card-text ">
                  {p.description.substring(0, 60)}...
                </p>
                <div className="card-name-price">
                  <button
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
