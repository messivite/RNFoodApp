import * as React from 'react';
import { View,Text, StyleSheet, TouchableOpacity,  SafeAreaView,Image, FlatList, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';


Feather.loadFont();
MaterialCommunityIcons.loadFont();
export default Home = ({navigation}) =>{


    const renderCategoriesItem = (({item}) => {
        return (
            <View style={[styles.categoryItemWrapper,{
                backgroundColor: item.selected ? colors.primary : colors.background,
                marginLeft: item.id == 1 ? 20 : 0
            }]}>
               <Image source={item.image} style={styles.categoryItemImage}/>
               <Text style={styles.categoryItemTitle}>{item.title}</Text>
               <View style={[
                   styles.categorySelectWrapper,
                   {
                       backgroundColor: item.selected ? colors.white: colors.secondary
                   }
               ]}>
                   <Feather name="chevron-right" 
                    size={8} 
                    style={styles.categorySelectIcon}
                    color={item?.selected ? colors.textDark : colors.white}
                    />
               </View>
            </View>
        )
    })
    return (
    <View styles={styles.container}>
        {/* HEADER */}

        <ScrollView 
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView>

            <View style={styles.headerWrapper}>
                <Image 
                source={require('./../assets/images/profile.png')}
                style={styles.profileImage} />
            

                <Feather name="menu" size={24} color={colors.textDark} />
            </View>
        </SafeAreaView>


        {
            /* HEADER TEXT */
        }
        <View style={styles.titleWrapper}>
            <Text style={styles.titlesSubtitle}>Food</Text>
            <Text style={styles.titlesTitle}>Delivery</Text>
        </View>

        {
            /* SEARCH */
        }
        <View style={styles.searchWrapper}>
            <Feather name="search" size={16} color={colors.textDark} />
            <View style={styles.search}>
                    <Text style={styles.searchText}>Search</Text>
            </View>
        </View>

        {/* Categories */}

        <View style={styles.categoriesWrapper}>
            <Text style={styles.categoriesTitle}>Categories</Text>
            
            <View style={styles.categoriesListWrapper}>
            <FlatList
                data={categoriesData}
                renderItem={renderCategoriesItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            />
            </View>
        
        </View>

        {/* Populars Data */}

        <View style={styles.popularWrapper}>
            <Text style={styles.popularTitle}>Popular</Text>

            {
                popularData.map((item,index)=>{
                    return(
                    <TouchableOpacity key={index} activeOpacity={.8}
                    onPress={
                        () => {
                            navigation.navigate('Details',{
                                item:item
                            })
                        }
                    }
                    >
                    <View style={[
                        styles.popularCardWrapper,
                        {
                            marginTop:item.id == 1 ? 10: 20
                        }
                    ]}>

                        <View>
                          
                                <View style={styles.popularTopWrapper}>
                                    <MaterialCommunityIcons 
                                    name="crown"
                                    size={10}
                                    color={colors.primary} />
                                    <Text style={styles.popularTopText}>top of the week</Text>
                                 </View> 
                                 <View style={styles.popularTitleWrapper}>
                                     <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                     <Text style={styles.popularTitlesWeight}>Weight: {item.weight}</Text>
                                </View> 

                                <View style={styles.popularCardButton}>
                                    <View style={styles.addPizzaButton}>
                                        <Feather name="plus" size={10} 
                                        color={colors.textDark} />
                                    </View>
                                    <View style={styles.ratingWrapper}>
                                        <MaterialCommunityIcons name="star"
                                        size={10}
                                        color={colors.textDark} />
                                        <Text style={styles.rating}>5.0</Text>
                                     </View>   
                                 </View>     
                           
                        </View>

                        <View style={styles.popularCardRight}>
                            <Image source={item.image} style={styles.popularCardImage} />
                        </View>    
                    </View>
                    </TouchableOpacity>
                    )})
            }
        </View>
        </ScrollView>
    </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingTop:20,
        alignItems:'center'
    },
    profileImage: {
        width:40,
        height:40,
        borderRadius:40
    },
    titleWrapper:{
        marginTop:30,
        paddingHorizontal:20
    },
    titlesSubtitle:{
        fontFamily:'Montserrat-Regular',
        fontSize:16,
        color:colors.textDark
    },
    titlesTitle:{
        fontFamily:'Montserrat-Bold',
        fontSize:32,
        color:colors.textDark,
        marginTop:5
    },
    searchWrapper:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        marginTop:30
    },
    search:{
        flex:1,
        borderBottomColor:colors.textLight,
        borderBottomWidth:2,
        marginLeft:10
    },
    searchText:{
        fontFamily:'Montserrat-Semibold',
        fontSize:14,
        marginBottom:5,
        color:colors.textLight
    },
    categoriesWrapper: {
        marginTop:30,
     
    },
    categoriesTitle:{
        fontSize:16,
        fontFamily:'Montserrat-Bold',
        paddingHorizontal:20
    },
    categoriesListWrapper:{
        paddingTop:15,
        paddingBottom:20
    
    },
    categoryItemWrapper:{
        backgroundColor:colors.primary,
        marginRight:20,
        borderRadius:20,
        shadowColor:colors.black,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.05,
        shadowRadius:10,
        elevation:2
    },
    categoryItemImage:{
        width:60,
        height:60,
        marginTop:25,
        alignSelf:'center',
        marginHorizontal:30
    },
    categoryItemTitle:{
        fontFamily:'Montserrat-Medium',
        fontSize:14,
        textAlign:'center',
        marginTop:10
    },
    categorySelectWrapper:{
        backgroundColor:colors.background,
        marginTop:20,
        alignSelf:'center',
        justifyContent:'center',
        width:26,
        height:26,
        marginBottom:20,
        borderRadius:26
    },
    categorySelectIcon:{
        alignSelf:'center',
      
    },
    popularWrapper:{
        paddingHorizontal:20
    },
    popularTitle:{
        fontSize:16,
        fontFamily:'Montserrat-Bold'
    },
    popularCardWrapper:{
        backgroundColor:colors.white,
        borderRadius:25,
        paddingTop:20,
        paddingLeft:20,
        flexDirection:'row',
        overflow:'hidden',
        shadowColor:colors.black,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.05,
        shadowRadius:10,
        elevation:2
    },
    popularTopWrapper:{
        flexDirection:'row',
        alignItems:'center'
    },
    popularTopText:{
        fontFamily:'Montserrat-Semibold',
        fontSize:14,
        marginLeft:10
    },
    popularTitleWrapper:{
        marginTop:20
    },
    popularTitlesTitle:{
        fontFamily:'Montserrat-Semibold',
        fontSize:14,
        color:colors.textDark
    },
    popularTitlesWeight:{
        fontFamily:'Montserrat-Medium',
        fontSize:12,
        color:colors.textLight,
        marginTop:5
    },
    popularCardButton: {
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        marginLeft:-20
    },
    addPizzaButton:{
        backgroundColor:colors.primary,
        paddingHorizontal:40,
        paddingVertical:20,
        borderTopRightRadius:25,
        borderBottomLeftRadius:25
    },
    ratingWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20
    },
    rating:{
        fontFamily:'Montserrat-Semibold',
        fontSize:12,
        color:colors.textDark,
        marginLeft:5
    },
    popularCardRight:{
        marginLeft:40
    },
    popularCardImage:{
        width:210,
        height:125,
        resizeMode:'contain'
    }

})