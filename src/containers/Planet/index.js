import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/header';
import Item from '../../components/item';
import { Search } from '../../components/search';
import { fetchPlanets, fetchNextPlanets, fetchPrevPlanets } from '../../actions/planetActions';

class PlanetsListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPlanets('');
  }

  handleClickDetails(planet, event) {
    event.preventDefault();
    this.props.history.push(`/planets/${planet.url.split('/')[5]}`)
  }
  onNext = () => {
    this.props.fetchNextPlanets()
  }
  onPrev = () => {
    this.props.fetchPrevPlanets()
  }
  handleChange = ({ search }) => {
    const { fetchPlanets, planet: { searchCounts,searchTime } } = this.props;
    if (this.props.login.data.name === 'Luke Skywalker' || (searchCounts < 15 ||  ((((new Date() - searchTime) % 86400000) % 3600000) / 3600000 > 15))) {
      fetchPlanets(search)
    }
  }
  render() {
    const { count, currentPage, showLoading, planets } = this.props.planet;
    const itemsPerPage = 10;
    const showDetailListCount = 6
    let pageLength = Math.ceil(count / itemsPerPage);
    const renderPlanets = (planets) => {
      const hideDetails = planets.length <= showDetailListCount;
      if (hideDetails) {
        return planets.map(p => (
          <div style={{ marginTop: 10 }} key={p.name} className="card">
            <div className="card-header">{p.name}</div>
            <div className="card-body">
              <div>  Population: <span>{p.population}</span></div>
              <div>  Diameter: <span >{p.diameter}</span></div>
              <div>  Climate: <span >{p.climate}</span></div>
              <div>  Gravity: <span >{p.gravity}</span></div>
            </div>
          </div>
        ))
      }
      return planets.map(p => (
        <li key={p.name} style={{ listStyle: 'none' }}>
          <Item topText={p.name}
            bottomText={`${p.population} people`}
            onClickDetails={this.handleClickDetails.bind(this, p)}
          />
        </li>))
    }
    return (
      <div>
        <Header title='Planets' currentPage={currentPage} pageLength={pageLength} onNext={this.onNext} onPrev={this.onPrev} showLoading={showLoading} />
        <Search handleChange={this.handleChange.bind(this)} />
        <div className="container-fluid">
          <ul style={{ marginTop: 45 }}>
            {renderPlanets(planets)}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ planet, login }) {
  return {
    planet,
    login
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchPlanets: (searchTerm) => { dispatch(fetchPlanets(searchTerm)) },
    fetchNextPlanets: () => { dispatch(fetchNextPlanets()) },
    fetchPrevPlanets: () => { dispatch(fetchPrevPlanets()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsListContainer);