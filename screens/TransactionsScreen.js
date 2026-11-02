import { StyleSheet, Text, View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Layout from '../components/Layout';
import { COLORS, money, transactions } from '../components/theme';

export default function TransactionsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Layout title="Transactions">
        {transactions.map(item => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.icon}>{item.icon}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.gray}>{item.category} • {item.date}</Text>
            </View>
            <Text style={{ color: item.amount > 0 ? COLORS.primary : COLORS.red }}>
              {item.amount > 0 ? '+' : '-'}{money(item.amount)}
            </Text>
          </View>
        ))}
      </Layout>
      <BottomNav active="History" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 18, borderRadius: 15, marginBottom: 12, flexDirection: 'row', alignItems: 'center' },
  icon: { fontSize: 30, marginRight: 15 },
  name: { fontWeight: 'bold', color: COLORS.dark },
  gray: { color: COLORS.gray, marginTop: 5 },
});