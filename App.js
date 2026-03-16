import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TextInput, 
  Button, 
  StyleSheet, 
  ScrollView 
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');
  
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    console.log("CP1: Aplicativo carregado e pronto para uso.");
  }, []);


  const lidarComEnvio = () => {
    setEnviado(true); 
  };

  return (
    <SafeAreaView style={styles.container}> 
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.formContainer}> 
          <Text style={styles.titulo}>CheckPoint 01 - TDS</Text> 

          <Text style={styles.label}>Nome:</Text>
          <TextInput 
            style={styles.input}
            placeholder="Digite seu nome completo" 
            value={nome}
            onChangeText={setNome} 
          />

          <Text style={styles.label}>Curso:</Text>
          <TextInput 
            style={styles.input}
            placeholder="Ex: Análise e Desenv. de Sistemas" 
            value={curso}
            onChangeText={setCurso}
          />

          <Text style={styles.label}>Disciplina:</Text>
          <TextInput 
            style={styles.input}
            placeholder="Ex: Mobile App Development" 
            value={disciplina}
            onChangeText={setDisciplina}
          />

          <Text style={styles.label}>Descrição Pessoal:</Text>
          <TextInput 
            style={[styles.input, styles.inputDescricao]}
            placeholder="Fale um pouco sobre você..." 
            multiline={true}
            numberOfLines={3}
            value={descricao}
            onChangeText={setDescricao}
          />

          <Button 
            title="Enviar Formulário" 
            onPress={lidarComEnvio} 
            color="#red145b" 
          />
        </View>

        {enviado && (
          <View style={styles.resultadoContainer}>
            <Text style={styles.resultadoTitulo}>Dados Cadastrados:</Text>
            <View style={styles.linhaResultado}>
              <Text style={styles.dadoLabel}>Nome: </Text>
              <Text>{nome}</Text> 
            </View>
            <View style={styles.linhaResultado}>
              <Text style={styles.dadoLabel}>Curso: </Text>
              <Text>{curso}</Text> 
            </View>
            <View style={styles.linhaResultado}>
              <Text style={styles.dadoLabel}>Disciplina: </Text>
              <Text>{disciplina}</Text> 
            </View>
            <View style={styles.linhaResultado}>
              <Text style={styles.dadoLabel}>Descrição: </Text>
              <Text>{descricao}</Text> 
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  scroll: {
    padding: 20,
  },
  formContainer: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26, 
    fontWeight: 'bold',
    color: '#red145b',
    textAlign: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 7, 
    padding: 12,
    fontSize: 18, 
    marginBottom: 15, 
    borderWidth: 1,
    borderColor: '#ddd',
  },
  inputDescricao: {
    height: 100,
    textAlignVertical: 'top',
  },
  resultadoContainer: {
    backgroundColor: '#fff0f5',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#red145b',
    marginTop: 10, 
  },
  resultadoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  linhaResultado: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  dadoLabel: {
    fontWeight: 'bold',
  }
});