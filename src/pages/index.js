import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to Color Theory. Or if you're in England, Colour Theory</p>
      <StaticImage alt="A steaming hot babe" src="../images/duaLipa.jpg" />
    </Layout>
  );
};

export default IndexPage;
