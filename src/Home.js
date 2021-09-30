import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function Home() {
  const [serverData, setserverData] = useState([]);
  const [searchKey, setsearchKey] = useState("");
  const history = useHistory();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setserverData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const findSearch = () => {
    var k;
    Object.keys(serverData).map((key) => {
      serverData[key].map((data) => {
        if (data.strCategory.toLowerCase().includes(searchKey)) {
          k = data.strCategory;
        }
      });
    });

    history.push({
      pathname: `/fooddetails/${k}`,
      datas: serverData,
    });
  };
  const search = (event) => {
    if (event.key === "Enter") {
      findSearch();
    }
  };
  return (
    <div className="container">
      <h1 className="head">Family Restaurant </h1>
      <div className="row">
        <div className="col-md-10">
          <input
            type="text"
            placeholder="search..."
            onKeyDown={(event) => search(event)}
            onChange={(e) => setsearchKey(e.target.value.replace(/ /g, "-"))}
          />
        </div>
        <div className="col-md-2">
          <button
            type="button"
            className="btn btn-danger btn-lg button"
            onClick={() => findSearch()}
          >
            Search
          </button>
        </div>
      </div>

      <div className="row">
        {Object.keys(serverData).map((key) => {
          return serverData[key].map((data, index) => {
            return (
              <div className="col-md-4 " key={`contain${index}`}>
                <div className="card">
                  <img
                    src={data.strCategoryThumb}
                    className="img-responsive profile"
                    key={index}
                    alt={data.title}
                  />
                  <Link
                    to={{
                      pathname: `/fooddetails/${data.strCategory}`,
                      datas: serverData,
                    }}
                  >
                    <p className="title" key={`title${index}`}>
                      {data.strCategory}
                    </p>
                  </Link>
                </div>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}
