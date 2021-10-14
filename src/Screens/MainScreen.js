/* eslint-disable prettier/prettier */
import React, {Component, Fragment} from 'react';
import {
  View,
  Image,
  Keyboard,
  StatusBar,
  LogBox,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  withTheme,
  Button,
  TextInput,
  Title,
  HelperText,
} from 'react-native-paper';
import 'react-native-gesture-handler';
import css from '../Styles/Styles';
import {
  colorSelection,
  appDark,
} from '../Styles/Styles';

//------------------- Globales
var typeError = '';
LogBox.ignoreAllLogs();

//---------------------------------------------------------------

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywordTxt: '',

      songList: [],
      tokenNext: '',

      searching: false,
      showError: false,
    };
  }

  selectBug = () => {
    console.log('Dentro de select Bug', JSON.stringify(typeError));
    const ee = JSON.stringify(typeError);
    ee.includes('Network')
      ? (typeError = 'Revisa tu conexión a Internet')
      : null;
    this.setState({showError: true, spin: false});
  };

  _navigate = () => {
    this.props.navigation.navigate('ListSongs', {
      songList: this.state.songList,
      tokenNext: this.state.tokenNext,
    });
  }

  searchSong = () => {
    const  apiKey = 'AIzaSyBxJAdyyhLejOIbWLQinq7grj9KfSw-qmQ';  //Llave
    const  keyWord = this.state.keywordTxt;

    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=' + keyWord + '&key=' + apiKey)
      .then(response => response.json())
      .then((response) => {
        console.log('mis resultados: ', response);
        this.setState({
          songList: response.items,
          tokenNext: response.nextPageToken,
          searching: false,
        });
        this._navigate();
      })
      .catch((e) => {
        console.log('Error Object: ', e + 'Error Msn: ', e.message);
        e.message.includes('Network') ? typeError = 'No hay conexión a Internet' : null;
        this.setState({showError: true, searching: false});
      });

  }

  validateTxt = (e) => {
    const string = this.state.keywordTxt;
    string === ''
      ? (
          typeError = 'El campo de busqueda está vacío',
          this.setState({showError: true, searching: false})
        )
      : (
          this.setState({showError: false, searching: true}),
          this.searchSong()
      );
  }

  render() {
    console.log(this.state);
    const { keywordTxt, showError } = this.state;

    return (
      <View style={css.container}>
          <StatusBar backgroundColor={appDark} />
            <Image style={css.frontLogo} source={require('../Media/Front_App_Logo.png')} />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? ('padding"') : ('height')} keyboardVerticalOffset={-100}>
              <TextInput
                style={css.inputCustom}
                placeholder="Nombre de la canción o artísta"
                mode="outlined"
                value={keywordTxt}
                onChangeText={text => this.setState({keywordTxt: text})}
                selectionColor={colorSelection}
              />
              <HelperText type="error" visible={showError}>
                {typeError}
              </HelperText>
              <View style={css.actionsCustom}>
                <Button
                  style={css.searchBtn}
                  mode="contained"
                  onPress={this.validateTxt}
                  loading={this.state.searching}
                  labelStyle={css.labelSearchBtn}>
                  Buscar
                </Button>
              </View>
            </KeyboardAvoidingView>
          </View>
    );
  }
}

export default withTheme(MainScreen);