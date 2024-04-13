import React, { useState, useEffect } from "react";
import Search from "../component/Search";
import axios from "axios";
import Picture from "../component/Picture";

const Homepage = () => {
  let [page, setpage] = useState(1);
  let [input, setinput] = useState("");
  let [data, setdata] = useState(null);
  let [current, setcurrent] = useState("");
  let auth = "JggSrAbem5G0Fz0yPF3x64nJqGHQdDBrg82mwMSy6MsxXSC4LHBSI0yw";
  let initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=15`;

  const search = async (url) => {
    if (input === "") {
      let result = await axios.get(initialURL, {
        headers: { Authorization: auth },
      });
      setdata(result.data.photos);
      setcurrent(input);
    } else {
      let result = await axios.get(url, {
        headers: { Authorization: auth },
      });
      setdata(result.data.photos);
      setcurrent(input);
    }
  };

  const morePicture = async () => {
    let newURL;
    setpage(page + 1);
    if (current === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${current}&page=${
        page + 1
      }&per_page=15`;
    }
    let result = await axios.get(newURL, { headers: { Authorization: auth } });
    setdata(data.concat(result.data.photos));
  };

  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setinput={setinput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>更多圖片</button>
      </div>
    </div>
  );
};

export default Homepage;
