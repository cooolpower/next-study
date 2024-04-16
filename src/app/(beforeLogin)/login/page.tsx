"use client";

import { useRouter } from "next/navigation";
import MainLogin from "@/app/(beforeLogin)/_components/main-login";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <MainLogin />;
}
