import React, {useState} from 'react';
import { Text, TextInput, View, Image, Button } from 'react-native';

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
      <Image 
        source = {require('./Images/minecraft.jpg')}
        style = {{height:200, width:200}}
      />
    </View>
  );
}

// -------------

// Using hook and state to keep track of things. Here is a cat that can be hungry. If so, then click the button to make it 'full'
const Cat = (props) => {
  const [isHungry, setHungry] = useState(true);
  return (
    <View>
      <Text>I am {props.name}. I am {isHungry ? 'hungry' : 'full'}</Text>
      <Button
        onPress = {() => {
          setHungry(false);
        }}
        disabled = {!isHungry}
        title = {isHungry ? "Click to feed" : "Yum"}
      />
    </View>
  );
}

// Here are multiple cats
const Cats = () => {
  return (
    // Note you can do this too instead of view. View doesn't work here for some reason 
    <> 
      <Cat name = "Ryan"/>
      <Cat name = "Lisa"/>
    </>
  )
}

// export default Cats;

// -------------