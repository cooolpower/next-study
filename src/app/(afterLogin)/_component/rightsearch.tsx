"use client";

import { usePathname } from "next/navigation";
import style from "./rightsearch.module.css";
import Searchfilter from "@/app/(afterLogin)/_component/searchfilter";
import Searchform from "./searchform";

export default function Rightsearch() {
  const pathname = usePathname();

  if (pathname === "/search") return <Searchfilter />;

  if (pathname === "/explore") return null;

  return <Searchform />;
}
