import * as React from 'react';
import { Insights, Summary } from '.';
import { InsightContent, InsightRow } from '../styles';
import CommonReport from './CommonReport';

interface IProps {
  insights: any,
  punch: any,
  summary: any,
  loading: any
};

class VolumeReport extends CommonReport<IProps> {
  componentDidUpdate(prevProps) {
    if (prevProps.loading.insights && !this.props.loading.insights) {
      this.calculateWidth();
    }
  }

  componentDidMount() {
    this.calculateWidth();
  }

  renderBreadCrumnb() {
    const { __ } = this.context;
    return [
      { title: __('Insights'), link: '/insight' },
      { title: __('Volume Report') }
    ];
  }

  renderCharts() {
    const { trend, punch, insights, summary, loading } = this.props;

    const width = this.state.width;

    return (
      <InsightContent>
        <InsightRow>
          {this.renderTitle('Volume summary')}
          <Summary loading={loading.main} data={summary} />
        </InsightRow>

        {this.renderTrend('Volume Trend', loading, trend, width)}

        {this.renderPunchCard(loading, punch, width)}

        <InsightRow>
          {this.renderTitle('Insights')}
          <Insights loading={loading.insights} data={insights} />
        </InsightRow>
      </InsightContent>
    );
  }
}

VolumeReport.propTypes = propTypes;

export default VolumeReport;