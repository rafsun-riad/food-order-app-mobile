import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';

const locationIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
`;

function RestaurantItem({ restaurant }) {
  return (
    <TouchableOpacity>
      <View className="mx-2 w-[250px] h-[220px] rounded-lg shadow-md overflow-hidden">
        <Image source={restaurant.image} className="w-full h-32 object-cover" />
        <View className="mx-3 mt-2">
          <Text className="font-bold text-gray-600 text-base">
            {restaurant.name}
          </Text>

          <View className="mt-1 flex-row items-center space-x-2">
            <Image source={restaurant.star} className="w-4 h-4 object-cover" />
            <Text className="font-semibold text-[#f19c13] text-xs">
              {restaurant.rating}
            </Text>
            <Text className="font-bold text-gray-500 text-xs">
              {restaurant.category}
            </Text>
          </View>

          <View className="flex-row items-center space-x-2 mt-1">
            <SvgXml xml={locationIcon} color="gray" width={18} height={18} />
            <Text className="font-semibold text-gray-500 text-xs">
              {restaurant.location}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default RestaurantItem;
