import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';

const FindMinimum = () => {
  const [nums, setNums] = useState({ a: '', b: '', c: '' });
  const [min, setMin] = useState<number | null>(null);

  const handleMin = () => {
    const { a, b, c } = nums;
    const values = [parseFloat(a), parseFloat(b), parseFloat(c)];
    setMin(Math.min(...values));
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Number 1" keyboardType="numeric" value={nums.a} onChangeText={(text) => setNums({ ...nums, a: text })} style={{ borderWidth: 1 }} />
      <TextInput placeholder="Number 2" keyboardType="numeric" value={nums.b} onChangeText={(text) => setNums({ ...nums, b: text })} style={{ borderWidth: 1 }} />
      <TextInput placeholder="Number 3" keyboardType="numeric" value={nums.c} onChangeText={(text) => setNums({ ...nums, c: text })} style={{ borderWidth: 1 }} />
      <Button title="Find Minimum" onPress={handleMin} />
      {min !== null && <Text>Minimum: {min}</Text>}
    </View>
  );
};

export default FindMinimum;
