import React, { useState } from "react";
import {Button} from 'primereact/button';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './nested.css'
import {InputText} from 'primereact/inputtext';
import Lines from './Lines';


class BillLineForm extends React.Component {
    state = {
        lines: [{ index: Math.random(), gosso: "", baridzi: "", alms: "", dizo: "" }],

    }

    handleChange = (e) => {
        if (["gosso", "baridzi", , "alms", 'dizo'].includes(e.target.name)) {
            let lines = [...this.state.lines]
            lines[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = (e) => {
        this.setState((prevState) => ({
            lines: [...prevState.lines, { index: Math.random(), gosso: "", baridzi: "", alms: "", dizo: "" }],
        }));
    }

    deteteRow = (index) => {
        this.setState({
            lines: this.state.lines.filter((s, sindex) => index !== sindex),
        });
        // const taskList1 = [...this.state.taskList];
        // taskList1.splice(index, 1);
        // this.setState({ taskList: taskList1 });
    }

    clickOnDelete(record) {
        this.setState({
            lines: this.state.lines.filter(r => r !== record)
        });
    }

    render() {
        let { lines } = this.state//let { notes, date, description, taskList } = this.state
        return (
            <div className="content">
                <form>
                  <div className="row" style={{ marginTop: 20 }}>
            
                        <table className="table">
                            <thead>
                                <tr>
                                  <th className="required" >Gosso</th>
                                  <th className="required" >Baridi</th>
                                  <th>Alms</th>
                                  <th>Dizo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Lines add={this.addNewRow} delete={this.clickOnDelete.bind(this)}  lines={lines} />
                            </tbody>
                            <tfoot>
                                <tr><td colSpan="4">
                                    <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                </td></tr>
                            </tfoot>
                        </table>
                    </div>
                </form>
            </div>
        );
    }
}
export default BillLineForm;