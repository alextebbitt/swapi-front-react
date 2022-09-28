import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "styled-components";

const FooterDiv = styled.div`
  background-color: black;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  gap: 2rem;
  font-size: 35px;
`;
const Copy = styled.p`
  color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;

  font-size: 20px;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <Logo>
        <a href="https://www.facebook.com" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <YouTubeIcon />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <InstagramIcon />
        </a>
      </Logo>
      <Copy>&copy; 2022 Star wars ---(Alex)--- All rights reserved.</Copy>
    </FooterDiv>
  );
};

export default Footer;
