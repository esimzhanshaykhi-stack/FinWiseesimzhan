import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Layout from '../components/Layout';
import { COLORS, money, transactions } from '../components/theme';

export default function TransactionsScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <Layout title="Transactions">
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => router.push('/categories')}>
            <Text style={styles.actionText}>Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={() => router.push('/transaction-details')}>
            <Text style={styles.actionText}>Transaction Details</Text>
          </TouchableOpacity>
        </View>
        {transactions.map(item => (
          <TouchableOpacity key={item.id} style={styles.card} onPress={() => router.push('/transaction-details')}>
            <Text style={styles.icon}>{item.icon}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.gray}>{item.category} - {item.date}</Text>
            </View>
            <Text style={{ color: item.amount > 0 ? COLORS.primary : COLORS.red }}>
              {item.amount > 0 ? '+' : '-'}{money(item.amount)}
            </Text>
          </TouchableOpacity>
        ))}
      </Layout>
      <BottomNav active="History" />
    </View>
  );
}

const styles = StyleSheet.create({
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  action: { backgroundColor: '#E6F7F0', padding: 12, borderRadius: 12 },
  actionText: { color: COLORS.dark, fontWeight: '600' },
  card: { backgroundColor: 'white', padding: 18, borderRadius: 15, marginBottom: 12, flexDirection: 'row', alignItems: 'center' },
  icon: { fontSize: 30, marginRight: 15 },
  name: { fontWeight: 'bold', color: COLORS.dark },
  gray: { color: COLORS.gray, marginTop: 5 },
});
