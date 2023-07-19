import { useState, useContext } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import {
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer
} from "../components/Account.styles";
import { Text } from "../../../components/Text";
import { SafeArea } from "../../../components/SafeArea";
import { AuthenticationContext } from "../../../services/auth/auth.context";

export const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onRegister } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Text variant="heading">Sign Up</Text>
      <AccountContainer>
        <AuthInput
          label="Namer"
          value={name}
          textContentType="name"
          autoCapitalize="none"
          onChangeText={(n) => setName(n)}
        />
        <AuthInput
          label="Username"
          value={username}
          textContentType="username"
          autoCapitalize="none"
          onChangeText={(u) => setUsername(u)}
        />
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(e) => setEmail(e)}
        />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onRegister({name, username, email, password})}
          >
            Sign Up
          </AuthButton>
      </AccountContainer>
    </SafeArea>
  );
};