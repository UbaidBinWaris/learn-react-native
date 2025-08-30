import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './global.css';

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center p-5">
      <Text className="text-2xl font-bold text-blue-600 mb-4 text-center">Welcome to React Native!</Text>
      <Text className="text-base text-gray-500 text-center">Your app is running successfully</Text>
      <StatusBar style="auto" />
    </View>
  );
}
