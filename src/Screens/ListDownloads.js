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
} from 'react-native-paper';
import ytdl from 'react-native-ytdl';
import css from '../Styles/Styles';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import RNFetchBlob from 'rn-fetch-blob';

//---------------------------------------------------------------

var typeError = ''; //----- Global

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

      pathForOpen: '',
    };
  }

  componentDidMount(){
    this.getMultiple();
  }

  requestPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Title',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        this.downloadMachine();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  completedDownload = () => {
    this.setState({
      isIndeterminate: false,
      status: 'Completado ✔️',
      downloadProgress: 1,
      //disabledPlay: false,
      //disabledClose: false,
      //showSnack: true,
    });
  }

  androidProcess = () => {
    this.setState({
      isIndeterminate: true,
    });
}

  downloadMachine = async () => {
    let item = this.state.currentItem[0];
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

    this.setState({
      //
    });

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
            mime: item.type,
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
          console.log('Response: ', resp);
          this.setState({pathForOpen: resp.path()});
          this.completedDownload();
          console.log('The file saved to', resp.path());
        })
        .catch((e) => {
          console.log('Error >>', e.message);
          //typeError = e.message;
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
        //this.state.currentItem.length === 0 ? console.log('Sin Elementos para Descargar') : this.downloadMachine();
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
    const { newObject, currentItem, downloadProgress, status, isIndeterminate } = this.state;

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
                        <ProgressBar progress={downloadProgress} indeterminate={isIndeterminate} style={css.progressSize}/>
                    </View>
                </View>
              </Fragment>
            ))}
          {newObject.reverse().slice(1).map((item, index2) => (
              <List.Item
              key={index2}
              title={item.title}
              titleStyle={css.titleListDownloads}
              description={'Descargado el ' + item.date + ' | ' + item.type.toUpperCase() + ' | ' + Math.trunc(item.size / 1000000) + 'Mb' }
              descriptionStyle={css.descListDownloads}
              style={css.listDownloads}
              onPress={() => null}
              left={props =>
                <View style={css.iconDownload}>
                  <Image style={css.iconDownloadImg} source={{ uri: item.img }} />
                </View>
              }/>
          ))}
        </ScrollView>
        <FAB
          style={css.fab}
          small
          icon="delete"
          onPress={() => this.removeFew()}
        />
      </Fragment>
    );
  }
}

export default withTheme(ListDownloads);
