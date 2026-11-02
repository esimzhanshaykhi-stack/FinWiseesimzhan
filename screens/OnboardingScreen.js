import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import Layout from '../components/Layout';
import { COLORS } from '../components/theme';

export default function OnboardingScreen() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const slides = [
    { icon: '💰', title: 'Welcome to FinWise', desc: 'Take control of your income and expenses.' },
    { icon: '📊', title: 'Track Your Spending', desc: 'Understand where your money goes.' },
    { icon: '🎯', title: 'Reach Your Goals', desc: 'Save money and plan your financial future.' },
  ];

  return (
    <Layout>
      <View style={styles.center}>
        <Text style={styles.icon}>{slides[step].icon}</Text>
        <Text style={styles.title}>{slides[step].title}</Text>
        <Text style={styles.desc}>{slides[step].desc}</Text>
        <Text style={styles.dots}>{'● '.repeat(step + 1)}{'○ '.repeat(2 - step)}</Text>
      </View>
      <CustomButton
        title={step === 2 ? 'Get Started' : 'Next'}
        onPress={() => step === 2 ? router.replace('/login') : setStep(step + 1)}
      />
      <CustomButton title="Skip" secondary onPress={() => router.replace('/login')} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  icon: { fontSize: 110, marginBottom: 35 },
  title: { fontSize: 28, fontWeight: 'bold', color: COLORS.dark, textAlign: 'center' },
  desc: { color: COLORS.gray, textAlign: 'center', marginTop: 15, fontSize: 16 },
  dots: { color: COLORS.primary, marginTop: 35, fontSize: 20 },
});