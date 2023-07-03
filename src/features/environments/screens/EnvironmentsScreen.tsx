import { useState, useContext } from 'react';
import { Dimensions, FlatList, View } from "react-native";
import { ActivityIndicator, SegmentedButtons } from 'react-native-paper';
import { PieChart } from 'react-native-chart-kit';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/SafeArea';
import { Text } from '../../../components/Text';
import { LogsContext } from '../../../services/logs/logs.context';
import { colors } from '../../../theme/colors';


const screenWidth = Dimensions.get("window").width;

const Circle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-right: 10px;
`;

const chartColors = [
  'rgba(217, 78, 147, 1)',
  'rgba(253, 255, 133, 1)',
  'rgba(101, 139, 191, 1)',
  'rgba(158, 205, 245, 1)',
  'rgba(253, 165, 56, 1)',
  'rgba(208, 172, 245, 1)',
  'rgba(242, 147, 142, 1)',
  'white'
]

export const EnvironmentsScreen = () => {
  const { logs, envs } = useContext(LogsContext);
  const [mood, setMood] = useState('good');

  if (!logs || !envs) {
    return <ActivityIndicator/>;
  };

  const filterLogsByMood = (mood: string) => {
    switch (mood) {
      case 'good':
        return logs.filter((log) => log.feelingRank >= 6);
      case 'bad':
        return logs.filter((log) => log.feelingRank < 6);
      default:
        return logs;
    }
  };

  const getLogCount = (env: string) => {
    return filteredLogs
      .filter((log) => log.environment === env)
      .length;
  };

  let filteredLogs = filterLogsByMood(mood);

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          usePointStyle: true,
          pointStyle: "circle"
        }
      },
    },
    maintainAspectRatio: false
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const data = envs.map((env, i) => ({
    name: env.name,
    count: getLogCount(env.name),
    color: chartColors[i],
    legendFontColor: "white",
    legendFontSize: 15
  }));

  return (
    <SafeArea>
      <Text variant='heading' style={{ textAlign: 'center', marginBottom: 15 }}>Where you are when you are feeling</Text>

      <SegmentedButtons
        value={mood}
        onValueChange={setMood}
        buttons={[
          {
            value: 'good',
            label: 'Good'
          },
          {
            value: 'bad',
            label: 'Bad'
          }
        ]}
        theme={{ colors: { 
          secondaryContainer: colors.bg.secondary,
          onSecondaryContainer: "black",
          onSurface: "white"
        }}}
        style={{ width: 200, alignSelf: "center" }}
      />

      <PieChart
        data={data}
        width={screenWidth}
        height={240}
        chartConfig={chartConfig}
        accessor={"count"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        style={{ display: "flex", flexDirection: "column"}}
        hasLegend={false}
        center={[60, 0]}
      />

      <View style={{ paddingLeft: 30 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 8, flexDirection: 'row', alignItems: 'center' }}>
                <Circle style={{ backgroundColor: item.color }} />
                <Text>
                  {item.name}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </SafeArea>
  )
};