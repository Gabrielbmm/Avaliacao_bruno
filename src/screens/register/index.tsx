import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function RegisterCoach() {

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [experience, setExperience] = useState<string>("");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre o técnico</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        onChangeText={setName}
        value={name}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
        onChangeText={setAge}
        value={age}
      />

      <TextInput
        style={styles.input}
        placeholder="Experiência"
        onChangeText={setExperience}
        value={experience}
      />

      <TextInput
        style={styles.input}
        placeholder="Nacionalidade"
        onChangeText={setNationality}
        value={nationality}
      />

      <TouchableOpacity style={styles.btn} onPress={toggleModal}>
        <Text style={styles.btnTxt}>Cadastrar</Text>
      </TouchableOpacity>

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
            <Text style={{ color: "#fff" }}>Nome: {name}</Text>
            <Text style={{ color: "#fff" }}>Idade: {age}</Text>
            <Text style={{ color: "#fff" }}>Nacionalidade: {nationality}</Text>
            <Text style={{ color: "#fff" }}>Experiência: {experience}</Text>
          </View>
        </View>
      )}
    </View>
  );
}
