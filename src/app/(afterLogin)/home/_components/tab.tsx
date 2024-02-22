"use client";

import {useState} from "react";
import style from './tab.module.css';

export default function Tab(){
	const [tab, setTab] = useState('rec');
	const onClickRec = () => {
		setTab('rec');
	}
	const onClickFol = () => {
		setTab('fol');
	}
	return(
			<div className={style.homeFixed}>
					<div className={style.homeText}>홈</div>
					<div className={style.homeTab}>
							<div className={tab === 'rec' ? style.active	: ''} onClick={onClickRec} >
							추천
							<div className={style.tabIndicator} hidden={tab === 'fol'}></div>
							</div>
							<div className={tab === 'fol' ? style.active	: ''}  onClick={onClickFol}>
							팔로우 중
							<div className={style.tabIndicator} hidden={tab === 'rec'}></div>
							</div>
					</div>
			</div>
	);
}