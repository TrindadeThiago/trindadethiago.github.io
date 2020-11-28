import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import {
  Container,
  UserContainer,
  Bio,
  UserInfo,
  Avatar,
  Name,
  Username,
} from './styles';

interface User {
  name: string;
  login: string;
  bio: string;
  avatar_url: string;
}

const Welcome: React.FC = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    api.get('users/TrindadeThiago').then(response => {
      setUser(response.data);
    });
  }, []);

  return (
    <Container>
      <UserContainer>
        <Avatar src={user?.avatar_url} />
        <UserInfo>
          <Name>{user?.name}</Name>
          <Username>{user?.login}</Username>
        </UserInfo>
      </UserContainer>
      <Bio>{user?.bio}</Bio>
    </Container>
  );
};

export default Welcome;
