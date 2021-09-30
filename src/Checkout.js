import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

export default function Checkout() {
  const location = useLocation();
  const history = useHistory();
  const [userDetails, setUserDetails] = useState({
    shippingAddress: "",
    contactNo: "",
    purchaseItem: "",
  });
  useEffect(() => {
    setUserDetails({ ...userDetails, purchaseItem: location.datas });
  }, []);
  const formData = () => {
    if (userDetails.shippingAddress !== "" && userDetails.contactNo !== "") {
      history.push({
        pathname: `orderinfo`,
        datas: userDetails,
      });
    } else {
      alert("Error!! Empty Data Found. Please Fill the form data.");
    }
  };
  return (
    <>
      <div className="container container-mg">
        <Link to="/" className="btn btn-primary">
          ← Back <span class="badge bg-secondary"></span>
        </Link>
        <div className="row justify-content-md-center">
          <div className="col-md-9 ">
            <h2 className="text-center">Shipping Details</h2>
            <div className="panel">
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Shipping Address
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      shippingAddress: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Contact No
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Contact No"
                  required
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      contactNo: e.target.value,
                    })
                  }
                />
              </div>
              {/* <Link
                to={{
                  pathname: `orderinfo`,
                  datas: userDetails,
                }}
                className="btn btn-danger btn-lg button"
              >
                Purchase
              </Link> */}
              <button
                type="button"
                className="btn btn-danger btn-lg button"
                onClick={() => formData()}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
