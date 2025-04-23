import React, { useState } from 'react';
import { View, TextInput, Text, Button, ScrollView } from 'react-native';

const HailstoneSequence = () => {
  const [input, setInput] = useState('');
  const [sequence, setSequence] = useState<number[]>([]);

  const handleGenerate = () => {
    let n = parseInt(input);
    if (n <= 0 || isNaN(n)) return;

    const result = [];
    while (n !== 1) {
      result.push(n);
      n = n % 2 === 0 ? n / 2 : n * 3 + 1;
    }
    result.push(1);
    setSequence(result);
  };

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <TextInput placeholder="Enter positive number" keyboardType="numeric" value={input} onChangeText={setInput} style={{ borderWidth: 1 }} />
      <Button title="Generate Hailstone" onPress={handleGenerate} />
      <ScrollView>
        <Text>Sequence: {sequence.join(', ')}</Text>
      </ScrollView>
    </View>
  );
};

export default HailstoneSequence;
