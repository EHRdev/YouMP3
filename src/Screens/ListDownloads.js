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
import RNFetchBlob from 'rn-fetch-blob';

//---------------------------------------------------------------

const android = RNFetchBlob.android;

class ListDownloads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newObject: [],
      currentItem: '',
      keys: [],
      colorLine: '',
      downloadProgress: '',
      pathForOpen: '',
    };
  }

  componentWillMount(){
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

  downloadMachineX = async () => {

    let item = this.state.currentItem;
    const { dirs } = RNFetchBlob.fs;
    const dirToSave = Platform.OS === 'ios' ? dirs.DocumentDir : dirs.DownloadDir;
    const filename = item.title;
    const type = 'mp3';
    let filePath = `${dirToSave}/${filename}.${type}`;

    RNFetchBlob
    .config({
        addAndroidDownloads : {
            useDownloadManager : true,
            notification : true,
            mime : 'audio/webm',
            description : 'File downloaded by download manager.',
            fileCache: true,
            title: filename,
            path: filePath,
            appendExt: 'mp3',
        }
    })
    .fetch('GET', item.src)
    .then((resp) => {
      console.log('The file saved to', resp.path());
    })
  }

  downloadMachine = async () => {

    let item = this.state.currentItem;
    console.log('current item - download machine', item);
    console.log('current item - src', item.src);

    const { dirs } = RNFetchBlob.fs;
    const dirToSave = Platform.OS === 'ios' ? dirs.DocumentDir : dirs.DownloadDir;
    const filename = item.title;
    const type = 'mp3';
    let filePath = `${dirToSave}/${filename}.${type}`;

    console.log(dirToSave, '<< Document Path MP3');
    console.log(filePath, '<< File Path MP3');

    //this.setState({show: false, progressModal: true, route: dirToSave, isMP3: true});
    RNFetchBlob.config(
      Platform.select({
        ios: {
          fileCache: true,
          title: filename,
          path: filePath,
          appendExt: 'mp3',
        },
        android: {
          fileCache: true,
          title: filename,
          path: filePath,
          appendExt: 'mp3',
        },
    }))
      .fetch('GET', item.src)
      .progress((received, total) => {
        console.log('progress', received / total);
        this.setState({downloadProgress: received / total});
      })
      .then(resp => {
        console.log('resp: ', resp);
          this.setState({pathForOpen: resp.path()});
              if (Platform.OS === 'ios') {
                //this.completedDownload();
                //RNFetchBlob.ios.openDocument(resp.data);
              }
              if (Platform.OS === 'android') {
                //this.completedDownload();
                RNFetchBlob.android.addCompleteDownload({
                  title: `${filename}.${type}`,
                  description: 'Descarga Completa',
                  mime: 'audio/webm',
                  path: resp.path(),
                  //showNotification: true,
                });
              }
              console.log('The file saved to', resp.path());
        })
        .catch((e) => {
          console.log('Error >>', e.message);
        });
  };

    getMultiple = async () => {
      let keys = [];
      let values;

      try {
        keys = await AsyncStorage.getAllKeys();
        console.log('keys: ', keys);
        values = await AsyncStorage.multiGet(keys);
        console.log('values: ', values);

        const currentItemRaw = await AsyncStorage.getItem(keys[keys.length - 1]);
        console.log('currentItemRaw: ', currentItemRaw);

        var currentItem = JSON.parse(currentItemRaw);
        console.log('currentItem: ', currentItem);

        let xvalues = values.map(item => {
          return JSON.parse(item[1]);
        });

        console.log('xvalues: ', xvalues);

        this.setState({
          newObject: xvalues,
          currentItem: currentItem,
        });

        return currentItem;
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
    const { newObject, currentItem } = this.state;

    return (
      <Fragment>
        <ScrollView>
            <View style={css.currentBox}>
                <Image style={css.iconDownloadImg} source={{ uri: currentItem.img }} />
                <View style={css.currentBoxRight}>
                    <Title style={css.titleListDownloads}>{currentItem.title}</Title>
                    <Title style={css.titleListDownloads}>Descargando...</Title>
                    <ProgressBar progress={0.5} color="red" />
                </View>
            </View>
          {newObject.reverse().slice(1).map((item, index) => (
              <List.Item
              key={index}
              title={item.title}
              titleStyle={css.titleListDownloads}
              description={item.date}
              descriptionStyle={css.descListDownloads}
              style={css.listDownloads}
              onPress={() => this.downloadMachine()}
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
