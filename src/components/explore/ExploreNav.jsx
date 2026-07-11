import React from "react";
import styled from "./ExploreNav.module.css";
import { HashLink as Link } from "react-router-hash-link";

const exploreLinks = [
  { linkName: "Romance", link: "romance" },
  { linkName: "BookTok Sensations", link: "BookTok" },
  { linkName: "Spicy Book ", link: "spice" },
  { linkName: "Fantasy", link: "fantasy" },
  { linkName: "Fiction", link: "fiction" },
  { linkName: "Easy Reads", link: "easy-reads" },
];

const ExploreNav = () => {
  const links = exploreLinks.map(({ linkName, link }) => {
    return (
      <li key={linkName}>
        <Link
          to={`#${link}`}
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          {linkName}
        </Link>
      </li>
    );
  });

  return (
    <nav className={styled["explore-nav"]}>
      <h2 className={styled.title}>Categories</h2>
      <ul className={styled.links}>{links}</ul>
    </nav>
  );
};

export default ExploreNav;
