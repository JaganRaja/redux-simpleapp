import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as action from './Actions';

class Counter extends Component {
    // constructor(props) {
    //     super(props); 
    //     this.state = { 

    //      }
    // }



    // incrementfn = () => {
    //     this.props.dispatch({ type: "INCREMENT" });
    // }

    // decrementfn = () => {
    //     this.props.dispatch({ type: "DECREMENT" });
    // }

    render() {
        return (
            <div>
                <button type="button" onClick={this.props.decrementfn} > - </button>
                <span>{this.props.count}</span>
                {/* <button type="button" onClick={this.incrementfn}> + </button> */}
                <button type="button" onClick={this.props.incrementfn}> + </button>

            </div>
        );
    }
}

// mapStateToProps --> take entire redux state  and expected to return object with kets are  props name and values are props values
// mapping state into props
const mapStateToProps = (state) => ({

    count: state.count

});

function mapDispatchToProps(dispatch) {
    return{
        decrementfn: () => dispatch(action.decrement()),
        incrementfn: () => dispatch(action.increment())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);       