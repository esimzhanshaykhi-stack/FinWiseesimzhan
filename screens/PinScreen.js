import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import Layout from '../components/Layout';
import { COLORS } from '../components/theme';

export default function PinScreen() {
  const router = useRouter();
  const [pin, setPin] = useState('');

  const press = (number) => {
    if (pin.length < 4) setPin(pin + number);
  };

  return (
    <Layout title="Security PIN">
      <Text style={styles.subtitle}>Enter your 4-digit security PIN</Text>
      <Text style={styles.dots}>{'● '.repeat(pin.length)}{'○ '.repeat(4 - pin.length)}</Text>

      <View style={styles.grid}>
        {['1','2','3','4','5','6','7','8','9','⌫','0','✓'].map(n => (
          <TouchableOpacity
            key={n}
            style={styles.key}
            onPress={() => {
              if (n === '⌫') setPin(pin.slice(0, -1));
              else if (n === '✓') {
                if (pin.length === 4) router.push('/fingerprint');
              } else press(n);
            }}
          >
            <Text style={styles.number}>{n}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <CustomButton title="Continue" onPress={() => pin.length === 4 && router.push('/fingerprint')} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  subtitle: { color: COLORS.gray, textAlign: 'center' },
  dots: { fontSize: 35, color: COLORS.primary, textAlign: 'center', marginVertical: 35 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  key: { width: '30%', padding: 20, alignItems: 'center' },
  number: { fontSize: 28, color: COLORS.dark },
});