import { useState, useEffect } from "react";

const ServerData = () => {
  const [ServerData, setServerData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let res = await fetch("https://fortnite-api.com/v2/news");
      res = await res.json();
      res = res.data.br.motds;
      setServerData(res);
    };
    getData();
  }, []);
  return (
    <div>
      {ServerData.map((obj) => (
        <div>
          <h1>{obj.title}</h1>
          <p>{obj.body}</p>
          <img
            style={{ height: "200px", width: "350px" }}
            src={obj.image}
            alt={obj.title}
          />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default ServerData;
