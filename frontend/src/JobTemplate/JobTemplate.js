import React, { useEffect, useState } from 'react'
import logo from "../assets/img/CompanyLogo/stellar.svg"
import verify from "../assets/img/verify.svg"
import location from "../assets/img/location.svg"
import money from "../assets/img/money.svg"
import share from "../assets/img/share.svg"
import copy from "../assets/img/copy.svg"
import logo1 from "../assets/img/CompanyLogo/logo1.svg"
import logo2 from "../assets/img/CompanyLogo/logo2.svg"
import logo3 from "../assets/img/CompanyLogo/logo3.svg"
import logo4 from "../assets/img/CompanyLogo/logo4.svg"

import { styled } from 'styled-components'
const Wrapper = styled.div`
    margin: 0 auto;
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 90%;
    border-radius: 13px;
    padding: 2rem;
    @media (min-width: 1200px) {
        width: 95%;
    }
    
    @media (min-width: 1400px) {
        width: 75%;
    }
`;
const JobfferWrapper = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 13px;
    gap: 1.5rem;
    background-color: #fff;

    @media (min-width: 1200px) {
        flex-direction: row;
    }
`;
const Heading = styled.h2`
    color: #4348DB;
    font-weight: 400;
`;
const ImageWrapper = styled.div`
    display: flex;
    gap:1rem;

`;
const Image = styled.div`
    background-color: #F1F2FF;
    padding: 2rem;
    border-radius: 10px;
    width: fit-content;
    align-self: flex-start;
`;
const CompanyImage = styled.img`
`;
const Information = styled.ul`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 1rem;
    list-style: square;
    @media (min-width: 768px) {
        flex-direction: row;
        align-self: center;
    }
    @media (min-width: 1200px) {
        flex-direction: row;
    }
    li {
        display: flex;
        gap: .5rem;
        padding: .5rem 1.2rem;
        border-radius: 8px;
        background-color: #ECECEC;
    }
`;
const Button = styled.button`
    color: #fff;
    padding: 1.1rem 1rem;
    border-radius: 7px;
    border: none;
    align-self: flex-start;
    cursor: pointer;
    @media (min-width: 1200px) {
        flex-direction: row;
        align-self: center;
    }

    

`;
const DataWrapper = styled.div`
    text-align: left;
    align-self: flex-start;
    @media (min-width: 1200px) {
        gap: 2rem;
        align-self: center;
    }
`;

const CompanyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
const Paragraph = styled.p`
    display: flex;
    gap: .3rem;
    justify-content: center;
    align-items: center;
`;
const More = styled.div`
    border-top: 3px solid #ECECEC;
    padding-top: 2rem;  
    overflow: hidden;
    height: 0;
    transition: all .3s ease-in-out;
    background-color: #fff;

`;
const OfferWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const InformationHeader = styled.p`
    font-size: 1.125rem;
    font-weight: 500;
`;

const ResponibilitiesList = styled.ul`
    padding-left: 1rem;
    li {
        color: #AAA;
    }
`;
const OfferParagraph = styled.p`
    color: #AAA;
`;
const OpinionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    border-top: 1px solid #ECECEC;
    display: flex;
    justify-content: space-between;

    @media (min-width: 1200px) {
        flex-direction: row;
    }
    div {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        align-items: flex-start;
        gap: 2rem;
        @media (min-width: 1200px) {
            flex-direction: row;
            align-items: center;
        }
        li {
            background-color: #ECECEC;
            padding: 1rem;
            border-radius: 8px;

        }
    }
`;
const OpinionInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    @media (min-width: 1200px) {
        flex-direction: row;
    }
`;
const LinkImage = styled.img`
    background-color: #F1F2FF;
    padding: 1rem;
    border-radius: 7px;
    cursor: pointer;
`;

const Test = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    background-color: #fff;
    padding: 2rem;
    border-radius: 7px;
`;
const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;
const LogoParagraph = styled.p`
    color: #aaa;
`; 

const SubHeading = styled.h2`
    text-align: center;
    text-transform: uppercase;
    color:#4348DB;
    font-weight: lighter;
    letter-spacing: 6px;
    margin-top: 2rem;
`;

const LoadMoreParagraph = styled.p`
    text-align: center;
    color: #AAA;
    font-weight: 500;
    cursor: pointer;
`;

