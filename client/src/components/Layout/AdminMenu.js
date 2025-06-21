import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaPlus,
  FaBoxOpen,
  FaTags,
  FaClipboardList,
  FaUsersCog,
} from "react-icons/fa";

const AdminMenu = () => {
  return (
    <div className="admin-menu p-4 bg-white rounded shadow-sm border">
      <h5 className="text-center text-primary fw-bold mb-4">
        Admin Control Panel
      </h5>

      <div className="list-group admin-list">
        <NavLink
          to="/dashboard/admin/create-category"
          className="admin-link list-group-item list-group-item-action"
        >
          <FaTags className="admin-icon" />
          <span>Create Category</span>
        </NavLink>

        <NavLink
          to="/dashboard/admin/create-product"
          className="admin-link list-group-item list-group-item-action"
        >
          <FaPlus className="admin-icon" />
          <span>Create Product</span>
        </NavLink>

        <NavLink
          to="/dashboard/admin/products"
          className="admin-link list-group-item list-group-item-action"
        >
          <FaBoxOpen className="admin-icon" />
          <span>Manage Products</span>
        </NavLink>

        <NavLink
          to="/dashboard/admin/orders"
          className="admin-link list-group-item list-group-item-action"
        >
          <FaClipboardList className="admin-icon" />
          <span>Order Management</span>
        </NavLink>

        <NavLink
          to="/dashboard/admin/users"
          className="admin-link list-group-item list-group-item-action"
        >
          <FaUsersCog className="admin-icon" />
          <span>User Accounts</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
