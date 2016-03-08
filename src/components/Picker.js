import React, { Component, PropTypes } from 'react';

export default class Picker extends Component {
    render() {
    	const {value, onChange, options} = this.props;
    	let _options = [];

    	for(let i=0; i<options.length; i++){
    		let option = options[i];
    		_options.push(
    			<option value={option} key={option}>
        				{option}
        		</option>);
    	}

        return (
        	<span>
        		<h1>{value}</h1>
        		<select onChange={e=>onChange(e.target.value)}
        			value={value}>
        			{_options}
        		</select>
        	</span>
        );
    }
}

Picker.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
