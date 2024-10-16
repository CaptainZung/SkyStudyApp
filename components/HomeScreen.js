import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const { userName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello {userName}</Text>
      <Text style={styles.points}>1234 points</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>English by topic</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Playing Game</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Your Dictionary</Text>
      </TouchableOpacity>

      {/* Nút camera hình tròn */}
      <TouchableOpacity style={styles.cameraButton} onPress={() => navigation.navigate('Camera')}>
        <Image source={require('../assets/images/cam.png')} style={styles.cameraIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB', // Màu nền xanh da trời nhạt
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  points: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#1E90FF', // Màu xanh đậm
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    width: 80, // Kích thước của nút
    height: 80,
    borderRadius: 40, // Tạo hình tròn (nửa chiều rộng và chiều cao)
    backgroundColor: '#1E90FF', // Màu nền của nút
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    width: 50, // Kích thước icon bên trong nút chụp
    height: 50,
    resizeMode: 'contain',
  },
});
