import { Dimensions } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import styled from 'styled-components/native';
import { Log } from '../../../services/logs/logs.context';
import { Feeling } from '../../../services/logs/logs.context';

const screenWidth = Dimensions.get("window").width;

const GraphContainer = styled.View`
  /* padding: ${({theme}) => theme.space.medium}px; */
  /* backgroundColor: ${({theme}) => theme.colors.ui.tertiary}; */
 flex: 1;
 align-items: center;
 justify-content: center;
`;

const formatDate = (date: string, options?: Intl.DateTimeFormatOptions | undefined) => 
  new Date(date)
    .toLocaleString('en-us', options);

/**
 * 
 * @param data Data array to be sorted by "created_at" dates
 * @param sortOrder Optional sort order. Default order is ascending, set parameter to 'desc' to change it to descending
 */
export const sortByDate = (data: any[], sortOrder?: string): void => {
  data.sort(function(a, b) {
    const timeA = new Date(a.createdAt).getTime();
    const timeB = new Date(b.createdAt).getTime();

    return sortOrder === 'desc'
      ? timeB - timeA
      : timeA - timeB
  });
};

export const MoodGraph = ({ logs, feelings }: { logs: Log[], feelings: Feeling[] }) => {
  sortByDate(logs);

  const latestLogs = logs.slice(Math.max(logs.length - 12, 0));

  const data = {
    labels: latestLogs.map(log => formatDate(log.createdAt, { month: "short", day: "2-digit" })),
    datasets: [
      {
        data: latestLogs.map(log => log.feelingRank),
      },
      {
        data: [1],
        withDots: false,
      },
      {
        data: [feelings.length],
        withDots: false,
      },
    ]
  };

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    fillShadowGradient:'skyblue',
    fillShadowGradientOpacity:1
  };

  function* yLabel() {
    yield* feelings.sort((a, b) => a.rank - b.rank).map(feeling => feeling.name);
  };

  const yLabelIterator = yLabel();

  return (
    <GraphContainer>
      <LineChart
        data={data}
        width={screenWidth+20}
        height={290}
        chartConfig={chartConfig}
        formatYLabel={(): string => yLabelIterator.next().value!}
        segments={10}
        verticalLabelRotation={60}
        withDots={false}
        withHorizontalLabels={false}
        style={{ marginLeft: -40 }}
        withInnerLines={false}
        withOuterLines={false}
      />
    </GraphContainer>
  );
};
