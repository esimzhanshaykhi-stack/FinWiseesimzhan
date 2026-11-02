import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from './theme';

export default function BottomNav({ active }) {
  const router = useRouter();

  const tabs = [
    { name: 'Home', icon: '🏠', route: '/home' },
    { name: 'History', icon: '💳', route: '/transactions' },
    { name: 'Alerts', icon: '🔔', route: '/notifications' },
    { name: 'Profile', icon: '👤', route: '/profile' },
  ];

  return (
    <View style={styles.nav}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.name}
          style={styles.tab}
          onPress={() => router.replace(tab.route)}
        >
          <Text style={styles.icon}>{tab.icon}</Text>
          <Text style={[styles.label, active === tab.name && styles.active]}>
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#DDF8EB',
  },
  tab: { alignItems: 'center' },
  icon: { fontSize: 23 },
  label: { fontSize: 11, color: COLORS.gray, marginTop: 5 },
  active: { color: COLORS.primary, fontWeight: 'bold' },
});