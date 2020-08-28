import Head from "next/head";
import PageLayout from "../components/PageLayout";
import Dashboard from "../components/Dashboard";


export default function Home() {
  return (
    <PageLayout>
      <Dashboard/>
    </PageLayout>
  );
}
