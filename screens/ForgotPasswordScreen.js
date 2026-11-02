import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import Layout from '../components/Layout';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  return (
    <Layout title="Forgot Password?">
      <Text style={{ marginBottom: 25, color: '#7A9690' }}>
        Enter your email address to reset your password.
      </Text>
      <CustomInput placeholder="Email address" value={email} onChangeText={setEmail} />
      <CustomButton title="Reset Password" onPress={() => router.push('/new-password')} />
      <CustomButton title="Back to Login" secondary onPress={() => router.back()} />
    </Layout>
  );
}