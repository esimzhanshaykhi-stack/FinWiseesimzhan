import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../components/theme';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.replace('/onboarding'), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📈</Text>
      <Text style={styles.logo}>FinWise</Text>
      <Text style={styles.subtitle}>Smart Finance Management</Text>
      <Text style={styles.footer}>Manage your money wisely</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: { fontSize: 85 },
  logo: { fontSize: 44, fontWeight: '900', color: 'white' },
  subtitle: { color: 'white', marginTop: 10 },
  footer: { position: 'absolute', bottom: 50, color: 'white' },
});