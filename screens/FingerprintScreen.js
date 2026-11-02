import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import Layout from '../components/Layout';
import { COLORS } from '../components/theme';

export default function FingerprintScreen() {
  const router = useRouter();

  return (
    <Layout title="Security Fingerprint">
      <View style={styles.center}>
        <Text style={styles.icon}>👆</Text>
        <Text style={styles.title}>Use Fingerprint to Access</Text>
        <Text style={styles.subtitle}>Secure and easy access to your finances.</Text>
      </View>
      <CustomButton title="Continue to Home" onPress={() => router.replace('/home')} />
      <CustomButton title="Skip for Now" secondary onPress={() => router.replace('/home')} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  icon: { fontSize: 110, marginBottom: 25 },
  title: { fontSize: 22, fontWeight: 'bold', color: COLORS.dark },
  subtitle: { color: COLORS.gray, textAlign: 'center', marginTop: 15 },
});