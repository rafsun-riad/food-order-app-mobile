import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import {
  TrashIcon,
  AdjustmentsHorizontalIcon,
} from 'react-native-heroicons/solid';
import { SvgXml } from 'react-native-svg';

const SearchIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
`;

function HomeScreen() {
  return (
    <SafeAreaView
      className={`bg-white ${Platform.OS === 'android' ? 'pt-7' : ''}`}
    >
      <View className=" bg-white">
        <View className=" mt-2 mb-3 mx-4 flex-row items-center justify-between space-x-2">
          <TouchableOpacity>
            <Image
              source={require('../assets/images/IMG_0616.jpg')}
              className="w-14 h-14 object-cover rounded-full"
            />
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="text-lg font-bold text-black">Welcome Rafsun</Text>
            <Text className="font-light text-gray-500 text-xs">
              Dhaka, Bangladesh
            </Text>
          </View>
          <TouchableOpacity className="flex items-center justify-center bg-gray-300 rounded-full p-3">
            <Text className="text-xs font-semibold absolute top-0 text-red-600">
              0
            </Text>
            <TrashIcon size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="mx-4 mt-2 mb-3">
          <Text className="text-4xl font-thin text-black">Order your</Text>
          <Text className="text-4xl font-extrabold text-black">
            Favourite Food 😋
          </Text>
        </View>
        <View className="mx-4 mt-2 mb-3">
          <TouchableOpacity className="absolute z-50 top-[12px] left-[7px]">
            <SvgXml xml={SearchIcon} color="black" width={26} height={26} />
          </TouchableOpacity>
          <TextInput
            keyboardType="default"
            placeholder="Search Restaurants and Dishes..."
            className="p-3 rounded-xl bg-gray-300 shadow-lg placeholder:px-10"
          />
          <TouchableOpacity className="absolute z-50 top-[12px] right-[6px] border-l border-gray-400 px-1">
            <AdjustmentsHorizontalIcon color="black" size={26} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
