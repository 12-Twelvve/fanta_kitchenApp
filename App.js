import { StyleSheet, View ,ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react'
import KotCard from './component/KotCard';
import BranchSelectorModal from './component/BranchSelectorModal';
import storage from './component/Storage';

// demo data
const items1 = [
  {title:"jhol momo", quantity:2},
  {title:"dang special", quantity:1},
  {title:"dami special", quantity:2},
  {title:"doaru special", quantity:2},
  {title:"sunflower special", quantity:3},
  {title:"sunflower special", quantity:3},
  {title:"sunflower special", quantity:3},
  {title:"sunflower special", quantity:3},
  {title:"sunflower special", quantity:3},
  {title:"kathmandu special", quantity:2}
  ]
  const kot1 = {kotId:'12321235', items:items1}
  const order = [{kot:kot1},{kot:kot1}, {kot:kot1}]
  const data =[order, order, order]

  
export default function App() {
  const [selectbranch, setSelectBranch] = useState('durbarmarg');
  const [data, setData] = useState([])
  // fetch kots
  const handleFetch=()=>{
    console.log(selectbranch)
    var brnch = ''
    if (selectbranch == "Durbarmarg"){
      brnch = 'durbarmarg_unserved_kot'
   }else{
      brnch='kumaripati_unserved_kot'
   }
  //  console.log('https://fanta-backend12.herokuapp.com/'+brnch)
    fetch('https://fanta-backend12.herokuapp.com/'+brnch)
        .then((response) => response.json())
        .then((d) =>{
            setData(d)
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
  }
  useEffect(()=>{
    handleFetch()
  },[selectbranch])
  return (
    <ScrollView style={styles.scrollView}>
    <BranchSelectorModal selectbranch={selectbranch} setSelectBranch={setSelectBranch}/>
    <View style={styles.container}>
      {data?.map(ord=>(ord.kot?.map(kot=>(<KotCard kot={kot}/>))))}
      {/* <KotCard kot={kot1}/> */}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'center',
    marginTop:80,
  },
});
