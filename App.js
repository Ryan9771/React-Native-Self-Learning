import React, {useState} from 'react';
import { Text, TextInput, View, Image, Button, ScrollView, FlatList, StyleSheet } from 'react-native';

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
    <SafeAreaView>
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
    </SafeAreaView>
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
  );
}

// export default Cats;

// -------------

// Converting Text input to pizzas
const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style = {{height: 40}}
        placeholder = "Type here to translate"
        defaultValue = {text}
        onChangeText = {newText => setText(newText)}
      />
      <Text style = {{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View>
  );
}

// export default PizzaTranslator;

// --------------


// Scroll Views
const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
}

const Scroll = () => {
  return (
    <ScrollView>
      <Text style={{ fontSize: 96 }}>Scroll me!</Text>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Text style={{ fontSize: 96 }}>Keep scrolling</Text>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Text style={{ fontSize: 96 }}>Almost there</Text>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Text style={{ fontSize: 96 }}>You've reached the end!</Text>
    </ScrollView>
  );
};

export default Scroll;
