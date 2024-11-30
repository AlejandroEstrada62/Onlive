import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledWrapper>
        <button className="btn" onClick={() => setIsOpen(true)}>Login</button>
      </StyledWrapper>

      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2 className='text-black'>Iniciar Sesión</h2>
            <form>
              <input className='text-black' type="email" placeholder="Email" />
              <input className='text-black' type="password" placeholder="Contraseña" />
              <a
                href="/Dashboard"
                rel="noopener noreferrer"
                className="submit-btn">
                  Entrar
              </a>
            </form>
            <CloseButton className ='text-black' onClick={() => setIsOpen(false)}>×</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

const StyledWrapper = styled.div`
  display: block;
  position: relative;
  
  .btn {
    position: relative;
    font-size: 17px;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1em 2.5em;
    display: inline-block;
    cursor: pointer;
    border-radius: 6em;
    transition: all 0.2s;
    border: none;
    font-family: inherit;
    font-weight: 500;
    color: black;
    background-color: white;
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
  }

  .btn::after {
    background-color: #fff;
  }

  .btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  width: 90%;
  max-width: 500px;

  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    .submit-btn {
      padding: 0.5rem;
      background-color: black;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      
      &:hover {
        background-color: #333;
      }
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default Login;
