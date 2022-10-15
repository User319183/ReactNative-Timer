
/*



[[ 

    ⒸⓄⒹⒺ ⒸⓇⒺⒶⓉⒺⒹ ⒷⓎ ⓈⒶⓉⒽⓋⒾⓀ ⓗⓣⓣⓟⓢ://ⓢⓐⓣⓗⓥⓘⓚ.ⓘⓝⓕⓞ

]]


***SOURCE IS PROTECTED BY THE Apache License 2.0 ***




*/
















import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});



export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        seconds: 0,
        minutes: 0,
        hours: 0,
        alarm: false
        };
    }


    setAlarm = () => {
        if (this.state.seconds == 0 && this.state.minutes == 0 && this.state.hours == 0) {
            alert("Please set the alarm for at least 1 second.");
        }
        else {


        this.setState({ alarm: true });

        setTimeout(() => {
        alert("Alarm has been deactivated! Alarm was set for " + this.state.hours + " hours, " + this.state.minutes + " minutes, and " + this.state.seconds + " seconds.");
            


        this.setState({ alarm: false });
        }, this.state.seconds * 1000 + this.state.minutes * 60000 + this.state.hours * 3600000);
    }}

    stopAlarm = () => {
        if (this.state.alarm == false) {
            alert("Alarm is already off.");
        }

        else {

        this.setState({ alarm: false });
    }}

    increaseSeconds = () => {
        this.setState({ seconds: this.state.seconds + 1 });
    }


    decreaseSeconds = () => {
        if (this.state.seconds < 1) {
            this.setState({ seconds: 0 });
            }

        else {
        this.setState({ seconds: this.state.seconds - 1 });
    }}



    increaseMinutes = () => {
        this.setState({ minutes: this.state.minutes + 1 });
    }


    decreaseMinutes = () => {
        if (this.state.minutes < 1) {
        this.setState({ minutes: 0 });
        }

        else {
        this.setState({ minutes: this.state.minutes - 1 });
        }
    }


    increaseHours = () => {
        this.setState({ hours: this.state.hours + 1 });
    }


    decreaseHours = () => {
        if (this.state.hours < 1) {
            this.setState({ hours: 0 });
            }

        else {

        this.setState({ hours: this.state.hours - 1 });
    }} 


    render() {

        return (
        <View style={styles.container}>

            <Text style={styles.paragraph}>Seconds: {this.state.seconds}</Text>

            <Text style={styles.paragraph}>Minutes: {this.state.minutes}</Text>

            <Text style={styles.paragraph}>Hours: {this.state.hours}</Text>

            <Button title="Set Alarm" onPress={this.setAlarm} />

            <Text style={styles.paragraph}></Text>

            <Button title="Stop Alarm" onPress={this.stopAlarm} />

            <Text style={styles.paragraph}></Text>

            <Button title="Increase Seconds" onPress={this.increaseSeconds} />

            <Text style={styles.paragraph}></Text>

            <Button title="Decrease Seconds" onPress={this.decreaseSeconds} />

            <Text style={styles.paragraph}></Text>

            <Button title="Increase Minutes" onPress={this.increaseMinutes} />

            <Text style={styles.paragraph}></Text>

            <Button title="Decrease Minutes" onPress={this.decreaseMinutes} />

            <Text style={styles.paragraph}></Text>

            <Button title="Increase Hours" onPress={this.increaseHours} />

            <Text style={styles.paragraph}></Text>

            <Button title="Decrease Hours" onPress={this.decreaseHours} />
        </View>
        );
    }
}
