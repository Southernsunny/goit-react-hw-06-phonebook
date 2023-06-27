import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  gap: 10px;
`;

export const Total = styled.span`
  padding: 5px;
  border: 1px solid #e46c39;
  border-radius: 15px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid transparent;
  border-radius: 20px;
`;

export const Name = styled.p`
  font-size: 18px;
`;

export const Number = styled.p`
  font-size: 18px;
`;

export const BtnDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 5px;
  font-family: inherit;
  font-size: 15px;
  color: #d1b579;
  background: transparent;
  border: 1px solid #d1b579;
  border-radius: 20px;
  transition: color 0.3s ease, border-color 0.3s ease;

  &:hover,
  &:focus {
    color: #e46c39;
    border: 1px dotted #e46c39;
  }
`;
