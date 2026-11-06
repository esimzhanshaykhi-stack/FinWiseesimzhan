import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import Layout from '../components/Layout';
import { COLORS } from '../components/theme';
import { loginDemo } from '../components/demoAuth';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  function login() {
    const result = loginDemo(email, password);
    if (result.error) { setError(result.error); return; }
    setError('');
    router.replace('/pin');
  }
  return (
    <Layout>
      <View style={styles.header}>
        <Text style={styles.logo}>FINWISE</Text>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Login to your FinWise account</Text>
      </View>
      <Text style={styles.label}>Email Address</Text>
      <CustomInput placeholder="Enter your email" value={email} onChangeText={setEmail} />
      <Text style={styles.label}>Password</Text>
      <CustomInput placeholder="Enter your password" secureTextEntry value={password} onChangeText={setPassword} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity onPress={() => router.push('/forgot-password')}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
      <CustomButton title="Log In" onPress={login} />
      <CustomButton title="Create Account" secondary onPress={() => router.push('/register')} />
    </Layout>
  );
}
const styles = StyleSheet.create({
  header: { alignItems: 'center', marginBottom: 45, marginTop: 45 },
  logo: { fontSize: 24, color: COLORS.primary, fontWeight: 'bold' },
  title: { fontSize: 30, fontWeight: 'bold', color: COLORS.dark },
  subtitle: { color: COLORS.gray, marginTop: 10 },
  label: { color: COLORS.dark, fontWeight: '600', marginBottom: 8 },
  link: { textAlign: 'right', color: COLORS.primary, marginBottom: 20 },
  error: { color: '#B91C1C', marginBottom: 12 },
});