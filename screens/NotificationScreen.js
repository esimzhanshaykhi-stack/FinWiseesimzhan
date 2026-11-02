import { StyleSheet, Text, View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Layout from '../components/Layout';
import { COLORS } from '../components/theme';

export default function NotificationScreen() {
  const notifications = [
    ['💰', 'Salary Received', 'You received ₸250,000'],
    ['🛍️', 'Payment Successful', 'Shopping payment completed'],
    ['📊', 'Weekly Report', 'Your weekly financial report is ready'],
    ['🔔', 'Budget Reminder', 'Remember to track your expenses'],
  ];

  return (
    <View style={{ flex: 1 }}>
      <Layout title="Notifications">
        {notifications.map((n, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.icon}>{n[0]}</Text>
            <View>
              <Text style={styles.title}>{n[1]}</Text>
              <Text style={styles.subtitle}>{n[2]}</Text>
            </View>
          </View>
        ))}
      </Layout>
      <BottomNav active="Alerts" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: 'white', padding: 18, borderRadius: 15, marginBottom: 12 },
  icon: { fontSize: 30, marginRight: 15 },
  title: { fontWeight: 'bold', color: COLORS.dark },
  subtitle: { color: COLORS.gray, marginTop: 5 },
});