import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Orderinfo() {
  const location = useLocation();
  const rand = Math.round(1000 + Math.random() * (1000000 - 1000));
  return (
    <>
      <div className="container container-mg">
        <Link to="/" className="btn btn-primary">
          ← Back <span class="badge bg-secondary"></span>
        </Link>
        <div className="row justify-content-md-center">
          <div className="col-md-9 ">
            <h2 className="text-center">Order Information</h2>
            <div className="panel">
              <div class="alert alert-success" role="alert">
                SuccessFully!!! Your Order is Placed.
              </div>
              <p>Order Id : {`ODID${rand}`}</p>
              <p>Shipping Address : {location.datas.shippingAddress}</p>
              <p>Contact No: {location.datas.contactNo}</p>
              <p>Purchase Item: {location.datas.purchaseItem}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
