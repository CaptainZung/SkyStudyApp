import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const { userName } = route.params;

  return (
    <ImageBackground
      source={require('../assets/images/anhnenchinh.png')} // Background image
      style={styles.backgroundImage}
    >
      {/* Avatar and Greeting section */}
      <View style={styles.avatarSection}>
        <TouchableOpacity onPress={() => {/* Function to change avatar */}}>
          <Image source={require('../assets/images/flip.png')} style={styles.avatar} />
        </TouchableOpacity>
        
        {/* Greeting and points aligned to the left */}
        <View style={styles.infoContainer}>
          <Text style={styles.greeting}>Hello {userName}</Text>
          <Text style={styles.points}>0 points</Text>
        </View>
      </View>

      {/* Days of the week */}
      <View style={styles.daysContainer}>
        {['Mon', 'Tus', 'Wed', 'Thus', 'Fri'].map((day) => (
          <View key={day} style={styles.day}>
            <Text>{day}</Text>
          </View>
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/images/englishbytopic_icon.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>English by topic</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/images/game_icon.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Playing Game</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/images/dictionary_icon.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Your Dictionary</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('../assets/images/home_icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('../assets/images/scan_icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('../assets/images/setting_icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the entire screen
    justifyContent: 'center',
  },
  avatarSection: {
    position: 'absolute', // Allows positioning independently of other content
    top: 50, // Move closer to the top of the screen
    left: 20, // Align avatar and text to the left side
    flexDirection: 'row', // Aligns avatar and text in a row
    alignItems: 'center',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#ccc',
  },
  infoContainer: {
    marginLeft: 15, // Spacing between avatar and text
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  points: {
    fontSize: 18,
    color: '#FFF',
    marginTop: 5,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Center and distribute the days
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center', // Center the entire days container
    marginTop: 200, // Adjust as needed to move it down
    marginBottom: 20,
    paddingHorizontal: 10, // Adds some padding between the days
  },
  day: {
    width: 60,
    height: 60,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 40,
    width: '100%', // Make sure buttons stay centered within the screen
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#00BCD4',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
    width: '80%', // Ensures button width is consistent and centered
    justifyContent: 'center',
    alignSelf: 'center', // Ensures the button itself is centered
    shadowColor: '#000', // Adding shadow for button effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20, // Increase font size slightly
    fontWeight: 'bold', // Make the text bold for better emphasis
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Evenly space the icons
    width: '100%',
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 20, // Add some padding for better spacing
  },
  navButton: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 50, // Makes the button circular
    shadowColor: '#000', // Adding shadow for button effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  navIcon: {
    width: 48,
    height: 48,
  },
});
