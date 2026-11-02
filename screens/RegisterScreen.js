import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import Layout from '../components/Layout';
import { COLORS } from '../components/theme';

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <CustomInput placeholder="Confirm password" secureTextEntry />

      <CustomButton title="Sign Up" onPress={() => router.push('/pin')} />
      <CustomButton title="Already have an account? Login" secondary onPress={() => router.replace('/login')} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  subtitle: { color: COLORS.gray, marginBottom: 25 },
  label: { fontWeight: '600', color: COLORS.dark, marginBottom: 8 },
});