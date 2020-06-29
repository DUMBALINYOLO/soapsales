import React, { Component } from 'react';
import { connect } from 'react-redux';
import { detailsProduct } from '..//../actions/products';
import PropTypes from 'prop-types';

import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';

export class ProductDetails extends Component {

    constructor() {
        super();
        this.state = {
            displayMaximizable: false,
            position: 'center'
        };

        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick(name, position) {
        let state = {
            [`${name}`]: true
        };

        if (position) {
            state = {
                ...state,
                position
            }
        }

        this.setState(state);
    }

    onHide(name) {
        this.setState({
            [`${name}`]: false
        });
    }

    renderFooter(name) {
        return (
            <div>
                <Button label="Yes" icon="pi pi-check" onClick={() => this.onHide(name)} />
                <Button label="No" icon="pi pi-times" onClick={() => this.onHide(name)} className="p-button-secondary"/>
            </div>
        );
    }

    render() {
        return (
            <div className="dialog-demo">
                <Button label="Show" icon="pi pi-external-link" onClick={() => this.onClick('displayMaximizable')} />
                <Dialog header="Godfather I" visible={this.state.displayMaximizable} style={{width: '50vw'}} onHide={() => this.onHide('displayMaximizable')} maximizable blockScroll
                    footer={this.renderFooter('displayMaximizable')}>
                    <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                </Dialog>
            </div>
        )
    }
}

export default connect(null, { detailsProduct })(ProductDetails);
