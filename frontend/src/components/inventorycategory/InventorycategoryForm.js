import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInventorycategory, getInventorycategories } from '..//../actions/inventorycategory';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {Button} from 'primereact/button';

export class InventorycategoryForm extends Component{
    constructor(props){
        super(props);
            this.state = {
                name: '',
                description: '',
                parent: '',
                parents: [],
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }




    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
        name,
        description,
        parent
      } = this.state;

      const inventorycategory = {
        name,
        description,
        parent
      };

      this.props.addInventorycategory(inventorycategory);
      this.setState({
        name: '',
        description: '',
        parent: '',

        });
      this.props.history.push('/inventorycategories');
    };



    static propTypes = {
        addInventorycategory: PropTypes.func.isRequired,
        inventorycategories : PropTypes.array.isRequired,
        getInventorycategories: PropTypes.func.isRequired,

    };

    componentDidMount() {
        this.props.getInventorycategories();
    }


    render() {
        const {
          name,
          description,
          parent
        } = this.state;

        const {inventorycategories} = this.props;


        let parents = inventorycategories.length > 0
            && inventorycategories.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add An Inventory Category</h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-12">
                  <label>Name</label>
                  <InputText
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={this.onChange}
                    value={name}
                  />
                </div>

                <div className="p-field p-col-12 p-md-12">
                  <label>Description</label>
                  <InputTextarea
                    className="form-control"
                    type="text"
                    name="description"
                    onChange={this.onChange}
                    value={description}
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
                    <label>PARENT</label>
                    <select
                        name="parent"
                        value={parent}
                        onChange={this.onChange}
                    >
                        {parents}
                    </select>
                  </div>
                <div className="p-field p-col-12 p-md-6">
                  <Button label="Submit" className="p-button-success p-button-rounded" />
                </div>
                </div>
             </form>
         </div>
        );
    }
}

const mapStateToProps = state =>({
    inventorycategories: state.inventorycategories.inventorycategories
})

export default connect(mapStateToProps, { getInventorycategories, addInventorycategory })(InventorycategoryForm);
