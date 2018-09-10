import React from 'react';
import styled from 'styled-components';

class PaginationContainer extends React.Component {
    render() {
        const { currentPage, onNext, onPrev, pageLength, showLoading } = this.props;
        return (
            <Pagination>
                {!(showLoading || currentPage === 1 || pageLength === 0) && <a onClick={onPrev}>&larr;</a>}
                {!(showLoading || currentPage === pageLength || pageLength === 0) && <a onClick={onNext}>&rarr;</a>}
            </Pagination>
        )
    }
}


export default PaginationContainer;

const Pagination = styled.div`
  a:first-child {
    margin-right: 0.5em;
  }
`
