import React from 'react';
import styled from 'styled-components';
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";


const Footer = (props) => (
  <StyledFooter>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      Created by Ng Yong Sheng &nbsp;
      <a
        href="https://github.com/gnehsheng/lettuce-vids"
        // eslint-disable-next-line
        rel="noopener noreferrer"
        target="_blank"
      >
        <AiOutlineGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/yong-sheng-ng-757825226/"
        // eslint-disable-next-line
        rel="noopener noreferrer"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>
      
    </div>
  </StyledFooter>
);

const StyledFooter = styled.div`
	height: 45px;
	margin-top: -45px;
	display: flex;
	flex-direction: column;
	position: relative;
	flex: 1;
	align-items: center;
	justify-content: center;
	font-size: 1.2em;
	font-weight: 500;
	flex-wrap: wrap;
	padding: 0 5%;
	text-align: center;
  color: white;
`;

export default Footer;
