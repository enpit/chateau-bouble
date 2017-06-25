import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const size = 32;

const StyledHeader = styled.header`
  background: ${props => props.theme.backgrounds[1]};
  height: 10%;
  width: 100%;
`;

const Centered = styled.div`
  display: inline-block;
  position: relative;
  right: -${size * 0.75}px;
  text-align: center;
  top: 50%;
  transform: translate(0, -50%);
  width: calc(100% - ${size * 1.5}px);
`;

const Right = styled.div`
  display: inline-block;
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
`;

const Title = styled.div`
  font-weight: bold;
`

const Status = styled.div`
  color: ${props => props.theme.highlights[2]};;
`;

const Image = styled.img`
  border-radius: ${size/2}px;
  height: ${size}px;
  margin-right: ${size/2}px
  text-align: right;
  width: ${size}px;
`;

const mapStateToProps = state => ({
  status: state.messages.status,
  title: state.messages.title,
  user: state.messages.user
});

const Header = ({ title = '', status = '', user = {}}) => (
  <StyledHeader>
    <Centered>
      <Title>{title}</Title>
      <Status>{status}</Status>
    </Centered>
    <Right>
      <Image alt={user.name} src={user.image} />
    </Right>
  </StyledHeader>
);


export default connect(mapStateToProps)(Header);
