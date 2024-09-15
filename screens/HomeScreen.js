import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { TrashIcon } from 'react-native-heroicons/solid';

function HomeScreen() {
  return (
    <SafeAreaView className=" bg-white">
      <View className=" bg-white">
        <View className="mt-2 mb-3 mx-4 flex-row items-center justify-between space-x-2">
          <TouchableOpacity>
            <Image
              source={require('../assets/images/IMG_0616.jpg')}
              className="w-14 h-14 object-cover rounded-full"
            />
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="text-lg font-bold text-black">Welcome Rafsun</Text>
            <Text className="font-light text-gray-500 text-xs">
              Dhaka,Bangladesh
            </Text>
          </View>
          <TouchableOpacity className="flex items-center justify-center bg-gray-300 rounded-full p-3">
            <Text className="text-xs font-semibold absolute top-0 text-red-600">
              0
            </Text>
            <TrashIcon size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
