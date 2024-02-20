"use client";

import { useEffect, useState } from "react";
import Avatar from "@/app/react/avatar";
import style from "./profile.module.css";

export default function Profile() {
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
    <div className={style.profileWrap}>
      {data.map((item, idx) => (
        <Avatar
          key={Math.random()}
          size={30}
          person={{
            name: item.name,
            image: "/yRsRRjGO.jpg",
            email: item.email,
            address:
              item.address.street +
              " " +
              item.address.suite +
              " " +
              item.address.city,
          }}
        />
      ))}
    </div>
  );
}
