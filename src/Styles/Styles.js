/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {blue100} from 'react-native-paper/lib/typescript/styles/colors';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const appRed = '#C72D2D';
export const appNavy = '#C1083D';
export const appLightRed = '#EC4848';
export const appDark = '#121212';
export const appYellow = '#ffd900';

//------------------------ General Colors

export const colorSpinner = '#B32525';
export const colorSelection = '#414141';
export const basicYellow = 'yellow';

const css = StyleSheet.create({
  //------------------------ Music Screen
  container: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  frontLogo: {
    width: 350,
    height: 230,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  inputCustom: {
    height: 80,
    fontSize: 16,
  },
  actionsCustom: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  searchBtn: {
    width: '47%',
    height: 65,
    margin: 8,
    justifyContent: 'center',
  },
  labelSearchBtn: {
    fontSize: 16,
    letterSpacing: 1,
  },

  //------------------------ ListSongs Screen
  listElements: {

  },
  iconElementBox: {
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
    overflow: 'hidden',
  },
  iconElementImg: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  titleList: {
    fontSize: 13,
    letterSpacing: -1 / 2,
  },
  btnFormat: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    margin: 5,
    backgroundColor: 'red',
  },
  accordeonIcon: {
    width: 15,
    height: 5,
  },
  selectFormat: {
    flexDirection: 'row',
  },
  labelBtnFormat: {
    fontSize: 16,
  },
  labelBtnMore: {
    fontSize: 22,
  },
  btnMp4: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 50,
    margin: 5,
  },
  btnMp3: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 50,
    margin: 5,
    backgroundColor: '#E8E8E8', // Botón gris
  },
  btnMore: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    margin: 5,
    backgroundColor: '#6FECB7', // Botón verde
  },
  searchMore: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  labelSearchMore: {
    fontSize: 15,
  },



  //------------------------ ListDownloads Screen
  listDownloads: {
    height: 80,

  },
  iconDownload: {
    width: 50,
    height: 70,
    overflow: 'hidden',
  },
  iconDownloadImg: {
    width: 50,
    height: 70,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  titleListDownloads: {
    fontSize: 14,
    letterSpacing: -1 / 2,
  },
  descListDownloads: {
    fontSize: 12,
    letterSpacing: -1 / 2,
  },
  fab: {
    backgroundColor: appYellow,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  currentBox: {
    flexDirection: 'row',
    marginLeft: 7,
  },
  currentBoxRight: {
    flexDirection: 'column',
    marginLeft: 7,
  },



  //------------------------------------------

  txtLoader: {
    fontSize: 12,
    textAlign: 'center',
    color: '#F3F3F3',
    margin: 5,
    letterSpacing: 2,
  },























  highlight: {
    fontSize: 12,
    textAlign: 'center',
    color: '#48EC59',
    margin: 5,
    letterSpacing: 2,
  },

  //------------------------ Card Main
  cardView: {
    width: 300,
    height: 300,
    maxWidth: 450,
    maxHeight: 650,
    margin: 20,
  },
  imgBackground: {
    height: 190,
  },
  //------------------------ Wall Info
  wallInfo: {
  },
  titleTxt: {
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0,
    textAlign: 'justify',
    lineHeight: 15,
  },
  subWall: {
    marginTop: '-3%',
  },
  counterWithDate: {
    fontSize: 9,
  },
  iconLikes: {
    margin: '-2%',
  },
//------------------------ Surface Likes Container
  itemsBarContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 7,
  },
  itemsBar: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  itemsBar2: {
    width: 300,
    height: 50,
  },
  itemsBarTxt: {
    fontSize: 10,
    color: '#fff',
  },
//------------------------ Author
  authorBox: {
    flexDirection: 'row',
  },
  avatarPic: {
    margin: 4,
    marginLeft: 12,
    marginRight: 12,
  },
  authorTitleAndSubs: {
    position: 'relative',
    width: 270,
  },
  authorTxt: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  descTxt: {
    fontSize: 10,
    lineHeight: 12,
  },
  subsTxt: {
    fontSize: 8,
    position: 'absolute',
    top: 12,
  },
  //------------------------ Download Zone
  downloadTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 11,
    letterSpacing: 8,
    lineHeight: 20,
    textAlign: 'center',
  },
  downloadTitleBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  //------------------------ Center Forms
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  centerBox: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  //------------------------ Card Footer
  actionsCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listMp4: {
    flexDirection: 'column',
  },
  txtQuality: {
    fontSize: 12,
  },
    //------------------------ Progress Card
  backgroundModal: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  cardProgress: {
    maxWidth: windowWidth,
    height: 120,
    margin: 20,
  },
  cardCover: {
    position: 'relative',
    height: 120,
  },
  progressBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    //justifyContent: 'center',
    //alignItems: 'center',
    position: 'absolute',
    //left: 0,
    //right: 0,
  },
  imgProgress: {
    width: 120,
    height: 120,
    borderRadius: 5,
  },
  viewAnimatable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconAnimatable: {
    fontSize: 14,
    marginTop: 7,
  },
  subtitleProgress: {
    fontSize: 9,
    fontWeight: 'bold',
  },
  progressInfo: {
    marginLeft: 15,
    marginRight: 15,
    width: 170,
    flexDirection: 'column',
  },
  titleProgress: {
    fontSize: 9,
    lineHeight: 12,
    marginTop: 10,
    letterSpacing: -1,
    textAlign: 'justify',
  },
  downloadTitleInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 170,
  },
  statusInfo: {
    flexDirection: 'row',
  },
  statusProgress: {
    fontSize: 10,
    letterSpacing: 2,
  },
  percentProgress: {
    fontSize: 12,
    letterSpacing: 1,
    color: 'yellow',
  },
  locationProgress: {
    width: 280,
    marginTop: 40,
    fontSize: 7,
    lineHeight: 10,
    textAlign: 'center',
    color: 'gray',
  },
  actionsProcess: {
    flexDirection: 'row',
    marginTop: 7,
  },
  txtBtnProgress: {
    fontSize: 16,
    letterSpacing: 1,
  },
  progressStyle: {
    width: 170,
    marginTop: 5,
    height: 13,
    borderRadius: 10,
    opacity: 0.8,
  },
  //------------------------ SnackBar
  snackStyle: {
    margin: 15,
    backgroundColor: '#132D8F',
    opacity: 0.8,
  },
  txtSnack: {
    fontSize: 14,
    letterSpacing: 0,
  },
    //------------------------ Dialog From SnackBar
    dialogTitle: {
      fontSize: 10,
      fontWeight: 'bold',
      letterSpacing: 2,
      textAlign: 'justify',
      lineHeight: 15,
    },
    dialogBtnMP4: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 150,
      height: 50,
      margin: 5,
    },
    dialogBtnMP3: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 150,
      height: 50,
      margin: 5,
      backgroundColor: '#1D65FF', // Botón azul
    },
    dialogTxtBtn: {
      fontSize: 16,
      letterSpacing: 1,
    },
    dialogContent: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
    },
    dialogRaw: {
      flexDirection: 'row',
    },
    surfaceBox: {
      padding: 5,
      width: 50,
      height: 50,
      elevation: 4,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
    },
    surfaceTxt: {
      fontSize: 10,
      textAlign: 'center',
    },
    surfaceNum: {
      fontSize: 10,
      textAlign: 'center',
      color: appLightRed,
      margin: 0,
    },
  //------------------------ News, Uncategorized
  scroll: {
    marginTop: 5,
    marginBottom: 10,
    height: 60,
  },
});

export default css;
