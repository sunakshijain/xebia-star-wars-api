import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/header';
import Item from '../../components/item';

import { getPlanet } from '../../actions/planetActions';

class PlanetDetailsContainer extends React.Component {

    componentWillMount() {
        // Request API if there is no planet on state
        if (this.props.planet.name === undefined) {
            const id = this.props.match.params.id;
            this.props.dispatch(getPlanet(id));
        }
    }

    render() {
        console.log(this.props.planet.currentPlanet)
        const { name = '', population = '', diameter = '',
            climate = '', gravity = '' } = this.props.planet.currentPlanet ? this.props.planet.currentPlanet : {};
        return (
            <div>
                <Header title={name} showLoading={true} />
                <Item topText="Population" bottomText={population} />
                <Item topText="Diameter" bottomText={diameter} />
                <Item topText="Climate" bottomText={climate} />
                <Item topText="Gravity" bottomText={gravity} />
            </div>
        )
    }
}

function mapStateToProps({ planet }) {
    return {
        planet
    }
}

export default connect(mapStateToProps)(PlanetDetailsContainer);