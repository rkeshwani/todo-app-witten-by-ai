/*
TodoInput containing the input field and the add button utilizing Nativebase
*/
import React from 'react';
import {View, Input, Button, Text, VStack} from 'native-base';

export function TodoInput(props) {
    const styles = {
        button :  { },
        container: { },
        buttonText: { },
        input: { }
      };
    return (
        <View style={styles.container}>
            <VStack>
                <Input style={styles.input}
                    placeholder="What needs to be done?"
                    onChangeText={props.onChangeText}
                    value={props.value}
                />
                <Button style={styles.button} onPress={props.onPress}>
                    <Text style={styles.buttonText}>Add</Text>
                </Button>
            </VStack>
        </View>
    );
}
