import { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from 'react-native-paper';
import { AppNavigator } from './AppNavigator';
import { AccountNavigator } from "./AccountNavigator";
import { AuthenticationContext } from '../services/auth/auth.context';
import { SafeArea } from '../components/SafeArea';

export const Navigation = () => {
  const { user, isLoading } = useContext(AuthenticationContext);

  if(isLoading) {
    return(
      <SafeArea style={{ justifyContent: 'center' }}>
        <ActivityIndicator/>
      </SafeArea>
    )
  };

  return (
    <NavigationContainer>
      { user ? <AppNavigator /> : <AccountNavigator /> }
    </NavigationContainer>
  );
};