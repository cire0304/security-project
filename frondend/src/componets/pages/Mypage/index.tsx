import React, { useState, useEffect } from "react";
import { getMypage } from "../../api/myPage";

const MyPage = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMypage();

      if (res !== undefined) {
        setData(res.data);
        console.log(res);
        
      } else {
        console.log('실패');
        setData("asd");
      }
    };

    fetchData();
  }, []);

  return <div>data : {data}</div>;
};

export default MyPage;
