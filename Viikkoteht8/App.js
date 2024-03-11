import { StatusBar } from 'expo-status-bar';
import { MESSAGES, firestore } from './firebase/config';
import { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { convertFirebaseTimeStampToJS } from './helpers/functions';
import { collection, query, onSnapshot } from 'firebase/firestore';
import styles from './styles';
import { orderBy } from 'firebase/firestore';


export default function App() {

  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')


  useEffect(() => {
    const q = query(collection(firestore, MESSAGES), orderBy('created', 'desc'))

    const unsubscribe = onSnapshot(q,(querySnapshot) => {
        const tempMessages = []

        querySnapshot.forEach((doc) => {

          const messageObject = {
            id: doc.id,
            text: doc.data().text,
            created: convertFirebaseTimeStampToJS(doc.data().created)
          }
            tempMessages.push(messageObject)
        })
        setMessages(tempMessages)
    })

    return () => {
        unsubscribe()
    }
}, [] );


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {messages.map((message) => (
          <View style={styles.message} key={message.id}>
          <Text style={styles.messageInfo}>{message.created}</Text>
          <Text>{message.text}</Text>
          </View>  
          ))}
        </ScrollView>
    </SafeAreaView>
    
  );
}

