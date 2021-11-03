/* Todo list component utilizing Nativebase */
import React from 'react';
import {View, FlatList, Button, CheckIcon, Text, CloseIcon, HStack, VStack, Box} from 'native-base';
export function TodoList(props) {
  const { items, onDeleteItem, onToggleItem } = props;
  return (
          
            <FlatList width='100%' data={items} renderItem={({item}) => (   // renderItem is a function that takes an object
                <Box style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} width='100%' paddingY="2">
                    <HStack space={4} alignItems="center" backgroundColor={item.completed?'tertiary.200':'white'} width='100%' paddingLeft="2">
                        <Text>{item.text}</Text>
                        <HStack space={3} marginLeft="auto" paddingRight="2">
                            <Button onPress={() => onDeleteItem(item.id)}>
                                <CloseIcon name='trash' />
                            </Button>
                            <Button onPress={() => onToggleItem(item.id)}>
                                <CheckIcon name='check' />
                            </Button>
                        </HStack>
                    </HStack>
                </Box>
            )}
            keyExtractor={(item) => item.id}
            />
  );
}