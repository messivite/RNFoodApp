import * as React from 'react';
import { View, Text ,StyleSheet, Image,SafeAreaView, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
export default OnBoard = ({navigation}) => {

    const onDone = () => {
        navigation.replace('Home')
    }
    const DATA = [
        {
          title: 'Save time by tracking your studies',
          text: 'Schedule your classes, assignments, quizzes and more',
          image: require('./../assets/images/onboard/1.png'),
        },
        {
          title: 'Stay on top of your education',
          text: 'Reduce your stress, increase your productivity',
          image: require('./../assets/images/onboard/2.png'),
        },
        {
          title: 'Spend more time doing the things you love',
          text: 'Get started within five minutes',
          image: require('./../assets/images/onboard/3.png')
        }
      ];
    const renderItem = ({item}) => {

        return (
            <View style={styles.slideWrapper}>
                <Image source={item.image} style={styles.slideImage} />
                <View style={styles.slideTextWrapper}>
                    <Text style={styles.slideTitle}>{item.title}</Text>
                    <Text style={styles.slideText}>{item.text}</Text>
                </View>
            </View>
        )

    }   

    const keyExtractor = (item) => item.title;
    const renderDoneButton = () => {
        return (
            <TouchableOpacity 
            onPress={onDone}
            activeOpacity={0.7} style={{
                marginTop:4
            }}>
            <LinearGradient 
                start={{x:0,y:0}}
                end={{x:1,y:0}}
            colors={['#A5C8FF', '#23286B']} 
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>
                Done
            </Text>
            </LinearGradient>

            </TouchableOpacity>

        )
    }
    const renderNextButton = () => {
        return (
            <View style={styles.rightWrapper}>
                <Text style={styles.rightText}>Next</Text>
            </View>
        )
    }
    const renderPrevButton = () => {
        return (
            <View style={styles.leftWrapper}>
                <Text style={styles.rightText}>Prev</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            
            <AppIntroSlider
                data={DATA}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                renderDoneButton={renderDoneButton}
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.dotActiveStyle}
                showPrevButton
                showDoneButton
            />
          
  
        </View>
    )

}


const styles = StyleSheet.create({
    container:{
        flex:1
    },

    slideWrapper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.white
    },
    slideImage:{
        resizeMode:'contain',
        marginVertical:50
    },
    slideText:{
        fontSize:14,
        fontFamily:'OpenSans-SemiBold',
        textAlign:'center',
        color:colors.gray,
        marginTop:20,
        marginHorizontal:30
    },
    slideTitle:{
        fontSize:24,
        fontFamily:'OpenSans-Bold',
        textAlign:'center',
        marginHorizontal:60
    },
    rightWrapper:{
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        marginRight:30,
        marginTop:2
    },
    rightText:{
        fontFamily:'OpenSans-SemiBold',
        fontSize:14,
        color:colors.blue
    },
    leftWrapper:{
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:30,
        marginTop:2
    },
    dotStyle:{
        backgroundColor:colors.blueFaded,
    },
    dotActiveStyle:{
        backgroundColor:colors.blue
    },
    linearGradient:{
        flex: 1,
        paddingLeft: 15,
        paddingRight: 50,
        borderRadius: 25,
        marginRight:-45
    },
    buttonText:{
        fontSize: 14,
        fontFamily: 'OpenSans-SemiBold',
        textAlign: 'center',
        margin: 8,
        color: colors.white
    }
});
