"use client";
import style from "./searchfilter.module.css";

export default function Searchfilter() {
  const onChangeAll = () => {};

  const onChangeFollow = () => {};

  return (
    <div>
      <h5 className={style.filterTitle}>검색 필터</h5>
      <div className={style.filterSection}>
        <div>
          <label>사용자</label>
          <div className={style.radio}>
            <div>모든 사용자</div>
            <input
              type="radio"
              name="pf"
              defaultChecked
              onChange={onChangeAll}
            />
          </div>
          <div className={style.radio}>
            <div>내가 팔로우하는 사람들</div>
            <input
              type="radio"
              name="pf"
              value="on"
              onChange={onChangeFollow}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
