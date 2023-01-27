import React from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';
import RenderNumero from './RenderNumero';

export default class GeradorNumeros extends React.Component {
  state = {
    qtdeNumeros: '',
    numeros: [],
  };

  handleTextChange = (qtde: string) => {
    this.setState({qtdeNumeros: +qtde});
  };

  gerarNovoNumero = (nums: any): number => {
    const novo = parseInt(`${Math.random() * 60}`, 10) + 1;
    return nums.includes(novo) ? this.gerarNovoNumero(nums) : novo;
  };

  //Outra forma da função para gerar números únicos
  // gerarNumeros = () => {
  //   const numeros = Array(this.state.qtdeNumeros)
  //     .fill('')
  //     .reduce(n => [...n, this.gerarNovoNumero(n)], []);
  //   this.setState({numeros});
  // };

  gerarNumeros = () => {
    var numeros: number[] = [];
    const qtde = Number(this.state.qtdeNumeros);
    for (let i = 0; i < qtde; i++) {
      numeros.push(this.gerarNovoNumero(numeros));
    }

    //Caso queira ordenar os números
    // numeros.sort((a, b) => a - b);

    this.setState({numeros});
  };

  render(): React.ReactNode {
    return (
      <View style={style.mainContainer}>
        <Text style={style.title}>Gerador de Números</Text>
        <TextInput
          placeholder="Digite a quantidade de numeros que deseja"
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
          value={`${this.state.qtdeNumeros}`}
          style={style.input}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        <View style={style.numbersContainer}>
          {this.state.numeros.map(el => {
            return <RenderNumero key={el}>{el}</RenderNumero>;
          })}
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: '#000',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  numbersContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 5,
  },
});
