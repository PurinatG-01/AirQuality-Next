import Head from "next/head";
import React from "react"
import PageLayout from "../components/PageLayout";
import Dashboard from "../components/Dashboard";
import Login from "./login"
export default function Home() {
  return (

    <Login />
    // <PageLayout>
    //   <Dashboard />
    // </PageLayout>
  );
}
