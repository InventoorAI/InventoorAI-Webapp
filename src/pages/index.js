import Head from "next/head";
import { Inter } from "next/font/google";
import { BotMessageSquare } from "lucide-react";
import WithSubnavigation from "@/components/navbar";
import SimpleSidebar from "@/components/sidebar";
import WidgetLayout from "@/components/WidgetLayout";
import Copilot from "@/components/Copilot";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inventoor Dashboard</title>
        <meta name="description" content="Inventoor Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WithSubnavigation />
      <SimpleSidebar>
        <Copilot />
      </SimpleSidebar>
    </>
  );
}
