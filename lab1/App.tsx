// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import style from './style';
// import data from './data';
// import Square from './Square';

// import EmployeeForm from './Q6/EmployeeForm';
// import FindMinimum from './Q6/FindMinimum';
// import HailstoneSequence from './Q6/HailstoneSequence';
// import SumFirstLastDigit from './Q6/SumFirstLast';

// function App(): React.JSX.Element {
//   return (
//     <View>
//     <ScrollView>
//       {data.map((item, index) => (
//         <Square key={item} text={`Square ${index + 1}`} />
//       ))}
//     </ScrollView>
//     <SafeAreaView style={{ flex: 1 }}>
//       <EmployeeForm onUpdate={function (name: string, age: number, job: string): void {
//         throw new Error('Function not implemented.');
//       } } />
//       <FindMinimum />
//       <HailstoneSequence />
//       <SumFirstLastDigit />
//   </SafeAreaView>
//   </View>
//   );
// }

// const styles = StyleSheet.create({
  
// });

// export default App;

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';

import data from './Q4/data';
import Square from './Q4/Square';
import style from './Q4/style';

import EmployeeForm from './Q6/EmployeeForm';
import FindMinimum from './Q6/FindMinimum';
import HailstoneSequence from './Q6/HailstoneSequence';
import SumFirstLastDigit from './Q6/SumFirstLast';


type Screen ='Q4'|'employee' | 'sumDigits' | 'minOfThree' | 'hailstone';

function App() {
  const [screen, setScreen] = useState<Screen | null>(null);
  const [employeeInfo, setEmployeeInfo] = useState<{ name: string; age: number; job: string } | null>(null);

  const renderComponent = () => {
    switch (screen) {
      case 'Q4':
        return(
      <ScrollView>
      {data.map((item, index) => (
        <Square key={item} text={`Square ${index + 1}`} />
      ))}
    </ScrollView>
        );
      case 'employee':
        return (
          <View>
            <EmployeeForm
              onUpdate={(name, age, job) => {
                setEmployeeInfo({ name, age, job });
              }}
            />
            {employeeInfo && (
              <View>
                <Text><b>Name:</b> {employeeInfo.name}</Text>
                <Text><b>Age: </b>{employeeInfo.age}</Text>
                <Text><b>Job:</b> {employeeInfo.job}</Text>
              </View>
            )}
          </View>
        );
      case 'sumDigits':
        return <SumFirstLastDigit />;
      case 'minOfThree':
        return <FindMinimum />;
      case 'hailstone':
        return <HailstoneSequence />;
      default:
        return (
          ""
        );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.menu}>
        <Text style={styles.title}>Choose an exercise:</Text>
        <Button title="Q4 - Square" onPress={() => setScreen('Q4')} />
        <Button title="Q6 -  Employee Form" onPress={() => setScreen('employee')} />
        <Button title="Q6 -  Sum First & Last Digit" onPress={() => setScreen('sumDigits')} />
        <Button title="Q6 -  Find Minimum of 3" onPress={() => setScreen('minOfThree')} />
        <Button title="Q6 -  Hailstone Sequence" onPress={() => setScreen('hailstone')} />
      </View>
      <View style={styles.content}>
        {renderComponent()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  menu: {
    padding: 16,
    gap: 10,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,

  },
  content: {
    flex: 1,
    padding: 16,
  },
  Button :{
    textAlign:"left"
  }
});

export default App;
