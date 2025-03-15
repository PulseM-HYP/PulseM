import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { motion } from 'framer-motion';
import Sound from 'react-sound';

const PulseBeat = () => (
  <View style={styles.logoContainer}>
    <Text style={styles.logoText}>_/\__/</Text>
  </View>
);

const Watermark = () => (
  <TouchableOpacity onPress={() => alert('Go to Persona')} style={styles.watermark}>
    <Text style={styles.watermarkText}>PulseM</Text>
    <Text style={styles.watermarkPulse}>_/\__/</Text>
  </TouchableOpacity>
);

const SplashScreen = () => (
  <motion.View
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
    style={styles.splash}
  >
    <PulseBeat />
    <Text style={styles.splashText}>Hype in Motion</Text>
    <Sound
      url={require('../assets/splash.mp3')}
      playStatus={Sound.status.PLAYING}
    />
  </motion.View>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <SplashScreen />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>VibeStream</Text>
      <Image source={require('../assets/post.png')} style={styles.post} />
      <Watermark />
    </View>
  );
}
