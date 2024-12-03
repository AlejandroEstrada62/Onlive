import React from 'react';
import styled from 'styled-components';

const Test = () => {
  return (
    <StyledWrapper className="bg-white justify-center text-center">
      <button className="btn">Take a free test now!</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 2rem;
  background-color: white;
  position: relative;
  display: block;
  border: 1px ;

  .btn {
    position: relative;
    font-size: 17px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1em 2.5em;
    display: inline-block;
    cursor: pointer;
    border-radius: 6em;
    transition: all 0.2s;
    border: none;
    font-family: inherit;
    color: white;
    background-color: black;
    z-index: 999;
    isolation: isolate;
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  .btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
    background-color: #050505;
  }

  .btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
`;

export default Test;
