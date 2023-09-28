import React from 'react';
import styled from 'styled-components';
import '../css/Portfolio.css';
import TestimonialImage from '../assets/images/Cthulhu_Transparent.png';
import CardImage from '../assets/images/Cthulhu_bg.png';

const FilterButton = styled.button`
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  width: 35%;
  border: none;
  border-radius: 10px;
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const CardContent = styled.div`
  background: #203a43;
  border-radius: 10px;
  height: 465px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.span`
  background: linear-gradient(to right, #4a90e2, #8e44ad);
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 5px;
  width: 165px;
  margin-bottom: 1rem;
`;

const CardTop = styled.div`
  text-align: center;
`;

const CardMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 25px;

`;

const CardTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

const CardBottom = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Divider = styled.div`
  border: 0;
  height: 75px;
  margin-top: 5rem;
  margin-bottom: 5rem;
  background: linear-gradient(to right, #4a90e2, #8e44ad);
`;

const Testimonial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const SingleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="container">
                <h2 className="section-title text-center my-5">
                    Take A Look On My Past
                </h2>

                <div className="text-center mb-4 filter-buttons">
                    <FilterButton>Show All</FilterButton>
                    <FilterButton>Web Design</FilterButton>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <CardContent>
                            <CardTop>
                                <img src={CardImage} className="card-image" alt="Project image2" />
                            </CardTop>
                            <CardMiddle>
                                <CardTitle>Application Windows</CardTitle>
                                <h5 className="card-title">AEC UWP Client</h5>
                                <CardTime>
                                    <span>Start: 01/01/2022</span>
                                    <span>End: 12/23/2023</span>
                                </CardTime>
                            </CardMiddle>
                            <CardBottom>
                                <SubmitButton className="btn btn-primary visit-button">Visit Site</SubmitButton>
                            </CardBottom>
                        </CardContent>
                    </div>
                    <div className="col-md-4">
                        <CardContent>
                            <CardTop>
                                <img src={CardImage} className="card-image" alt="image2" />
                            </CardTop>
                            <CardMiddle>
                                <CardTitle>Discord Bot</CardTitle>
                                <h5 className="card-title">Cthulhu Bot</h5>
                                <CardTime>
                                    <span>Start: 09/10/2023</span>
                                    <span>End: -</span>
                                </CardTime>
                            </CardMiddle>
                            <CardBottom>
                                <SubmitButton className="btn btn-primary visit-button">Visit Site</SubmitButton>
                            </CardBottom>
                        </CardContent>
                    </div>
                    <div className="col-md-4">
                        <CardContent>
                            <CardTop>
                                <img src={CardImage} className="card-image" alt="Project" />
                            </CardTop>
                            <CardMiddle>
                                <CardTitle>Java Application</CardTitle>
                                <h5 className="card-title">Fortis Bank</h5>
                                <CardTime>
                                    <span>Start: 01/01/2023</span>
                                    <span>End: 06/01/2023</span>
                                </CardTime>
                            </CardMiddle>
                            <CardBottom>
                                <SubmitButton className="btn btn-primary visit-button">Visit Site</SubmitButton>
                            </CardBottom>
                        </CardContent>
                    </div>
                </div>
                
            </div>

            <Divider />

            <Testimonial>
                <SingleBox>
                    <div>
                        <img src={TestimonialImage} className="client-image" alt="Client logos or testimonials" />
                    </div>
                    <div>
                        <p className="testimonial">
                            "This developer is amazing!"
                        </p>
                    </div>
                </SingleBox>
            </Testimonial>
        </div>
    );
};

export default Portfolio;
