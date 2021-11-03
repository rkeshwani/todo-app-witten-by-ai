import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Container,
} from "native-base";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");
  const onDeleteItem = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    console.log(newTodos);
    setTodos(newTodos);
  };
  const onToggleItem = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };
  const onChangeInput = (text) => {
    setInput(text);
  };
  const onAddItem = () => {
    console.log("Adding "+input);
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  /*Return the App containing an input field, and add button, and a todo list of items*/
  return (
    <NativeBaseProvider>
        <VStack space={5} alignItems="center" mt={20} width="100%">
          <Heading>Todo List</Heading>
          <TodoInput value={input} onChangeText={onChangeInput} onPress={onAddItem} />
          <TodoList items={todos} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
        </VStack>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
