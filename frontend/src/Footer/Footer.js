import React from "react";
import { styled } from "styled-components";
import logo from "../assets/img/logo.svg";
import twitter from "../assets/img/twitter.svg";
import facebook from "../assets/img/facebook.svg";
import discord from "../assets/img/discord.svg";
import dm from "../assets/img/dm.svg";
const FooterWrapper = styled.footer`
  background-color: #fff;
  color: #aaa;
`;

const InnerWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  grid-template-columns: repeat(1, 1fr);
  padding: 2rem;
  @media (min-width: 1200px) {
    grid-template-columns: 500px repeat(auto-fit, 220px) 100px;
    width: 70%;
  }
  div {
    p {
      width: 70%;
    }
    ul {
      list-style: none;
      li {
        width: fit-content;
      }
    }
  }
`;
const FooterHeading = styled.h3`
  color: #4348db;
  font-weight: lighter;
  margin-bottom: 1rem;
`;

const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  width: 70%;
  margin: 0 auto;
  border-top: 1px solid #aaa;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;
const FooterMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <InnerWrapper>
        <LogoWrapper>
          <img src={logo} alt="logo" />
          <p>
            Welcome to the Job job_hunt website! Here, you will find the latest
            job offer! Join our community, and apply today!
          </p>
        </LogoWrapper>
        <div>
          <FooterHeading>Discover</FooterHeading>
          <FooterMenuList>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Discussion Forum</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </FooterMenuList>
        </div>
        <div>
          <FooterHeading>Resources</FooterHeading>
          <FooterMenuList>
            <li>
              <a>Guides</a>
            </li>
            <li>
              <a>Market Analysis</a>
            </li>
            <li>
              <a>Online Courses</a>
            </li>
            <li>
              <a>Upcoming Events</a>
            </li>
          </FooterMenuList>
        </div>
        <div>
          <FooterHeading>Community</FooterHeading>
          <FooterMenuList>
            <li>
              <a>Forum</a>
            </li>
            <li>
              <a>Discord</a>
            </li>
            <li>
              <a>Blog Community</a>
            </li>
            <li>
              <a>Our Partners</a>
            </li>
          </FooterMenuList>
        </div>
      </InnerWrapper>
      <CopyrightWrapper>
        <p>© 2023 job_hunt. All rights reserved</p>
        <ul>
          <li>
            <img src={twitter} alt="twitter" />
          </li>
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={discord} alt="discord" />
          </li>
          <li>
            <img src={dm} alt="dm" />
          </li>
        </ul>
      </CopyrightWrapper>
    </FooterWrapper>
  );
};
