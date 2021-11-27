import * as React from 'react';
import { View,Text, StyleSheet,SafeAreaView,Image, 
    FlatList, ScrollView, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
Feather.loadFont();
MaterialCommunityIcons.loadFont();
export default Details = ({ route,navigation }) => {

    const { item } = route.params;

    const renderIngredientsItem = ({item}) => {

        return (
            <View style={[styles.ingredientsItemWrapper,{
                marginLeft: item.id == '1' ? 20: 0
            }]}>
               <Image source={item.image} 
               style={styles.ingredientImage} />
            </View>
        )

    }
    return (

        <View style={styles.container}>

                {/*Header*/}
                <SafeAreaView>

                    <View style={styles.headerWrapper}>
                        <TouchableOpacity onPress={()=>{
                            navigation.goBack()
                        }}>
                        <View style={styles.headerLeft}>
                            <Feather name="chevron-left" size={12} color={colors.textDark} />
                        </View>
                        </TouchableOpacity>
                   

                        <View style={styles.headerRight}>
                            <MaterialCommunityIcons name="star" size={12} color={colors.white} />
                        </View>
                    </View>

                </SafeAreaView>

                {/* Titles */}

                <View style={styles.titlesWrapper}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>


                {/* Prices */}

                <View style={styles.priceWrapper}>
                        <Text style={styles.price}>${item.price}</Text>
                </View>

                {/* Info Area*/}

                <View style={styles.infoWrapper}>

                        <View style={styles.infoLeftWrapper}>

                            <View style={styles.infoItemWrapper}>

                                <Text style={styles.infoItemTitle}>Size</Text>
                                <Text style={styles.infoItemText}>{item.sizeName} {item.sizeNumber}</Text>
                            </View>

                            <View style={styles.infoItemWrapper}>

                                <Text style={styles.infoItemTitle}>Crust</Text>
                                <Text style={styles.infoItemText}>{item.crust}</Text>
                            </View>
                            <View style={styles.infoItemWrapper}>
                                <Text style={styles.infoItemTitle}>Delivery</Text>
                                <Text style={styles.infoItemText}>{item.deliveryTime} </Text>
                            </View>

                        </View>

                        <View>
                            <Image 
                            source={item.image} 
                            style={styles.itemImage} />
                        </View>
                </View>

                {/* Increaments */}

                <View style={styles.ingredientsWrapper}>
                    <Text style={styles.ingredientsTitle}>Ingredients</Text>

                    <View style={styles.ingredientsListWrapper}>
                        <FlatList 
                            data={item.ingredients}
                            renderItem={renderIngredientsItem}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        />
                    </View> 
                </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1
    },
    headerWrapper: {
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        justifyContent:'space-between',
        paddingTop:20
    },
    headerLeft:{
        borderColor: colors.textLight,
        borderWidth:2,
        padding:12,
        borderRadius:10
    },
    headerRight:{
        borderRadius:10,
        padding:12,
        backgroundColor:colors.primary,
        borderWidth:2,
        borderColor:colors.primary
    },
    titlesWrapper:{
        marginTop:30,
        paddingHorizontal:20
    },
    title:{
        fontFamily:'Montserrat-Bold',
        fontSize:32,
        width:'50%',
        lineHeight:39,
        color:colors.textDark
    },
    priceWrapper:{
        paddingHorizontal:20,
        marginTop:20
    },
    price:{
        fontFamily:'Montserrat-Semibold',
        fontSize:32,
        color:colors.secondary
    },
    infoWrapper: {
     
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    infoLeftWrapper:{
        paddingLeft:20
    },
    infoItemWrapper:{
        marginBottom:20
    },
    infoItemTitle:{
        fontFamily:'Montserrat-Medium',
        fontSize:14,
        color:colors.textLight
    },
    infoItemText:{
        fontFamily:'Montserrat-Semibold',
        fontSize:16,
        color:colors.black,
        marginTop:5
    },
    itemImage:{
        resizeMode:'contain',
        marginLeft:40
    },
    ingredientsWrapper:{
        marginTop:40
    },
    ingredientsTitle:{
        paddingHorizontal:20,
        fontFamily:'Montserrat-Bold',
        fontSize:16,
        color:colors.textDark
    },
    ingredientsListWrapper:{
        paddingVertical:20
    },
    ingredientsItemWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.white,
        padding:12,
        borderRadius:15,
        marginRight:15
    },
    ingredientImage:{

    }

})