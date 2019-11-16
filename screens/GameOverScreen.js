import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = props => {
    return (
        <ScrollView contentContainerStyle={styles.list}>
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
                <MainButton onPress={props.onRestart} style={styles.button} >
                    NEW GAME
                </MainButton>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    button: {
        marginTop: 20
    },
    image: {
        width: Dimensions.get('window').width * 0.7,
        height: 150,
        marginBottom: 20
    },
    resultText: {
        fontSize: 20,
        textAlign: 'center'
    },
    list: {
        flex: 1
    }
});

export default GameOverScreen;
