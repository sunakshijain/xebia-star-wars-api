import React from 'react';
import styled from 'styled-components';
export const Search = (props) => {
    const onChange = (e) => {
        props.handleChange({ [e.target.name]: e.target.value })
    }
    return (
        <SearchContainer>
            <input onChange={onChange} type="search" name="search" id="exampleSearch" placeholder="search" />
        </SearchContainer>
    );

}

const SearchContainer = styled.div`
  margin-top:10px
  display: flex;
  padding-left: 1em;
  padding-right: 1em;
  float:right
`