import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./card.module.css";

const Card = ({ link, date, title, id, image }) => {
  return (
    <Link to={link} className={styles.card} key={id}>
      <GatsbyImage image={image} alt="image" className={styles.cardPhoto} />
      <h3 className={styles.cardLink}>{title}</h3>
      <p className={styles.cardDate}>Posted: {date}</p>
    </Link>
  );
};

export default Card;