export const JobTemplate = ({jobCategory}) => {
    const [openOfferId, setOpenOfferId] = useState(false);
    const [jobOffers, setJobOffers] = useState([]);
    const [visibleJobCount, setVisibleJobCount] = useState(4);

    const handleButtonClick = (offerId) => {
        setOpenOfferId(prevId => (prevId === offerId) ? false : offerId);
    };
    
    useEffect(() => {
      fetch("https://localhost:7274/api/Job/getJob")
        .then(response => response.json())
        .then(data => {
          console.log(jobCategory);
          if (jobCategory !== "All") {
            const filteredData = data.filter(
              offer => offer.jobCategory === jobCategory
            );
    
            setJobOffers(filteredData);
          } else {
            setJobOffers(data);
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, [jobCategory]); // Adding jobCategory as a dependency to the effect


    const handleLoadMore = () => {
        setVisibleJobCount(prevCount => prevCount + 4); // Increase by 4 each time
    };

    
  return (
    <Wrapper>
        <LogoWrapper>
            <LogoParagraph>
                find jobs from
            </LogoParagraph>
            <img src={logo1} alt='logo1'/>
            <img src={logo2} alt='logo2'/>
            <img src={logo3} alt='logo3'/>
            <img src={logo4} alt='logo4'/>
        </LogoWrapper>
        {jobOffers.length > 0 ? (
                jobOffers.slice(0, visibleJobCount).map(offer => (
                <Test key={offer.id}>
                                            <JobfferWrapper>
                                                <ImageWrapper>
                                                    <Image>
                                                        <CompanyImage src={logo} alt='logo'/>
                                                    </Image>
                                                </ImageWrapper>
                                                <CompanyWrapper>
                                                            <Heading>
                                                                {offer.job_name}
                                                            </Heading>
                                                            <Paragraph>
                                                                {offer.companyName}<img src={verify} alt='verify'/>
                                                            </Paragraph>
                                                </CompanyWrapper>
                                                <Information>
                                                    <li >
                                                            <img src={location} />
                                                            {offer.location}
                                                    </li>
                                                    <li>
                                                            <img src={money} />
                                                            {offer.salary}
                                                    </li>
                                                    <li>
                                                            {offer.jobType}
                                                    </li>

                                                </Information>
                                                <DataWrapper>
                                                <p>
                                                    124 applicants 
                                                </p>
                                                <p>
                                                    3 days ago
                                                </p>
                                                </DataWrapper>
                                                <Button
                                                    onClick={() => handleButtonClick(offer.id)}
                                                    style={{
                                                        background: openOfferId === offer.id ? '#fff' : '#4348DB',
                                                        color: openOfferId === offer.id ? '#000' : '#fff',
                                                        border: openOfferId === offer.id ? '1px solid #4348DB' : 'none'
                                                    }}
                                                >
                                                    {openOfferId === offer.id ? 'Less Details' : 'More Details'}
                                                </Button>

                                            </JobfferWrapper>
                                            <More style={{ display:  openOfferId === offer.id ? 'block' : "none", height: openOfferId === offer.id ? 'auto' : 0 }}>
                                                <OfferWrapper>
                                                    <span>
                                                        <InformationHeader>
                                                            About the role:
                                                        </InformationHeader>
                                                        <p>
                                                            As a freak UX/UI designer you will dedicate your time to find nice and friendly ways to fulfill the wants and needs of our users.
                                                        </p>
                                                    </span>

                                                    <span>
                                                        <InformationHeader>
                                                            Responsabilities:
                                                        </InformationHeader>
                                                        <ResponibilitiesList>
                                                            {offer.responsabilities &&
                                                            offer.responsabilities.map((responsibility, index) => (
                                                                <li key={index}>{responsibility.name}</li>
                                                            ))}
                                                        </ResponibilitiesList>
                                                    </span>
                                                    <span>
                                                        <InformationHeader>
                                                            Our ideal candidate:
                                                        </InformationHeader>
                                                        <OfferParagraph>
                                                        {offer.idealCandidate}
                                                        </OfferParagraph>
                                                    </span>
                                                </OfferWrapper>
                                                <OpinionWrapper>
                                                <ul>
                                                    {offer.responsabilities &&
                                                    offer.tag.map((tag, index) => (
                                                        <li key={index}>{tag.name}</li>
                                                    ))}
                                                </ul>
                                                        <OpinionInnerWrapper>
                                                            <p>
                                                                4.2 of 24 reviews
                                                            </p>
                                                            <ImageWrapper>
                                                                <LinkImage src={share} alt='share'/>
                                                                <LinkImage src={copy} alt='copy'/>
                                                            </ImageWrapper>
                                                        </OpinionInnerWrapper>
                                                    </OpinionWrapper>
                                            </More>
                                        </Test>
                            ))
                            ) : (
                                <SubHeading>No job offers available</SubHeading>
                            )}
                            {jobOffers.length > visibleJobCount && (
                                <LoadMoreParagraph onClick={handleLoadMore}>
                                    Load more job posts
                                </LoadMoreParagraph>
                            )}
    </Wrapper>

  )
}
