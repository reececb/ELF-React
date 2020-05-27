import React, { Component } from 'react';
import Feature from './Feature';
import slugify from 'slugify';
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default class FeatureList extends Component {
    render() {
    
            
        const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <Feature 
                    itemHash = {itemHash}
                    feature = {feature}
                    selected = {this.props.selected}
                    updateFeature = {this.props.updateFeature}
                    item = {item}
                />
            );
        });
        return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              {options}
            </fieldset>
          );
    });
    return (
        <div>{features}</div>
    )
   

    }
}
