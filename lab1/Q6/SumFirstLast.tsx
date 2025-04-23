import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';

const SumFirstLastDigit = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleSum = () => {
    const numStr = number.trim();
    if (numStr.length > 0) {
      const first = parseInt(numStr[0]);
      const last = parseInt(numStr[numStr.length - 1]);
      setResult(first + last);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Enter number" keyboardType="numeric" value={number} onChangeText={setNumber} style={{ borderWidth: 1 }} />
      <Button title="Sum First + Last Digit" onPress={handleSum} />
      {result !== null && <Text>Result: {result}</Text>}
    </View>
  );
};

export default SumFirstLastDigit;
