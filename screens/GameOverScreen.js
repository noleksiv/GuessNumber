import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Image 
                style={styles.image} 
                source={require('../assets/game_over.png')} 
                resizeMode='cover'
            />  
            <BodyText style={styles.resultText}>
                Number of rounds:{' '}
                <Text style={DefaultStyles.bodyText}>{props.roundsNumber}</Text> 
            </BodyText>
            <BodyText style={styles.resultText}>
                Number was:{' '}
                <Text style={DefaultStyles.bodyText}>{props.userNumber}</Text> 
            </BodyText>
            <Button 
                title="NEW GAME" 
                onPress={props.onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '80%',
        height: 120
    },
    resultText: {
        fontSize: 20,
        textAlign: 'center'
    }
});

export default GameOverScreen;
