import { StyleSheet, View ,ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react'
import KotCard from './component/KotCard';
import BranchSelectorModal from './component/BranchSelectorModal';


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
  // fetch kots

  return (
    <ScrollView style={styles.scrollView}>
    <BranchSelectorModal selectbranch={selectbranch} setSelectBranch={setSelectBranch}/>
    <View style={styles.container}>
      {data?.map(ord=>(ord?.map(o=>(<KotCard kot={o.kot}/>))))}
      <KotCard kot={kot1}/>
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
