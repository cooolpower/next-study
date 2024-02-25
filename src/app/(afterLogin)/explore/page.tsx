import style from "@/app/(afterLogin)/_component/trendsection.module.css";
import Searchform from "@/app/(afterLogin)/_component/searchform";
import Trend from "@/app/(afterLogin)/_component/trend";

export default function Explore() {
  return (
    <>
      <Searchform />
      <div className={style.trendBg}>
        <div className={style.trend}>
          <h3>나를 위한 트랜드</h3>
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
        </div>
      </div>
    </>
  );
}
