import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Svg, Polygon} from 'react-native-svg'
import Triangle from 'triangle-solver'

export default function App() {
  const [points, setPoints ] = useState('')
  const [values, setValues] = useState({
    a: 3,
    b: 3,
    c: 3,
    A: 60,
    B: 60,
    C: 60
  })
  useEffect(()=>{
    console.log('effect', points.split(' '))
  })
  let triangle = new Triangle(values)

  const solveTriangle = () => {
    triangle.solve()
    setPoints(triangle.draw(300))
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      
      <TextInput 
        onChangeText={num=>setValues({a: num})}
        keyboardType='numeric'
        value={values.a}
        style={[styles.input]}
      />

      <TextInput 
        onChangeText={num=>setValues({b: num})}
        keyboardType='numeric'
        value={values.b}
        style={[styles.input]}
      />

      <TextInput 
        onChangeText={text=>setValues({c: text})}
        keyboardType='numeric'
        value={values.c}
        style={[styles.input]}
      />

      <TextInput 
        onChangeText={num=>setValues({A: num})}
        keyboardType='numeric'
        value={values.A}
        style={[styles.input]}
      />
      <TextInput 
        onChangeText={num=>setValues({B: num})}
        keyboardType='numeric'
        value={values.B}
        style={[styles.input]}
      />
      <TextInput 
        onChangeText={num=>setValues({C: num})}
        keyboardType='numeric'
        value={values.C}
        style={[styles.input]}
      />
      <Svg height='300' width='300'>
        <Polygon
          points={points}
          fill='white'
          stroke='black'
          strokeWidth='1'
        />
      </Svg>
      <Button 
        onPress={solveTriangle} 
        title="Solve"
        color="#841584"
        accessibilityLabel="Compute angles and side leghts of passed triangle"  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    position: 'absolute',
    backgroundColor: 'green',
    width: '20px',
  }
});
