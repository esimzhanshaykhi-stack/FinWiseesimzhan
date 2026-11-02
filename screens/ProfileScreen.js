import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Layout from '../components/Layout';
import CustomButton from '../components/CustomButton';
import BottomNav from '../components/BottomNav';
import { COLORS } from '../components/theme';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Layout title="My Profile">
        <View style={styles.center}>
          <Text style={styles.avatar}>👩🏻</Text>
          <Text style={styles.name}>Seidrazakh Amina</Text>
          <Text style={styles.email}>FinWise User</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.item}>👤 Personal Information</Text>
          <Text style={styles.item}>🔒 Security Settings</Text>
          <Text style={styles.item}>🔔 Notifications</Text>
          <Text style={styles.item}>❓ Help & Support</Text>
        </View>

        <CustomButton title="Log Out" secondary onPress={() => router.replace('/login')} />
      </Layout>
      <BottomNav active="Profile" />
    </View>
  );
}

const styles = StyleSheet.create({
  center: { alignItems: 'center', marginBottom: 30 },
  avatar: { fontSize: 85 },
  name: { fontSize: 23, fontWeight: 'bold', color: COLORS.dark },
  email: { color: COLORS.gray, marginTop: 8 },
  card: { backgroundColor: 'white', borderRadius: 20, padding: 20 },
  item: { padding: 17, borderBottomWidth: 1, borderColor: COLORS.light, color: COLORS.dark },
});