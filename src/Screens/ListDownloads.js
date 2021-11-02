/* eslint-disable prettier/prettier */
import React, {Component, Fragment} from 'react';
import {
  View,
  ScrollView,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {
  withTheme,
  Title,
  List,
  Button,
  ProgressBar,
  FAB,
  Snackbar,
} from 'react-native-paper';
import ytdl from 'react-native-ytdl';
import css, { appYellow } from '../Styles/Styles';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import RNFetchBlob from 'rn-fetch-blob';

//---------------------------------------------------------------

var typeError = ''; //----- Global
const android = RNFetchBlob.android; // Android for OpenFile

class ListDownloads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newObject: [],
      currentItem: [],
      keys: [],

      colorLine: '',
      isIndeterminate: false,
      downloadProgress: '',
      status: 'DESCARGANDO',

      showSnack: false,
      progressColor: appYellow,

      filePath: '',
      dialogDetails: false,
    };
  }

  componentDidMount(){
    this.getMultiple();
  }

  hideShowMore = () => this.setState({dialogElement: false});
  onDismissSnackBar = () => this.setState({showSnack: false});
  hideDialog = () => this.setState({dialogDetails: false});

  showDetailInfo = () => this.setState({dialogDetails: true});

  requestPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Permisos de Descarga',
          message:
            'Los permisos le permiten descargar música y videos de ésta App.',
          buttonPositive: 'Ok',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use storage');
        this.downloadMachine();
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

   cancelDownload = () => {
    this.setState({
      isIndeterminate: false,
      status: 'CANCELADA',
      downloadProgress: 0,
      progressColor: 'red',
      //disabledClose: false,
      showSnack: false,
    });
  }

  completedDownload = () => {
    this.setState({
      isIndeterminate: false,
      status: 'COMPLETADO',
      downloadProgress: 1,
      progressColor: 'green',
      //disabledClose: false,
      showSnack: true,
    });
  }

  androidProcess = () => {
    this.setState({
      isIndeterminate: true,
    });
}

  downloadMachine = async () => {
    let itemLast = this.state.currentItem;
    let item = itemLast[itemLast.length - 1];
    console.log('Mi Item Unico: ', item);

    //let item = this.state.currentItem.slice(item.length - 1).map((item) => item);
    //console.log('Mi Item Final: ', item);

    const { dirs } = RNFetchBlob.fs;
    let filename = item.title;
    let type = item.type;

    const dirToSave = Platform.OS === 'ios' ? dirs.DocumentDir : dirs.DownloadDir;
    console.log(dirToSave, '<< Document Path');

    let filePath = `${dirToSave}/${filename}.${type}`;
    console.log(filePath, '<< File Path');

    this.setState({ filePath: filePath });

    Platform.OS === 'android' ? this.androidProcess() : null;

    RNFetchBlob.config(
      Platform.select({
        ios: {
          fileCache: true,
          title: filename,
          path: filePath,
          appendExt: item.type,
        },
        android: {
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            title: filename,
            description: item.type,
            path: filePath,
            fileCache: true,
            mime: item.mime,
            //mime: 'audio/webm',
          },
        },
    }))
    .fetch('GET', item.src)
      .progress((received, total) => {
        console.log('progress', received / total);
        this.setState({downloadProgress: received / total});
      })
      .then(resp => {
          console.log('Full Response: ', resp);
          this.completedDownload();
          console.log('The file saved to', resp.path());
          Platform.OS === 'android' ? (
            console.log('PRESS OPEN ANDROID'),
            android.actionViewIntent(resp.path(), item.mime)
          ) : (
            console.log('PRESS OPEN IOS'),
            RNFetchBlob.ios.openDocument(resp.path())
          );
        })
        .catch((e) => {
          console.log('Error >>', e.message);
          this.cancelDownload();
        });
  }

    getMultiple = async () => {
      let keys = [];
      let values;

      try {
        keys = await AsyncStorage.getAllKeys();
        console.log('keys: ', keys);
        values = await AsyncStorage.multiGet(keys);
        console.log('values: ', values);

        let xvalues = values.map(item => {
          return JSON.parse(item[1]);
        });

        console.log('xvalues: ', xvalues);

        this.setState({
          newObject: xvalues,
          currentItem: xvalues,
        });

        //-----------------To DownLoad Machine
        this.state.currentItem.length === 0 ? console.log('Sin Elementos para Descargar') : Platform.OS === 'android' ? this.requestPermissions() : this.downloadMachine();

      } catch (e) {
        // read error
      }
    }

    removeFew = async () => {
      let keys = [];
      try {
        keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
        this.getMultiple();
      } catch (e) {
        // remove error
      }
    }

  render() {
    console.log(this.state);
    const { newObject, currentItem, downloadProgress, progressColor, status, isIndeterminate, showSnack, filePath, dialogDetails } = this.state;

    return (
      <Fragment>
        <ScrollView>
        {currentItem.slice(currentItem.length - 1).map((item, index) => (
              <Fragment key={index}>
                <View style={css.currentBox}>
                    <View style={css.currentBoxLeft}>
                      <Image style={css.iconDownloadImg} source={{ uri: item.img }} />
                    </View>
                    <View style={css.currentBoxRight}>
                        <Title style={css.titleListDownloads} numberOfLines={1}>{item.title}</Title>
                        <Animatable.Text animation="pulse" style={css.statusStyle} iterationCount="infinite">{status}</Animatable.Text>
                        <ProgressBar progress={downloadProgress} indeterminate={isIndeterminate} color={progressColor}/>
                    </View>
                </View>
              </Fragment>
            ))}
          {newObject.slice(0, newObject.length - 1).reverse().map((item, index2) => (
              <List.Item
                key={index2}
                title={item.title}
                titleStyle={css.titleListDownloads}
                description={'Descargado el ' + item.date + ' | ' + item.type + ' | ' + Math.round((item.size / 1000000) * 100 ) / 100 + 'Mb' }
                descriptionStyle={css.descListDownloads}
                style={css.listDownloads}
                onPress={() => this.showDetailInfo()}
                left={props =>
                  <View style={css.iconDownload}>
                    <Image style={css.iconDownloadImg} source={{ uri: item.img }} />
                  </View>
                }/>
            ))
          }
        </ScrollView>
        <FAB
          style={css.fab}
          small
          icon="delete"
          onPress={() => this.removeFew()}
        />
          <Snackbar
            visible={showSnack}
            onDismiss={this.onDismissSnackBar}
            style={css.snackStyle}>
              <Title style={css.txtSnack}>¡Archivo Descargado! 🔥</Title>
          </Snackbar>
      </Fragment>
    );
  }
}

export default withTheme(ListDownloads);
