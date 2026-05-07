import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
export default function App() {
  const [steps, setSteps] = useState(6240);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView showsVerticalScrollIndicator={false} className="px-5">
        
        {/* Header */}
        <View className="mt-10 mb-8">
          <Text className="text-white text-4xl font-bold">Activity</Text>
          <Text className="text-gray-500 uppercase tracking-widest">Wednesday, May 6</Text>
        </View>

        {/* Progress Ring */}
        <View className="items-center justify-center my-10">
          <TouchableOpacity 
            onPress={() => setSteps(steps + 100)}
            className="w-64 h-64 rounded-full border-[15px] border-active-lime items-center justify-center"
          >
            <Text className="text-white text-5xl font-black">{steps.toLocaleString()}</Text>
            <Text className="text-gray-500 font-semibold tracking-tighter">STEPS</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Row */}
        <View className="flex-row justify-around mb-10">
          <View className="items-center">
            <Text className="text-white text-2xl font-bold">1.2</Text>
            <Text className="text-gray-500">KM</Text>
          </View>
          <View className="items-center">
            <Text className="text-white text-2xl font-bold">320</Text>
            <Text className="text-gray-500">KCAL</Text>
          </View>
        </View>

        {/* Workout Section */}
        <View>
          <Text className="text-white text-xl font-bold mb-4">Daily Workouts</Text>
          
          <TouchableOpacity className="bg-zinc-900 p-5 rounded-2xl flex-row justify-between items-center mb-3">
            <View>
              <Text className="text-white text-lg font-bold">Morning Yoga</Text>
              <Text className="text-gray-500">20 Min • Low Intensity</Text>
            </View>
            <Text className="text-active-lime text-xl">→</Text>
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