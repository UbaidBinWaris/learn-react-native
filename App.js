// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
// import './global.css';

// export default function App() {
//   return (
//     <View className="flex-1 bg-white items-center justify-center p-5">
//       <Text className="text-2xl font-bold text-blue-600 mb-4 text-center">Ubaid Bin Waris</Text>
//       <Text className="text-base text-gray-500 text-center">Full stack developer</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }


import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <View className="flex-1 bg-white items-center justify-center">
      {/* Counter Display */}
      <Text className="text-6xl font-bold text-blue-600 mb-8">{counter}</Text>

      {/* Buttons Container */}
      <View className="flex-row gap-4">
        {/* Decrement Button */}
        <TouchableOpacity
          className="bg-red-500 px-8 py-4 rounded-2xl"
          onPress={decrement}
        >
          <Text className="text-white text-2xl font-bold">-</Text>
        </TouchableOpacity>

        {/* Increment Button */}
        <TouchableOpacity
          className="bg-green-500 px-8 py-4 rounded-2xl"
          onPress={increment}
        >
          <Text className="text-white text-2xl font-bold">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
