import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import Layout from '../components/Layout';
import { COLORS } from '../components/theme';
import { registerDemo } from '../components/demoAuth';

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  function register() {
    if (password.length < 6) { setError('Password must have at least 6 characters'); return; }
    if (password !== confirm) { setError('Passwords do not match'); return; }
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) { setError('Enter a valid email'); return; }
    const result = registerDemo({ name, email, password });
    if (result.error) { setError(result.error); return; }
    setError('');
    router.replace('/pin');
  }
  return (
    <Layout title="Create Account">
      <Text style={styles.subtitle}>Start managing your money today.</Text>
      <Text style={styles.label}>Full Name</Text>
      <CustomInput placeholder="Your full name" value={name} onChangeText={setName} />
      <Text style={styles.label}>Email</Text>
      <CustomInput placeholder="Email address" value={email} onChangeText={setEmail} />
      <Text style={styles.label}>Password</Text>
      <CustomInput placeholder="Create password" secureTextEntry value={password} onChangeText={setPassword} />
      <Text style={styles.label}>Confirm Password</Text>
      <CustomInput placeholder="Confirm password" secureTextEntry value={confirm} onChangeText={setConfirm} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <CustomButton title="Sign Up" onPress={register} />
      <CustomButton title="Already have an account? Login" secondary onPress={() => router.replace('/login')} />
    </Layout>
  );
}
const styles = StyleSheet.create({
  subtitle: { color: COLORS.gray, marginBottom: 25 },
  label: { fontWeight: '600', color: COLORS.dark, marginBottom: 8 },
  error: { color: '#B91C1C', marginBottom: 12 },
});