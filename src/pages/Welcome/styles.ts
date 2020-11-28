import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  max-width: 660px;
  height: 172px;
  padding: 20px 50px;
  margin: 50px auto;
  border-radius: 10px;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const Username = styled.p`
  font-size: 14px;
`;

export const Name = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const Bio = styled.h3`
  font-size: 18px;
  font-weight: 400;
  text-align: center;

  margin: 15px 0;
`;
