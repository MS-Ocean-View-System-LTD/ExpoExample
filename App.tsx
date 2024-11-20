import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLoadImage = () => {
    setImageLoaded(true);
  };

  return (
    <View style={styles.container}>
      <Text>Expo example!</Text>

      <Button title="Load Image" onPress={handleLoadImage} />

      {imageLoaded && (
        <Image
          source={require('./assets/image1.jpeg')} 
          style={styles.image}
        />
      )}

      <StatusBar style="auto" />
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
  image: {
    width: 200, 
    height: 200,
    marginTop: 20,
  },
});
