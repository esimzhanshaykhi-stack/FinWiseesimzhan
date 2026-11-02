import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import Layout from '../components/Layout';
import { COLORS } from '../components/theme';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Layout>
      <View style={styles.header}>
        <Text style={styles.logo}>📈</Text>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Login to your FinWise account</Text>
      </View>

      <Text style={styles.label}>Email Address</Text>
      <CustomInput placeholder="Enter your email" value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Password</Text>
      <CustomInput
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={() => router.push('/forgot-password')}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>

      <CustomButton title="Log In" onPress={() => router.push('/pin')} />
      <CustomButton title="Create Account" secondary onPress={() => router.push('/register')} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  header: { alignItems: 'center', marginBottom: 45, marginTop: 45 },
  logo: { fontSize: 70 },
  title: { fontSize: 30, fontWeight: 'bold', color: COLORS.dark },
  subtitle: { color: COLORS.gray, marginTop: 10 },
  label: { color: COLORS.dark, fontWeight: '600', marginBottom: 8 },
  link: { textAlign: 'right', color: COLORS.primary, marginBottom: 20 },
});