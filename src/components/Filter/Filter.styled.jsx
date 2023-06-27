import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  font-size: 18px;
  gap: 15px;
`;

export const Input = styled.input`
  height: 15px;
  width: 175px;
  padding: 5px;
  border-radius: 10px;
  border-color: #a73a2e;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 15px;
  transition: border-color 0.3s ease, scale 0.3s ease;
  &:focus {
    outline: none;
    border-color: #e46c39;
    scale: 1.1;
  }
`;
