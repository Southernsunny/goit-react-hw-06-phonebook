import styled from '@emotion/styled';

export const FormContact = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  gap: 20px;
  justify-content: center;
`;

export const Label = styled.label`
  font-size: 18px;
`;

export const Input = styled.input`
  margin-left: 10px;
  height: 15px;
  width: 150px;
  padding: 5px;
  border-radius: 10px;
  border-color: green;
  font-family: inherit;
  font-size: 15px;
  transition: border-color 0.3s ease, scale 0.3s ease;
  &:focus {
    outline: none;
    border-color: aquamarine;
    scale: 1.1;
  }
`;

export const BtnAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 130px;
  gap: 3px;
  padding: 7px;
  border: none;
  border-radius: 20px;
  outline: none;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: inherit;
  font-size: 15px;
  position: relative;
  z-index: 0;

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
    border-radius: 20px;
  }
  /* glow */
  &::before {
    content: '';
    background: linear-gradient(
      45deg,
      #243c33,
      #364e4d,
      #d1b579,
      #e46c39,
      #c73e2c,
      #2c445c,
      #37507a,
      #c73e2c,
      #e46c39,
      #d1b579,
      #243c33
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 600%;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    filter: blur(8px);
    animation: glowing 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 20px;
    opacity: 0;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }

    50% {
      background-position: 400% 0;
    }

    100% {
      background-position: 0 0;
    }
  }

  /* hover */
  &:hover::before {
    opacity: 1;
  }
`;
