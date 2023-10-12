import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./screens/home";
import { PlayersList } from "./screens/players";
import { RegisterCoach } from "./screens/register";

const { Screen, Navigator } = createNativeStackNavigator();
export function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="Jogadores" component={PlayersList} />
        <Screen name="Cadastro" component={RegisterCoach} />
      </Navigator>
    </NavigationContainer>
  );
}
