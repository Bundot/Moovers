import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import FaqsCard from "../components/FaqsCard";

const actions=[
    {
        question:"How Much Do You CHarge For 1KG",
        answer:"₦1,000",
    },
    {
        question:"Do you render services for credit",
        answer:"No",
    },
    {
        question:"Does your service has door step pick up",
        answer:"Yes",
    },
    {
        question:"Does your service has door step pick up",
        answer:"Yes",
    },
]

export default function FaqsFlatList(){
    const flatList=(item)=>{
        return(
            <FaqsCard answer={item.item.answer}
                      question={item.item.question}/>
        );
    }

    return(
        <View>
            <FlatList renderItem={flatList} data={actions}/>
        </View>
    )
}