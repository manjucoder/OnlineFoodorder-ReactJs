import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
function Fooddetails({ match }) {
  const [data, setserverData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    Object.keys(location.datas).map((key) => {
      return location.datas[key].map((data) => {
        if (data.strCategory === match.params.strCategory) {
          setserverData(data);
        }
      });
    });
  }, []);

  return (
    data && (
      <>
        <div className="container container-mg">
          <Link
            to="/"
            className="btn btn-primary"
            style={{ marginBottom: "1em" }}
          >
            ← Back <span class="badge bg-secondary"></span>
          </Link>
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <img
                  src={data.strCategoryThumb}
                  className="iimg-responsive view-img"
                  alt={data.strCategory}
                />
              </div>
            </div>
            <div className="col-md-7">
              <h1>{data.strCategory}</h1>
              <p>{data.strCategoryDescription}</p>
              <Link
                to={{
                  pathname: "/checkout",
                  datas: data.strCategory,
                }}
                className="btn btn-danger btn-lg button"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  );
}
export default Fooddetails;
