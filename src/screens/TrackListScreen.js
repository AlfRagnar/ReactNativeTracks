import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text style={styles.tracklist}>TrackListScreen</Text>
            <Button
                title='Go to Track Detail'
                onPress={() => navigation.navigate('TrackDetail')}
            />
        </>
    );
};

const styles = StyleSheet.create({
    tracklist: {
        fontSize: 48,
    },
});

export default TrackListScreen;
