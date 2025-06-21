import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  // Fetch all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      toast.error("Error while fetching categories");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Handle form submit
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      productData.append("shipping", shipping);

      const { data } = await axios.post(
        "/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      toast.error("Something went wrong while creating product");
    }
  };

  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="container-fluid p-3 dashboard">
        <div className="row">
          <div className="col-md-3 mb-3">
            <AdminMenu />
          </div>

          <div className="col-md-9">
            <div className="card shadow-sm p-4">
              <h4 className="mb-4 text-primary">Create New Product</h4>

              <form onSubmit={handleCreate}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Category</label>
                  <Select
                    bordered={true}
                    placeholder="Select a category"
                    size="large"
                    showSearch
                    className="w-100"
                    onChange={(value) => setCategory(value)}
                  >
                    {categories?.map((c) => (
                      <Option key={c._id} value={c._id}>
                        {c.name}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Product Image
                  </label>
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    className="form-control"
                    onChange={(e) => setPhoto(e.target.files[0])}
                  />
                </div>

                {photo && (
                  <div className="mb-3 text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product"
                      height="200px"
                      className="img img-thumbnail"
                    />
                  </div>
                )}

                <div className="mb-3">
                  <label className="form-label fw-semibold">Product Name</label>
                  <input
                    type="text"
                    value={name}
                    placeholder="Enter product name"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea
                    value={description}
                    placeholder="Enter product description"
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Price (₹)</label>
                  <input
                    type="number"
                    value={price}
                    placeholder="Enter price"
                    className="form-control"
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Quantity</label>
                  <input
                    type="number"
                    value={quantity}
                    placeholder="Enter quantity"
                    className="form-control"
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Shipping Available?
                  </label>
                  <Select
                    bordered={true}
                    placeholder="Select Shipping"
                    size="large"
                    className="w-100"
                    onChange={(value) => setShipping(value)}
                  >
                    <Option value="1">Yes</Option>
                    <Option value="0">No</Option>
                  </Select>
                </div>

                <button type="submit" className="btn btn-success">
                  CREATE PRODUCT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
