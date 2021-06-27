import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Modal,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

function PropertyEnlistments({navigation}) {
  const [modal, setModal] = useState(false);
  const labels = [
    'ID',
    'Landlord Name',
    'Street Name',
    'Status',
    'Smart Contract Address',
    'Action',
  ];
  const [data, setData] = useState([
    {
      ID: 1,
      Landlord_Name: 'Surya',
      Street_Name: 'Police Layout',
      Status: '1541',
      Smart_Contract_Address: '11613',
      Action: '5465656',
      House_Number: 145,
      Floor_Number: 5,
      Apartment_Number: 121,
      zip_code: '560078',
    },
    {
      ID: 2,
      Landlord_Name: 'Thanmai',
      Street_Name: 'Police Layout',
      Status: '1541',
      Smart_Contract_Address: '11613',
      Action: '5465656',
      House_Number: 145,
      Floor_Number: 5,
      Apartment_Number: 121,
      zip_code: '560078',
    },
    {
      ID: 3,
      Landlord_Name: 'Tejas',
      Street_Name: 'Police Layout',
      Status: '1541',
      Smart_Contract_Address: '11613',
      Action: '5465656',
      House_Number: 145,
      Floor_Number: 5,
      Apartment_Number: 121,
      zip_code: '560078',
    },
    {
      ID: 4,
      Landlord_Name: 'Sukesh',
      Street_Name: 'Police Layout',
      Status: '1541',
      Smart_Contract_Address: '11613',
      Action: '5465656',
      House_Number: 145,
      Floor_Number: 5,
      Apartment_Number: 121,
      zip_code: '560078',
    },
    {
      ID: 5,
      Landlord_Name: 'XYZ',
      Street_Name: 'Police Layout',
      Status: '1541',
      Smart_Contract_Address: '11613',
      Action: '5465656',
      House_Number: 145,
      Floor_Number: 5,
      Apartment_Number: 121,
      zip_code: '560078',
    },
    {
      ID: 6,
      Landlord_Name: 'Surya',
      Street_Name: 'Police Layout',
      Status: '1541',
      Smart_Contract_Address: '11613',
      Action: '5465656',
      House_Number: 145,
      Floor_Number: 5,
      Apartment_Number: 121,
      zip_code: '560078',
    },
  ]);

  const [addingObject, setAddingObject] = useState({
    ID: 10,
    Landlord_Name: '',
    Street_Name: '',
    Status: '',
    Smart_Contract_Address: '',
    Action: '',
    House_Number: '',
    Floor_Number: '',
    Apartment_Number: '',
    zip_code: '',
  });

  const [name, setName] = useState('');
  const [streetName, setStreetName] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [floorNumber, setFloorNumber] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');
  const [zip, setZip] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{marginRight: 10}}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Icon name="chevron-left" type="font-awesome-5" color="white" />
          </TouchableOpacity>
          <Text style={styles.heading}>Property Enlistments</Text>
        </View>
      </View>
      <View style={styles.gridContainer}>
        <ScrollView horizontal={true}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <View style={styles.tableLabelStyle}>
              {labels.map((dat, i) => (
                <View style={styles.cellStyle1}>
                  <Text
                    style={{
                      color: '#43DDE6',
                      fontSize: 17,
                      fontWeight: '700',
                      textAlign: 'center',
                    }}>
                    {dat}
                  </Text>
                </View>
              ))}
            </View>
            {data.map((dat, i) => (
              <View style={styles.tableLabelStyle}>
                <View style={styles.cellStyle}>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    {dat.ID}
                  </Text>
                </View>
                <View style={styles.cellStyle}>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    {dat.Landlord_Name}
                  </Text>
                </View>
                <View style={styles.cellStyle}>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    {dat.Street_Name}
                  </Text>
                </View>
                <View style={styles.cellStyle}>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    {dat.Status}
                  </Text>
                </View>
                <View style={styles.cellStyle}>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    {dat.Smart_Contract_Address}
                  </Text>
                </View>
                <View style={styles.cellStyle}>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    {dat.Action}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModal(true);
        }}>
        <View style={styles.rowCenter}>
          <Icon
            name="plus"
            size={15}
            style={{marginRight: 10}}
            color="white"
            type="font-awesome-5"
          />
          <Text
            style={{
              color: 'white',
              fontSize: 13,
              fontWeight: '700',
              letterSpacing: 1,
            }}>
            ADD PROPERTY
          </Text>
        </View>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modal}>
        <View style={styles.centeredView}>
          <ScrollView>
            <View style={styles.modalView}>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: '700',
                    color: '#43DDE6',
                    marginTop: 30,
                    marginBottom: 30,
                  }}>
                  Add Property
                </Text>

                <View
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginVertical: 5,
                  }}>
                  <Text style={{color: '#fff', marginVertical: 10}}>
                    Landlord Name
                  </Text>
                  <TextInput
                    style={
                      name
                        ? styles.ContentTextInputFocus
                        : styles.ContentTextInput
                    }
                    placeholder={`${name ? '' : 'Landlord Name'}`}
                    onFocus={() => {
                      setName(true);
                      setStreetName(false);
                      setHouseNumber(false);
                      setFloorNumber(false);
                      setApartmentNumber(false);
                      setZip(false);
                    }}
                    value={addingObject.Landlord_Name}
                    onChangeText={newVal => {
                      let temp = {...addingObject};
                      temp.Landlord_Name = newVal;
                      setAddingObject(temp);
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginVertical: 5,
                  }}>
                  <Text style={{color: '#fff', marginVertical: 10}}>
                    Street Name
                  </Text>
                  <TextInput
                    style={
                      streetName
                        ? styles.ContentTextInputFocus
                        : styles.ContentTextInput
                    }
                    placeholder={`${streetName ? '' : 'Street Name'}`}
                    onFocus={() => {
                      setName(false);
                      setStreetName(true);
                      setHouseNumber(false);
                      setFloorNumber(false);
                      setApartmentNumber(false);
                      setZip(false);
                    }}
                    value={addingObject.Street_Name}
                    onChangeText={newVal => {
                      let temp = {...addingObject};
                      temp.Street_Name = newVal;
                      setAddingObject(temp);
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginVertical: 5,
                  }}>
                  <Text style={{color: '#fff', marginVertical: 10}}>
                    House Number
                  </Text>
                  <TextInput
                    style={
                      houseNumber
                        ? styles.ContentTextInputFocus
                        : styles.ContentTextInput
                    }
                    placeholder={`${houseNumber ? '' : 'House Number'}`}
                    autoCapitalize="none"
                    onFocus={() => {
                      setName(false);
                      setStreetName(false);
                      setHouseNumber(true);
                      setFloorNumber(false);
                      setApartmentNumber(false);
                      setZip(false);
                    }}
                    value={addingObject.House_Number}
                    onChangeText={newVal => {
                      let temp = {...addingObject};
                      temp.House_Number = newVal;
                      setAddingObject(temp);
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginVertical: 5,
                  }}>
                  <Text style={{color: '#fff', marginVertical: 10}}>
                    Floor Number
                  </Text>
                  <TextInput
                    style={
                      floorNumber
                        ? styles.ContentTextInputFocus
                        : styles.ContentTextInput
                    }
                    placeholder={`${floorNumber ? '' : 'Floor Number'}`}
                    autoCapitalize="none"
                    onFocus={() => {
                      setName(false);
                      setStreetName(false);
                      setHouseNumber(false);
                      setFloorNumber(true);
                      setApartmentNumber(false);
                      setZip(false);
                    }}
                    value={addingObject.Floor_Number}
                    onChangeText={newVal => {
                      let temp = {...addingObject};
                      temp.Floor_Number = newVal;
                      setAddingObject(temp);
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginVertical: 5,
                  }}>
                  <Text style={{color: '#fff', marginVertical: 10}}>
                    Apartment Number
                  </Text>
                  <TextInput
                    style={
                      apartmentNumber
                        ? styles.ContentTextInputFocus
                        : styles.ContentTextInput
                    }
                    placeholder={`${apartmentNumber ? '' : 'Apartment Number'}`}
                    autoCapitalize="none"
                    onFocus={() => {
                      setName(false);
                      setStreetName(false);
                      setHouseNumber(false);
                      setFloorNumber(false);
                      setApartmentNumber(true);
                      setZip(false);
                    }}
                    value={addingObject.Apartment_Number}
                    onChangeText={newVal => {
                      let temp = {...addingObject};
                      temp.Apartment_Number = newVal;
                      setAddingObject(temp);
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginVertical: 5,
                  }}>
                  <Text style={{color: '#fff', marginVertical: 10}}>
                    Zip Code
                  </Text>
                  <TextInput
                    style={
                      zip
                        ? styles.ContentTextInputFocus
                        : styles.ContentTextInput
                    }
                    placeholder={`${zip ? '' : 'Zip Code'}`}
                    autoCapitalize="none"
                    onFocus={() => {
                      setName(false);
                      setStreetName(false);
                      setHouseNumber(false);
                      setFloorNumber(false);
                      setApartmentNumber(false);
                      setZip(true);
                    }}
                    value={addingObject.zip_code}
                    onChangeText={newVal => {
                      let temp = {...addingObject};
                      temp.zip_code = newVal;
                      setAddingObject(temp);
                    }}
                  />
                </View>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 25,
                }}>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: ScreenWidth / 2.5,
                    marginBottom: 8,
                    borderRadius: 8,
                    shadowColor: 'rgba(250,250,250, .4)', // IOS
                    shadowOffset: {height: 1, width: 1}, // IOS
                    shadowOpacity: 1, // IOS
                    shadowRadius: 1, //IOS
                    backgroundColor: '#808080',
                    elevation: 2, // Android
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginRight: 15,
                  }}
                  onPress={() => {
                    setModal(false);
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      textAlign: 'center',
                    }}>
                    RETURN
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: ScreenWidth / 4,
                    marginBottom: 8,
                    borderRadius: 8,
                    shadowColor: 'rgba(250,250,250, .4)', // IOS
                    shadowOffset: {height: 1, width: 1}, // IOS
                    shadowOpacity: 1, // IOS
                    shadowRadius: 1, //IOS
                    backgroundColor: '#FC5185',
                    elevation: 2, // Android
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginLeft: 15,
                  }}
                  onPress={() => {
                    setData([...data, addingObject]);
                    setAddingObject({
                      ID: 11,
                      Landlord_Name: '',
                      Street_Name: '',
                      Status: '',
                      Smart_Contract_Address: '',
                      Action: '',
                      House_Number: '',
                      Floor_Number: '',
                      Apartment_Number: '',
                      zip_code: '',
                    });
                    setModal(false);
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      textAlign: 'center',
                    }}>
                    SAVE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#001117',
    color: 'white',
    flex: 1,
    height: ScreenHeight,
  },
  gridContainer: {
    marginVertical: 20,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cellStyle: {
    flex: 1,
    margin: 10,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellStyle1: {
    flex: 1,
    margin: 10,
    width: 100,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableLabelStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    width: '70%',
    marginLeft: 10,
    color: '#43DDE6',
  },
  button: {
    backgroundColor: '#FC5185',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 50,
    width: ScreenWidth - 60,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    marginBottom: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: '#001117',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#111',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 9,
    width: ScreenWidth,
    height: ScreenHeight,
    paddingBottom: ScreenHeight * 0.05,
  },
  ContentTextInput: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#001117',
    width: ScreenWidth - 70,
  },
  ContentTextInputFocus: {
    height: 45,
    borderColor: '#FC5185',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#001117',
    width: ScreenWidth - 70,
  },
});

export default PropertyEnlistments;
