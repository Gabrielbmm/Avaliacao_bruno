import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { footballPlayers } from "../../data/players";
import { useState } from "react";

interface Players {
  name: string;
  position: string;
  age: number;
}

export function PlayersList() {
  const [textToPrint, setTextToPrint] = useState<string>("");

  function handleSelectUser(user: Players) {
    setTextToPrint("Dados do jogador:");

    Object.entries(user).forEach(([key, value]) => {
      setTextToPrint((oldText) => oldText + `\n${key}: ${value}`);
    });
    toggleModal();
  }

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogadores</Text>
      <View style={styles.body}>
        <FlatList
          data={footballPlayers}
          keyExtractor={(user, index) => user.name + index.toString()}
          renderItem={({ item: user }) => (
            <TouchableOpacity
              style={[
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  alignSelf: "center",
                },
                styles.itemList,
              ]}
              onPress={() => handleSelectUser(user)}
            >
              <Text>{user.name}</Text>
              <Text>{user.position}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      {isOpen && (
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#1E1E25",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "25%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Text style={styles.title}>Cadastro realizado com sucesso!</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.title}>X</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "25%",
              display: "flex",
            }}
          >
            <Text style={{ color: "#fff" }}>{textToPrint}</Text>
          </View>
        </View>
      )}
    </View>
  );
}
