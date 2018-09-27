import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Highlights from './Highlights';
import DiseaseSpecific from './DiseaseSpecific';
//import IdsrTable from './IdsrTable';
import TestCsv from './TestCsv';
import App3 from './App3';
import Rates from './Rates';
import Iframe from './Iframe';
import ReportingTrends from './ReportingTrends';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab id="highlights" label="Highlights" />
            <Tab id="report_rates" label="Reporting Rates" />
            <Tab id="report_trends" label="reporting trends" />
            <Tab id="disease_specific" label="Disease Specific"/>
            <Tab id="idsr_table" label="IDSR Table"/>
            <Tab id="full_report" label="Full Report"/>
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><Highlights period={this.props.period}/></TabContainer>}
        {value === 1 && <TabContainer><Rates src={"../sb.html?period="+this.props.period}/></TabContainer>}
        {value === 2 && <TabContainer><ReportingTrends/></TabContainer>}
        {value === 3 && <TabContainer><DiseaseSpecific/></TabContainer>}
        {value === 4 && <TabContainer><Iframe src={"../idsrtable.html?period="+this.props.period}/></TabContainer>}
        {value === 5 && <TabContainer>
          <TestCsv/>
        </TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
