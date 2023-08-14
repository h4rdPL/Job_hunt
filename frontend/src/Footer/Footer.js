import React from 'react'
import { styled } from 'styled-components'
import logo from '../assets/img/logo.svg'
import twitter from '../assets/img/twitter.svg'
import facebook from '../assets/img/facebook.svg'
import discord from '../assets/img/discord.svg'
import dm from '../assets/img/dm.svg'
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
    color: #4348DB;
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
    gap: .75rem;
`;
export const Footer = () => {
  return (
    <FooterWrapper>
        <InnerWrapper>
            <LogoWrapper>
                <img src={logo} alt='logo' />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis dolor sit amet lorem. 
                </p>
            </LogoWrapper>
            <div>
                <FooterHeading>
                    Menu Item
                </FooterHeading>
                <FooterMenuList>
                    <li>
                        Menu link
                    </li>
                    <li>
                        Another link
                    </li>
                    <li>
                        Third menu 
                    </li>
                    <li>
                        Fourth Link
                    </li>
                </FooterMenuList>
            </div>
            <div>
                <FooterHeading>
                    Menu Item
                </FooterHeading>
                <FooterMenuList>
                    <li>
                        Menu link
                    </li>
                    <li>
                        Another link
                    </li>
                    <li>
                        Third menu 
                    </li>
                    <li>
                        Fourth Link
                    </li>
                </FooterMenuList>
            </div>
            <div>
                <FooterHeading>
                    Menu Item
                </FooterHeading>
                <FooterMenuList>
                    <li>
                        Menu link
                    </li>
                    <li>
                        Another link
                    </li>
                    <li>
                        Third menu 
                    </li>
                    <li>
                        Fourth Link
                    </li>
                </FooterMenuList>
            </div>
        </InnerWrapper>
        <CopyrightWrapper>
            <p>
            © 2023 cryptojob. All rights reserved
            </p>
            <ul>
                <li>
                    <img src={twitter} alt='twitter' />
                </li>
                <li>
                    <img src={facebook} alt='facebook' />
                </li>
                <li>
                    <img src={discord} alt='discord' />
                </li>
                <li>
                    <img src={dm} alt='dm' />
                </li>
            </ul>
        </CopyrightWrapper>

    </FooterWrapper>
  )
}
