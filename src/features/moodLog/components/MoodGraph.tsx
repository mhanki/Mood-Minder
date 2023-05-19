import { Log } from '../../../services/logs/logs.context';
import { Feeling } from '../../../services/logs/logs.context';
import { Text } from '../../../components/Text';
import { LineChart } from 'react-native-chart-kit';
import styled from 'styled-components/native';
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const GraphContainer = styled.View`
  padding-left: ${({theme}) => theme.space.medium}px;
  z-Index: -1;
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

  const latestLogs = logs.slice(Math.max(logs.length - 10, 0));

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
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5
  };

  function* yLabel() {
    yield* feelings.sort((a, b) => a.rank - b.rank).map(feeling => feeling.name);
  };

  const yLabelIterator = yLabel();

  return (
    <GraphContainer>
      <Text variant={"title"}>Mood Graph</Text>

      <LineChart
        data={data}
        width={screenWidth-35}
        height={290}
        chartConfig={chartConfig}
        formatYLabel={(): string => yLabelIterator.next().value!}
        segments={10}
        verticalLabelRotation={60}
      />
    </GraphContainer>
  );
};
