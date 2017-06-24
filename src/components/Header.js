import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.header`
  background: ${props => props.theme.backgrounds[1]};
  height: 10%;
`;

const Centered = styled.div`
  position: relative;
  text-align: center;
  top: 50%;
  transform: translate(0, -50%);
`;

const Title = styled.div`
  font-weight: bold;
`

const Status = styled.div`
  color: ${props => props.theme.highlights[0]};;
`;

const mapStateToProps = state => ({
  status: state.messages.status,
  title: state.messages.title
});

const Header = ({ title = '', status = '' }) => (
  <Wrapper>
    <Centered>
      <Title>{title}</Title>
      <Status>{status}</Status>
    </Centered>
  </Wrapper>
);


export default connect(mapStateToProps)(Header);
