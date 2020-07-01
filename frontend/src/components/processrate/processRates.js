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
import { getProcessRates} from '..//../actions/processRates';
import "./form.css";


class ProcessRates extends Component {

    constructor() {
        super();
        this.state = {
            processRates: null,
            globalFilter: null,
            dateFilter: null,
            selectedProcessRates: null,

        };




        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);

        //filters

        this.filterDate = this.filterDate.bind(this);       //custom filter function
    }

    static propTypes = {
        processRates : PropTypes.array.isRequired,
        getProcessRates: PropTypes.func.isRequired,

    };

    componentDidMount() {
        this.props.getProcessRates();
    }

    renderHeader() {
        return (
            <div >
                List of Process Rates
                <div  className="p-datatable-globalfilter-container">
                    <div style={{textAlign:'left'}}><Button type="button" icon="pi pi-external-link" iconPos="left" label="EXPORT TO CSV" onClick={this.export}></Button></div>;
                    <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" />
                </div>
            </div>
        );
    }

    activityBodyTemplate(rowData) {
        return <ProgressBar value={rowData.activity} showValue={false} />;
    }

    actionBodyTemplate() {
        return (
            <Button type="button" icon="pi pi-cog" className="p-button-secondary"></Button>
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
                <DataTable ref={(el) => this.dt = el} value={this.props.processrates}
                    style={{backgroundColor: '#4c6b75'}}
                    header={header} responsive className="p-datatable-customers" dataKey="id" rowHover globalFilter={this.state.globalFilter}
                    selection={this.state.selectedProcessRates} onSelectionChange={e => this.setState({selectedProcessRates: e.value})}
                    paginator rows={10} emptyMessage="No Accounts found" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}>
                    <Column selectionMode="multiple" style={{width:'3em', backgroundColor: '#4c6b75'}}/>
                    <Column field="id" header="ID" sortable filter filterPlaceholder="Search by ID" style={{width:'3em', backgroundColor: '#4c6b75'}}/>
                    <Column field="unit" header="Unit" sortable filter filterPlaceholder="Search by Unit" style={{width:'3em', backgroundColor: '#4c6b75'}}/>
                    <Column field="unit_time" header="Unit Time" sortable filter filterPlaceholder="Search by Time" style={{width:'3em', backgroundColor: '#4c6b75'}}/>
                    <Column field="quantity" header="Quantity" sortable filter filterPlaceholder="Search by Quantity" style={{width:'3em', backgroundColor: '#4c6b75'}}/>
                    <Column body={this.actionBodyTemplate} headerStyle={{width: '8em', textAlign: 'center', backgroundColor: '#4c6b75'}} bodyStyle={{textAlign: 'center', overflow: 'visible', backgroundColor: '#4c6b75'}} />
                </DataTable>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    processRates: state.processRates.processRates
})

export default connect(mapStateToProps, {getProcessRates} ) (ProcessRates);
