import React, { Component} from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';

export class Menu extends Component {
    
  constructor(){
      super();
      this.state={
        stateDate: null,
        endDate: null,
      }
  }

  render() {
    return (
      <div className="calandra-picker" >
        <DateRangePicker 
            startDate={this.state.startDate}
            startDateId ="date_arrivee" 
            endDate={this.state.endDate}
            endDateId ="date_depart"
            onDatesChange={({startDate, endDate}) => this.setState({startDate, endDate}) }
            focusedInput = {this.state.focusedInput}
            onFocusChange= {focusedInput => this.setState({focusedInput})}
            displayFormat="dd MM"
            startDatePlaceholderText = "Quand?"
            endDatePlaceholderText = "Quand?"
            customArrowIcon= " "
            noBorder = {true}
            readOnly = {true}
        />
      </div>
    )
  }
}