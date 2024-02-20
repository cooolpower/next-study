// async function getArtist() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/comments/1`);
//   return res.json();
// }
"use client";

import { useEffect, useState } from "react";

export default function Fetch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/",
        );

        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.log("fetchData 에러 발생:", error);
      }
    };
    fetchData();
  }, []);

  return (
    data.map((item, idx) => <div key={Math.random()}>{item.id}</div>)
  );
}
