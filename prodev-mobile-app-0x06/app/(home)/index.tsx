// import PropertyListing from "@/components/PropertyListing";
// // import { styles } from "@/styles/_homestyle";
// import { Feather } from "@expo/vector-icons";
// import {
//   View,
//   Text,
//   TextInput,
//   Image,
//   ScrollView,
//   Dimensions,
//   TouchableHighlight,
// } from "react-native";
// import { FILTERS, SAMPLE_DATA } from "@/constants/data";


// const Home = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.searchGroup}>
//         <View style={styles.searchFormGroup}>
//           <View style={styles.searchControlGroup}>
//             <Text style={styles.searchFormText}>Where to?</Text>
//             <TextInput
//               style={{ ...styles.searchControl, ...styles.searchFormText }}
//               placeholder="Location . Date . Add guest"
//             />
//           </View>
//           <View style={styles.searchButton}>
//             <Feather name="search" size={24} color="white" />
//           </View>
//         </View>
//       </View>

//       <View
//         style={{
//           height: 72,
//           backgroundColor: "white",
//         }}
//       >
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <View style={styles.filterGroup}>
//             {FILTERS.map((filter, index) => (
//               <View style={styles.filterContainer} key={index}>
//                 <Image
//                   style={{
//                     flex: 1,
//                   }}
//                   source={require("@/assets/images/mansion.png")}
//                   resizeMode="contain"
//                 />
//                 <Text>{filter}</Text>
//               </View>
//             ))}
//           </View>
//         </ScrollView>
//       </View>

//       <ScrollView style={styles.listingContainer}>
//         <PropertyListing listings={SAMPLE_DATA} />
//         <View style={styles.paginationContainer}>
//           <TouchableHighlight style={styles.showMoreButton}>
//             <Text style={styles.showMoreButtonText}>Show more</Text>
//           </TouchableHighlight>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default Home;



import PropertyListing from "@/components/PropertyListing";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";

const Home = () => {
  return (
    <View className="flex-1 bg-white">
      {/* ===== Search Section ===== */}
      <View className="p-4">
        <View className="flex-row items-center justify-between bg-gray-100 rounded-full px-4 py-3">
          <View className="flex-1 mr-3">
            <Text className="text-gray-800 text-base font-semibold mb-1">
              Where to?
            </Text>
            <TextInput
              className="text-gray-500 text-sm"
              placeholder="Location . Date . Add guest"
              placeholderTextColor="#A3A3A3"
            />
          </View>
          <View className="bg-[#34967C] p-3 rounded-full">
            <Feather name="search" size={20} color="white" />
          </View>
        </View>
      </View>

      {/* ===== Filter Tabs ===== */}
      <View className="h-[72px] bg-white">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        >
          <View className="flex-row items-center gap-4">
            {FILTERS.map((filter, index) => (
              <View
                key={index}
                className="items-center justify-center bg-gray-50 border border-gray-200 rounded-lg p-2"
              >
                <Image
                  className="w-12 h-12 mb-1"
                  source={require("@/assets/images/logo.png")}
                  resizeMode="contain"
                />
                <Text className="text-gray-700 text-xs">{filter}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* ===== Listings ===== */}
      <ScrollView className="flex-1 px-4">
        <PropertyListing listings={SAMPLE_DATA} />

        <View className="items-center mt-6 mb-8">
          <TouchableHighlight className="bg-[#34967C] px-6 py-3 rounded-full">
            <Text className="text-white text-base font-semibold text-center">
              Show more
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;