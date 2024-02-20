

"use client";

import { useEffect, useState } from "react";
import Follow from "@/app/(afterLogin)/_component/follow";
import style from "./followsection.module.css";

export default function FollowRecommend() {
	const [followdata, setFollowdata] = useState([]);
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users/",
				);

				const jsonData = await response.json();
				setFollowdata(jsonData);
				console.log(jsonData);
			} catch (error) {
				console.log("fetchData 에러 발생:", error);
			}
		};
		fetchData();
	}, []);


	return (
		<div className={style.followSectionWrap}>
			{followdata.map((item, idx) => (
				<Follow
					key={Math.random()}
					size={30}
					person={{
						name: item.name,
						username: item.username,
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