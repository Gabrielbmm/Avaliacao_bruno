import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

export function Home() {
  const navigator = useNavigation()

  function handleNavigate(route: keyof ReactNavigation.RootParamList) {
    navigator.navigate(route)
  }

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 24,
        }}
      >
        Home
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#ccc",
          padding: 16,
          borderRadius: 8,
          marginBottom: 16,
        }}
        onPress={() => handleNavigate('Cadastro')}
      >
        <Text>Cadastrar Técnico</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#ccc",
          padding: 16,
          borderRadius: 8,
        }}
        onPress={() => handleNavigate('Jogadores')}
      >
        <Text>Lista de Jogadores</Text>
      </TouchableOpacity>
    </View>
  );
}
