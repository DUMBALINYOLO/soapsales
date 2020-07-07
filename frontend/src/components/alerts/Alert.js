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
