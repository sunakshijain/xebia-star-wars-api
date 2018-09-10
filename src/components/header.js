import React from 'react';
import styled from 'styled-components';
import Pagination from './pagination';
// import loading from '../images/loading.gif';

class Header extends React.Component {

  static contextTypes = { router: () => null }

  render() {
    const { history } = this.context.router;
    const { title } = this.props;
    return (
      <HeaderContainer>
        <a onClick={history.goBack} className="glyphicon">logout</a>
        <label>
          <span>{title}</span>
        </label> 
        <Pagination {...this.props} />
      </HeaderContainer>
    )
  }
}


export default Header;

const HeaderContainer = styled.header`
  background-color: #e5e5e5;
  cursor: pointer;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1em;
  padding-right: 1em;

  img {
    height: 2em;
  }
`