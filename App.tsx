import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const [steps, setSteps] = useState(6240);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Activity</Text>
          <Text style={styles.date}>Wednesday, May 6</Text>
        </View>

        {/* Progress Ring Section */}
        <View style={styles.centerStage}>
          <TouchableOpacity 
            activeOpacity={0.8} 
            onPress={() => setSteps(steps + 100)}
            style={styles.progressRing}
          >
            <Text style={styles.stepCount}>{steps.toLocaleString()}</Text>
            <Text style={styles.stepLabel}>STEPS</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Row */}
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

        {/* Workout Section */}
        <View style={styles.workoutSection}>
          <Text style={styles.sectionTitle}>Daily Workouts</Text>
          
          {/* Workout Card 1 */}
          <TouchableOpacity style={styles.workoutCard}>
            <View>
              <Text style={styles.workoutName}>Morning Yoga</Text>
              <Text style={styles.workoutTime}>20 Min • Low Intensity</Text>
            </View>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>

          {/* Workout Card 2 */}
          <TouchableOpacity style={styles.workoutCard}>
            <View>
              <Text style={styles.workoutName}>High Intensity HIIT</Text>
              <Text style={styles.workoutTime}>35 Min • High Intensity</Text>
            </View>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  },
  centerStage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  progressRing: {
    width: 260,
    height: 260,
    borderRadius: 130,
    borderWidth: 15,
    borderColor: '#CCFF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepCount: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '900',
  },
  stepLabel: {
    color: '#666',
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
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
  },
  workoutSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  workoutCard: {
    backgroundColor: '#1A1A1A',
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  workoutName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  workoutTime: {
    color: '#666',
    marginTop: 4,
  },
  arrow: {
    color: '#CCFF00',
    fontSize: 24,
  }
});