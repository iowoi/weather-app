import React,{ Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{

    renderWeather(cityData){
        const date = cityData.query.results.channel.item.condition.date
        const temp = cityData.query.results.channel.item.condition.temp
        const text = cityData.query.results.channel.item.condition.text


        return (
            <tr key={date}>
                <td></td>
                <td>{date}</td>
                <td>{temp}</td>
                <td>{text}</td>
            </tr>
        )
    }
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Date</th>
                        <th>Temperature</th>
                        <th>Other</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}


function mapStateToProps({weather}) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);

