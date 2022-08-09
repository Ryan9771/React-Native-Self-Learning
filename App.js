import React from 'react';
import { Text, TextInput, View } from 'react-native';

// A function declared anonymously
const getFirstName = (firstName) => {
  return firstName + " ";
}

// A function declared properly
function getLastName(lastName) {
  return lastName;
}

// The 'Hello' component
const Hello = () => {
  const name = 'Ryan';
  return (
    <View>
      <Text>
        Hello, I am {getFirstName("Ryan") + getLastName("Ryan")}
      </Text>
      <TextInput
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          height: 40
        }}
        defaultValue="Im a text box"
      />
    </View>
  );
}

// We can export the Hello component and it'll display once
// export default Hello;

// But we can render a component multiple times as so: (make sure the first one is wrapped in a view!)

const HelloThere = (props) => {
  return (
    <View>
      <Text>Hello there, {props.name}!</Text>
    </View>
  );
}

// Called a parent component as it renders another component
const HelloThereSpam = () => {
  return (
    <View>
      <HelloThere name={"Ryan"}/>
      <HelloThere name={"Gerald"}/>
      <HelloThere name={"Andrew"}/>
    </View>
  );
}

export default HelloThereSpam;