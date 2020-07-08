import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.rate) alert.error(`Rate: ${error.msg.rate.join()}`);
      if (error.msg.account_type) alert.error(`Accouttype: ${error.msg.account_type.join()}`);
      if (error.msg.description) alert.error(`Description: ${error.msg.description.join()}`);
      if (error.msg.initial_balance) alert.error(`Initial Balance: ${error.msg.initial_balance.join()}`);
      if (error.msg.is_active) alert.error(`Is Active: ${error.msg.is_active.join()}`);
      if (error.msg.is_contra) alert.error(`Is Contra: ${error.msg.is_contra.join()}`);
      if (error.msg.order) alert.error(`Order: ${error.msg.order.join()}`);
      if (error.msg.memo) alert.error(`Memo: ${error.msg.memo.join()}`);
      if (error.msg.vendor) alert.error(`Vendor: ${error.msg.vendor.join()}`);
      if (error.msg.date) alert.error(`Date: ${error.msg.date.join()}`);
      if (error.msg.due) alert.error(`Due: ${error.msg.due.join()}`);
      if (error.msg.debit_account) alert.error(`Debit-Account: ${error.msg.debit_account.join()}`);
      if (error.msg.amount) alert.error(`Amount: ${error.msg.amount.join()}`);
      if (error.msg.reference) alert.error(`Reference: ${error.msg.reference.join()}`);

      if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
    }

    if (message !== prevProps.message) {
      if (message.taxDeleted) alert.success(message.taxDeleted);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
