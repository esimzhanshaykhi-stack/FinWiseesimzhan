import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Layout from '../components/Layout';
import CustomButton from '../components/CustomButton';
import BottomNav from '../components/BottomNav';
import { COLORS } from '../components/theme';
import { logoutDemo, useDemoUser } from '../components/demoAuth';

export default function ProfileScreen() {
  const router = useRouter();
  const user = useDemoUser();
  return (
    <View style={{ flex: 1 }}>
      <Layout title="My Profile">
        <View style={styles.center}>
          <Text style={styles.avatar}>PROFILE</Text>
          <Text style={styles.name}>{user?.name || 'Guest'}</Text>
          <Text style={styles.email}>{user?.email || 'Please log in'}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.item}>Personal Information</Text>
          <Text style={styles.item}>Security Settings</Text>
          <Text style={styles.item}>Notifications</Text>
          <Text style={styles.item}>Help & Support</Text>
        </View>
        <CustomButton title="Log Out" secondary onPress={() => { logoutDemo(); router.replace('/login'); }} />
      </Layout>
      <BottomNav active="Profile" />
    </View>
  );
}
const styles = StyleSheet.create({
  center: { alignItems: 'center', marginBottom: 30 },
  avatar: { fontSize: 22, fontWeight: 'bold', color: COLORS.primary, marginVertical: 28 },
  name: { fontSize: 23, fontWeight: 'bold', color: COLORS.dark },
  email: { color: COLORS.gray, marginTop: 8 },
  card: { backgroundColor: 'white', borderRadius: 20, padding: 20 },
  item: { padding: 17, borderBottomWidth: 1, borderColor: COLORS.light, color: COLORS.dark },
});