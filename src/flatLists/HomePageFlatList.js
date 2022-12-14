import { View, Text, StyleSheet, FlatList } from "react-native";
import { ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import NewCard from "../components/NewCard";

const actions=[{
    image: require("./../../assets/images/image.jpeg"),
    sfrom: "Keffi",
    lfrom:"Abuja",
    sto:"Ojota",
    lto:"Lagos",
    time:"1hr Ago",
    budget: "₦2,000",
},
{
    image: require("./../../assets/images/image.jpeg"),
    sfrom: "Bauchi",
    lfrom:"Dass",
    sto:"Plateau",
    lto:"Jos",
    time:"1hr Ago",
    budget: "₦2,000", 
},
{
    image: require("./../../assets/images/image.jpeg"),
    sfrom: "Kwara",
    lfrom:"Ilorin",
    sto:"Niger",
    lto:"Minna",
    time:"1hr Ago",
    budget: "₦2,000",
},
{
    image: require("./../../assets/images/image.jpeg"),
    sfrom: "Kwara",
    lfrom:"Ilorin",
    sto:"Niger",
    lto:"Minna",
    time:"1hr Ago",
    budget: "₦2,000",
},
{
    image: require("./../../assets/images/image.jpeg"),
    sfrom: "Kwara",
    lfrom:"Ilorin",
    sto:"Niger",
    lto:"Minna",
    time:"1hr Ago",
    budget: "₦2,000",
},
]

export default function HomePageFlatList(){
    const flatList=(item)=>{
        return(
        <NewCard 
         budget={item.item.budget}
         image={item.item.image}
         lfrom={item.item.lfrom}
         lto={item.item.lto}
         sfrom={item.item.sfrom}
         sto={item.item.sto}
         time={item.item.time}/>
         );
    }
    return(
        
        <View style={{flex:1}}>
            <FlatList data={actions} renderItem={flatList} horizontal showsHorizontalScrollIndicator={false}/>
            <FlatList data={actions} renderItem={flatList} horizontal showsHorizontalScrollIndicator={false}/>
            <FlatList data={actions} renderItem={flatList} horizontal  showsHorizontalScrollIndicator={false}/> 
        </View>
        
        
    )
}