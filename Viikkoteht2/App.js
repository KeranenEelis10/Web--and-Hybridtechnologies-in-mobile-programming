import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPresses, setModalPresses] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <Pressable
          onPress={() => {
            setModalVisible(true);
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'white' : 'white',
            },
            styles.wrapperCustom,
          ]}
        >
          {({ pressed }) => (
            <Text style={styles.text}>
              {pressed ? 'Pressed!' : 'Show modal message'}
            </Text>
          )}
        </Pressable>

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Modal message</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalPresses((prev) => prev + 1);
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{modalPresses}x Modal Presses</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 50,
    padding: 25,
    elevation: 2,
    backgroundColor: 'white',
  },
  buttonClose: {
    backgroundColor: 'yellow',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderColor: 'white',
    backgroundColor: 'white',
  },
});