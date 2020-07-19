import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {Calendar} from 'primereact/calendar';
import {MultiSelect} from 'primereact/multiselect';
import {ProgressBar} from 'primereact/progressbar';
import classNames from 'classnames';
import { getProcessedproducts} from '..//../actions/processedproducts';
import { Link } from 'react-router-dom';
import "./form.css";


class Processedproducts extends Component {

    constructor() {
        super();
        this.state = {
            processedproducts: null,
            globalFilter: null,
            dateFilter: null,
            selectedProcessedproducts: null,

        };
        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);
        this.filterDate = this.filterDate.bind(this);       //custom filter function
        this.export = this.export.bind(this);
        this.renderDateFilter = this.renderDateFilter.bind(this)
        this.onDateFilterChange = this.onDateFilterChange.bind(this)
        this.formatDate = this.formatDate.bind(this)

    }

    static propTypes = {
        processedproducts : PropTypes.array.isRequired,
        getProcessedproducts: PropTypes.func.isRequired,

    };

    componentDidMount() {
        this.props.getProcessedproducts();
    }

    renderHeader() {
        return (
            <div className="table-head">
                <h1>List Of Processed Products</h1>
                <div className="datatable-fancy-icons">
                    <div className="fancy-icon"><Button type="button" className="p-button-warning p-button-rounded" icon="pi pi-file-pdf" iconPos="right" label="PDF" onClick={this.export}></Button></div>
                    <div className="fancy-icon"><Button type="button" className="p-button-warning p-button-rounded" icon="pi pi-file-excel" iconPos="right" label="CSV" onClick={this.export}></Button></div>
                    <div className="fancy-icon"><Button type="button" className="p-button-warning p-button-rounded" icon="pi pi-print" iconPos="right" label="PRINT" onClick={this.export}></Button></div>
                    <InputText className="fancy-icon" type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Search" />
                </div>
            </div>
        );
    }

    activityBodyTemplate(rowData) {
        return <ProgressBar value={rowData.activity} showValue={false} />;
    }

    actionBodyTemplate() {
        return (
            <Link to="/" >
                <Button type="button" label="VIEW-ME" icon="pi pi-pencil" className="p-button-warning p-button-rounded"></Button>
            </Link>
        );
    }


    renderDateFilter() {
        return (
            <Calendar value={this.state.dateFilter} onChange={this.onDateFilterChange} placeholder="Registration Date" dateFormat="yy-mm-dd" className="p-column-filter" />
        );
    }

    onDateFilterChange(event) {
        if (event.value !== null)
            this.dt.filter(this.formatDate(event.value), 'date', 'equals');
        else
            this.dt.filter(null, 'date', 'equals');

        this.setState({dateFilter: event.value});
    }

    filterDate(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value === this.formatDate(filter);
    }

    export() {
        this.dt.exportCSV();
    }

    formatDate(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }


    render() {

        const header = this.renderHeader();
        const dateFilter = this.renderDateFilter();


        return (
            <div className="datatable-doc-demo">
                <DataTable ref={(el) => this.dt = el} value={this.props.processedproducts}
                    style={{backgroundColor: '#4EB08E'}}
                    header={header} responsive className="table-head" dataKey="id" rowHover globalFilter={this.state.globalFilter}
                    selection={this.state.selectedProcessedproducts} onSelectionChange={e => this.setState({selectedProcessedproducts: e.value})}
                    paginator rows={10} emptyMessage="No Accounts found" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}>
                    <Column className="table-field" selectionMode="multiple" style={{width:'3em', backgroundColor: '#4EB0A5'}}/>
                    <Column className="table-field" field="id" header="ID" sortable filter filterPlaceholder="Search by ID" style={{width:'3em', backgroundColor: '#4EB0A5'}}/>
                    <Column className="table-field" field="product" header="Product" sortable filter filterPlaceholder="Search by Product" style={{width:'3em', backgroundColor: '#4EB0A5'}}/>
                    <Column className="table-field" field="location" header="Location" sortable filter filterPlaceholder="Search by Location" style={{width:'3em', backgroundColor: '#4EB0A5'}}/>
                    <Column className="table-field" field="quantity" header="Quantity" sortable filter filterPlaceholder="Search by Quantity" style={{width:'3em', backgroundColor: '#4EB0A5'}}/>
                    <Column className="table-field" field="status" header="Status" sortable filter filterPlaceholder="Search by Status" style={{width:'3em', backgroundColor: '#4EB0A5'}}/>
                    <Column className="table-field" field="product_component" header="Product Component" sortable filter filterPlaceholder="Search by Component" style={{width:'3em', backgroundColor: '#4EB0A5'}}/>
                    <Column className="table-field" field="unit" header="Unit" sortable filter filterPlaceholder="Search by Unit" style={{width:'3em', backgroundColor: '#4EB0A5'}}/>
                    <Column className="table-field" field="minimum_order_level" header="Minimum Order Level" sortable filter filterPlaceholder="Search by Order Level" style={{width:'3em', backgroundColor: '#4EB0A5'}}/>
                    <Column className="table-field" field="maximum_stock_level" header="Maximum Stock Level" sortable filter filterPlaceholder="Search by Stock Level" style={{width:'3em', backgroundColor: '#4EB0A5'}}/>
                    <Column className="table-field" body={this.actionBodyTemplate} headerStyle={{width: '3em', textAlign: 'center', backgroundColor: '#4EB0A5'}} bodyStyle={{textAlign: 'center', overflow: 'visible', backgroundColor: '#4EB0A5'}} />
                </DataTable>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    processedproducts: state.processedproducts.processedproducts
})

export default connect(mapStateToProps, {getProcessedproducts} ) (Processedproducts);
