import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "./layout.module.css";
import Footer from "./footer.js";

// ... import statements

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <nav>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <div className={styles.siteHeader}>
          <header className={styles.siteTitleContainer}>
            <h2 className={styles.siteTitle}>{data.site.siteMetadata.title}</h2>
          </header>
          <div>
            <ul className={styles.navLinks}>
              <li className={styles.navLinkItem}>
                <Link to="/" className={styles.navLinkText}>
                  Home
                </Link>
              </li>
              <li className={styles.navLinkItem}>
                <Link to="/podcast" className={styles.navLinkText}>
                  Podcast
                </Link>
              </li>
              <li className={styles.navLinkItem}>
                <Link to="/blog" className={styles.navLinkText}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className={styles.pageContent}>
        <h1 className={styles.heading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
