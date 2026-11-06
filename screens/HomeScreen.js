import { useDemoUser } from '../components/demoAuth';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomNav from '../components/BottomNav';
import { COLORS, money, transactions } from '../components/theme';

export default function HomeScreen() {
  const router = useRouter();
  const user = useDemoUser();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.greeting}>Good Morning, {user?.name?.split(' ')[0] || 'Guest'} 👋</Text>
          <Text style={styles.heading}>Financial Overview</Text>

          <View style={styles.balanceCard}>
            <Text style={styles.white}>Total Balance</Text>
            <Text style={styles.balance}>₸ 425,800</Text>
            <View style={styles.row}>
              <Text style={styles.white}>↑ Income: ₸ 250,000</Text>
              <Text style={styles.white}>↓ Expense: ₸ 36,000</Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          {/* FINWISE_TOOLS_START */}
          <Text style={styles.title}>Money Tools</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 12, marginBottom: 20 }}>
            {[
              ['My Cards', '/my-cards'],
              ['Add Card', '/add-card'],
              ['Budget', '/budget'],
              ['Add Budget', '/add-budget'],
              ['Savings Goals', '/savings-goals'],
              ['Add Goal', '/add-goal'],
              ['Analytics', '/analytics'],
              ['Transfer Money', '/transfer-money'],
            ].map(([label, route]) => (
              <TouchableOpacity key={route} onPress={() => router.push(route)} style={{ width: '48%', backgroundColor: '#FFFFFF', borderRadius: 15, padding: 17, marginBottom: 12, borderWidth: 1, borderColor: '#DDF8EB' }}>
                <Text style={{ fontWeight: '700', color: COLORS.dark }}>{label}</Text>
                <Text style={{ color: COLORS.primary, marginTop: 7 }}>Open</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* FINWISE_TOOLS_END */}
          <View style={styles.row}>
            <Text style={styles.title}>Recent Transactions</Text>
            <TouchableOpacity onPress={() => router.push('/transactions')}>
              <Text style={styles.link}>See All</Text>
            </TouchableOpacity>
          </View>

          {transactions.map(item => (
            <View key={item.id} style={styles.transaction}>
              <Text style={styles.emoji}>{item.icon}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.gray}>{item.date}</Text>
              </View>
              <Text style={{ color: item.amount > 0 ? COLORS.primary : COLORS.red }}>
                {item.amount > 0 ? '+' : '-'}{money(item.amount)}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <BottomNav active="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { backgroundColor: COLORS.primary, padding: 25, paddingTop: 60, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  greeting: { color: 'white', fontSize: 15 },
  heading: { color: 'white', fontSize: 27, fontWeight: 'bold', marginVertical: 15 },
  balanceCard: { backgroundColor: COLORS.dark, padding: 22, borderRadius: 20 },
  white: { color: 'white', fontSize: 13 },
  balance: { color: 'white', fontSize: 32, fontWeight: 'bold', marginVertical: 15 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  body: { padding: 22 },
  title: { fontSize: 20, fontWeight: 'bold', color: COLORS.dark },
  link: { color: COLORS.primary },
  transaction: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 15, borderRadius: 15, marginTop: 12 },
  emoji: { fontSize: 28, marginRight: 15 },
  name: { fontWeight: 'bold', color: COLORS.dark },
  gray: { color: COLORS.gray, marginTop: 5 },
});
