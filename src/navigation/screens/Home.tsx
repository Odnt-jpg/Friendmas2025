import React, { useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'


import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#000',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})

export function Home({ navigation }) {
  const opacity = useRef(new Animated.Value(0)).current
  const slideY = useRef(new Animated.Value(20)).current

  const floatY = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start()

    // Floating loop
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatY, {
          toValue: -10,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(floatY, {
          toValue: 10,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start()
  }, [])

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.title,
          {
            opacity,
            transform: [
              { translateY: Animated.add(slideY, floatY) },
            ],
          },
        ]}
      >
        Friendmas 2025
      </Animated.Text>

      <Animated.Text style={[styles.subtitle, { opacity }]}>
        :D
      </Animated.Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MainScreen')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}
