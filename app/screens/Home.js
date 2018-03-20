import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('Press base');
  };
  handlePressQuoteCurrency = () => {
    console.log('Press quote');
  };

  handleChangeText = (text) => {
    console.log('Change text', text);
  };
  handleSwapCurrency = () => {
    console.log('Press swap Currency');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultvallue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleChangeText}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          editable={false}
          onPress={this.handlePressQuoteCurrency}
          value={TEMP_QUOTE_PRICE}
        />
        <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
      </Container>
    );
  }
}
export default Home;
