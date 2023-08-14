import ArticalView from "@/imports/ArticalView";
import BannerView from "@/imports/BannerView";
import DownloadView from "@/imports/DownloadView";
import Footer from "@/imports/Footer";
import HealthView from "@/imports/HealthView";
import LandingView from "@/imports/LandingView";
import NavBar from "@/imports/NavBar";
import ServiceView from "@/imports/ServiceView";
import Head from "next/head";
import React from "react";
import styled from "styled-components";

const index = () => {
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <MainDivWrap>
        <LandingView />
        <ServiceView />
        <HealthView />
        <DownloadView />
        <BannerView />
        <ArticalView />
        <Footer />
      </MainDivWrap>
    </>
  );
};

export default index;

const MainDivWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;
