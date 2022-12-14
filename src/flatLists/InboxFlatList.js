import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import InboxCard from "../components/InboxCard";

const actions= [{
    text: "Something Random sent to the user from another user",
    image: require('./../../assets/images/image.jpeg'),
    name: "Susan"
},
{
    text: "Something Random sent to the user from another user",
    image: require('./../../assets/images/image.jpeg'),
    name: "Susan"
},
{
    text: "Something Random sent to the user from another user",
    image: require('./../../assets/images/image.jpeg'),
    name: "Susan"
},
{
    text: "Something Random sent to the user from another user",
    image: require('./../../assets/images/image.jpeg'),
    name: "Susan"
},]

export default function InboxFlatList(){
    const flatList=(item)=>{
        return(
            <InboxCard image={item.item.image}
                        name={item.item.name}
                        text={item.item.text}/>
        );
    }
    return(
    <View>
    <FlatList data={actions} renderItem={flatList}/>
   </View>
    )
}