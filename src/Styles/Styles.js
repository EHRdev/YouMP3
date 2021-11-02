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
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
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
    width: 100,
    height: 50,
    margin: 5,
  },
  btnMp3: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
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
  loadingModal: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  //--- Dialog in ListSong ---
  dialogContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  dialogTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'justify',
    lineHeight: 15,
  },
  dialogRaw: {
    flexDirection: 'row',
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
    backgroundColor: '#E8E8E8', // Botón gris
  },
  dialogTxtBtn: {
    fontSize: 16,
    letterSpacing: 1,
  },
  surfaceBoxCross: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 50,
    height: 50,
    elevation: 4,
    margin: 5,
    borderRadius: 4,
  },
  surfaceBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 50,
    height: 50,
    elevation: 4,
    margin: 5,
    borderRadius: 4,
  },
  surfaceTxt: {
    fontSize: 10,
    letterSpacing: -1 / 2,
    textAlign: 'center',
  },
  surfaceNum: {
    fontSize: 11,
    textAlign: 'center',
    color: appLightRed,
    fontWeight: 'bold',
    //margin: 0,
  },
  surfaceNum2: {
    fontSize: 13,
    textAlign: 'center',
    color: appYellow,
    margin: 0,
    marginRight: 2,
    letterSpacing: -1,
  },
  surfaceNum3: {
    fontSize: 13,
    textAlign: 'center',
    color: '#4CCEFF',
    margin: 0,
    letterSpacing: -1,
  },
  surfaceSub: {
    fontSize: 11,
    textAlign: 'center',
  },
  txtQuality: {
    fontSize: 13,
    color: 'red',
  },

  //------------------------ ListDownloads Screen
  listDownloads: {
    height: 80,
  },
  iconDownloadImg: {
    width: 50,
    height: 70,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  labelOpen: {
    fontSize: 7,
  },
  titleListDownloads: {
    fontSize: 14,
    letterSpacing: -1,
    //lineHeight: 15,
  },
  statusStyle: {
    textAlign: 'center',
    fontSize: 10,
    letterSpacing: 2,
    //lineHeight: 15,
    color: appYellow,
  },
  descListDownloads: {
    fontSize: 10,
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
    width: windowWidth,
    flexDirection: 'row',
    marginLeft: 8,
    marginRight: 20,
  },
  currentBoxLeft: {
    width: 50,
    height: 70,
    overflow: 'hidden',
  },
  currentBoxRight: {
    width: '80%', // Checar en iOS
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 8,
    marginRight: 20,
  },
  //------------------------ SnackBar
  snackStyle: {
    margin: 5,
    backgroundColor: appYellow,
    width: windowWidth - 90,
    opacity: 0.8,
  },
  txtSnack: {
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: 'black',
  },

  //------------------------------------------

  txtLoader: {
    fontSize: 12,
    textAlign: 'center',
    color: '#F3F3F3',
    margin: 5,
    letterSpacing: 2,
  },



  //------------------------ News, Uncategorized
  scroll: {
    marginTop: 5,
    marginBottom: 10,
    height: 60,
  },
  centerBox: {
    resizeMode: 'cover',
    alignSelf: 'center',
  },
});

export default css;
