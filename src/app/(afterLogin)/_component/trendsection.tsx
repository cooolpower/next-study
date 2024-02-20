import style from "./trendsection.module.css";
import Trend from "@/app/(afterLogin)/_component/trend";

export default function TrendSection() {
  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
        <h3>나를 위한 트랜드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}
