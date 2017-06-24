import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Centered = styled.div`
  background: ${props => props.theme.backgrounds[1]};
  padding-bottom: 10px;
  padding-top: 10px;
  text-align: center;
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
  <header>
    <Centered>
      <Title>{title}</Title>
      <Status>{status}</Status>
    </Centered>
  </header>
);


export default connect(mapStateToProps)(Header);
