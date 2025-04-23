import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

interface EmployeeProps {
  onUpdate: (name: string, age: number, job: string) => void;
}

const EmployeeForm: React.FC<EmployeeProps> = ({ onUpdate }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [job, setJob] = useState('');

  const handleSubmit = () => {
    onUpdate(name, parseInt(age), job);
    Alert.alert('Success', 'Employee updated successfully!');
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Full Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <Text>Age:</Text>
      <TextInput
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <Text>Occupation:</Text>
      <TextInput
        value={job}
        onChangeText={setJob}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <Button title="Update" onPress={handleSubmit} />
    </View>
  );
};

export default EmployeeForm;
