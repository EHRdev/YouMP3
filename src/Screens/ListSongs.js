/* eslint-disable prettier/prettier */
import React, {Component, Fragment} from 'react';
import {
  View,
  ScrollView,
  Image,
} from 'react-native';
import {
  withTheme,
  Title,
  List,
  Button,
  ActivityIndicator,
  Portal,
  Modal,
} from 'react-native-paper';
import ytdl from 'react-native-ytdl';
import css from '../Styles/Styles';
import 'react-native-gesture-handler';
import moment from 'moment';
import 'moment/locale/es-mx';
import AsyncStorage from '@react-native-async-storage/async-storage';

//---------------------------------------------------------------

var globalType = '';

class ListSongs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywordTxt: '',
      btnLoadMore: true,

      songList: this.props.route.params.songList,
      tokenNext: this.props.route.params.tokenNext,

      globalType: '',

      showBtn: false,
      loading: false,

      obj: [
        {
          key: '',
          title: '',
          img: '',
          date: '',
          src: '',
          type: '',
        },
      ],
    };
  }

  _navigate = () => {
    this.setState({loading: false});
    this.props.navigation.navigate('ListDownloads');
  }

  storeData = async (value) => {
    try {
      //Guardar Objeto
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(value.key, jsonValue);
      console.log('Key: ' + value.key);
      console.log('Se guardo el valor en la Store');

      this._navigate();

    } catch (e) {
      console.log('Error al guardar: ', e);
    }
  };

  showItem = async (id, xtype) => {
    this.setState({showBtn: true, loading: true});
    const youtube = 'http://www.youtube.com/watch?v=';
    const itemInfo = await ytdl.getInfo(youtube + id);
    console.log('INFO found!', itemInfo);

    let audioonly = ytdl.filterFormats(itemInfo.formats, 'audioonly');
    //console.log('audioonly: ', audioonly);
    let song = audioonly.filter(audio => audio.audioBitrate === 64).map((audio) => audio);
    //console.log('song: ', song);

    let videowithAudio = ytdl.filterFormats(itemInfo.formats, 'audioandvideo');
    //console.log('audioandvideo: ', videowithAudio);

    let elementeSrc;
    let elementSize;
    xtype === 'mp3' ? (
      elementeSrc = song[0].url,
      elementSize = song[0].contentLength
        ) : (
      elementeSrc = videowithAudio[0].url,
      elementSize = videowithAudio[0].contentLength
    );

    this.setState({
      obj: {
        key: moment().locale('es-mx').format(),
        title: itemInfo.videoDetails.title,
        img: itemInfo.videoDetails.thumbnails[0].url,
        date: moment().locale('es-mx').format('L, h:mm:ss a'),
        src: elementeSrc,
        type: xtype,
        size: elementSize,
      },
    });

    this.storeData(this.state.obj);
  }

  showItemMore = async id => {
    console.log('more');
  }

  searchMore = () => {
    const  apiKey = 'AIzaSyBxJAdyyhLejOIbWLQinq7grj9KfSw-qmQ';  //Llave
    const  keyWord = this.state.keywordTxt;

    const  songList = this.state.songList;
    const  tokenNext = this.state.tokenNext;

    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&pageToken=' + tokenNext + '&q=' + keyWord + '&key=' + apiKey)
      .then(response => response.json())
      .then((response) => {
        console.log('mis resultados con token: ', response);
        this.setState({
          songList: [].concat(songList, response.items),
          btnLoadMore: false,
        });
      })
      .catch((e) => {
        //Error Network
      });
  }

  render() {
    console.log(this.state);
    const { songList, btnLoadMore, loading } = this.state;
    //const { songList, tokenNext } = this.props.route.params;

    return (
      <Fragment>
        <ScrollView style={css.listElements}>
          {songList.map((item, index) => (
              <List.Accordion
                  key={index}
                  title={item.snippet.title}
                  titleStyle={css.titleList}
                  titleNumberOfLines={2}
                  //item.id.videoId
                  left={props =>
                    <View style={css.iconElementBox}>
                      <Image style={css.iconElementImg} source={{ uri: item.snippet.thumbnails.medium.url }} />
                    </View>
                  }
                >
                  <View style={css.selectFormat}>
                      <Button
                        style={css.btnMp4}
                        icon="play"
                        mode="contained"
                        onPress={() => this.showItem(item.id.videoId, 'mp4')}
                        labelStyle={css.labelBtnFormat}>
                        MP4
                      </Button>
                      <Button
                        style={css.btnMp3}
                        icon="music"
                        mode="contained"
                        onPress={() => this.showItem(item.id.videoId, 'mp3')}
                        labelStyle={css.labelBtnFormat}>
                        MP3
                      </Button>
                      <Button
                        style={css.btnMore}
                        mode="contained"
                        onPress={() => this.showItem(item.id.videoId)}
                        labelStyle={css.labelBtnMore}>
                          +
                      </Button>
                  </View>
              </List.Accordion>
           ))}
           {btnLoadMore ?
              <Button
              style={css.searchMore}
              mode="contained"
              onPress={() => this.searchMore()}
              labelStyle={css.labelSearchMore}>
                Cargar Más
              </Button>
            : null }
        </ScrollView>
        {loading ? (
          <Portal>
            <Modal style={css.loadingModal} visible={true}>
              <ActivityIndicator animating={true} size="large"/>
            </Modal>
          </Portal>
            ) : null
        }
        </Fragment>
    );
  }
}

export default withTheme(ListSongs);
