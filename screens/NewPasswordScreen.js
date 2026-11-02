import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import Layout from '../components/Layout';

export default function NewPasswordScreen() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <Layout title="New Password">
      <Text style={{ color: '#7A9690', marginBottom: 25 }}>
        Create a strong new password.
      </Text>
      <CustomInput placeholder="New password" secureTextEntry value={password} onChangeText={setPassword} />
      <CustomInput placeholder="Confirm password" secureTextEntry value={confirm} onChangeText={setConfirm} />
      <CustomButton title="Change Password" onPress={() => router.replace('/login')} />
    </Layout>
  );
}