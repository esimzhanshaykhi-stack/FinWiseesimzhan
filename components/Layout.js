import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from './theme';

export default function Layout({ title, children, scroll = true }) {
  const content = (
    <View style={styles.content}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {children}
    </View>
  );

  return (
    <View style={styles.container}>
      {scroll ? <ScrollView contentContainerStyle={{ flexGrow: 1 }}>{content}</ScrollView> : content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { flexGrow: 1, padding: 24, paddingTop: 55 },
  title: { fontSize: 28, fontWeight: '800', color: COLORS.dark, marginBottom: 24 },
});