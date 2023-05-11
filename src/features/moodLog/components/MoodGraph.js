import { Text } from '../../../components/Text';
import styled from 'styled-components/native';

const GraphContainer = styled.View`
  padding: ${({theme}) => theme.space.medium}px;
`;

export const MoodGraph = () => {

  return (
    <GraphContainer>
      <Text variant={"title"}>Mood Graph</Text>
    </GraphContainer>
  );
};