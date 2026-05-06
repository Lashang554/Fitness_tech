import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Activity</Text>
        <Text style={styles.date}>Wednesday, May 6</Text>
      </View>

      <View style={styles.centerStage}>
        {/* The Progress Ring Shell */}
        <View style={styles.progressRing}>
          <Text style={styles.stepCount}>6,240</Text>
          <Text style={styles.stepLabel}>STEPS</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>1.2</Text>
          <Text style={styles.statLabel}>KM</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>320</Text>
          <Text style={styles.statLabel}>KCAL</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
  },
  header: {
    padding: 20,
    marginTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
  },
  date: {
    color: '#666',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  centerStage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressRing: {
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 20,
    borderColor: '#CCFF00', // Electric Lime
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#CCFF00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  stepCount: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '900',
  },
  stepLabel: {
    color: '#666',
    letterSpacing: 2,
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    padding: 30,
    justifyContent: 'space-around',
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#666',
    fontSize: 12,
  },
});