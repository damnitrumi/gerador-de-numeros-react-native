import React, {ReactNode} from 'react';
import {Text, View, StyleSheet} from 'react-native';

type RenderNumeroProps = {
  children: ReactNode;
};

export default class RenderNumero extends React.Component<RenderNumeroProps> {
  render(): ReactNode {
    return (
      <View style={style.mainContainer}>
        <Text style={style.text}>{this.props.children}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 20,
  },
});
