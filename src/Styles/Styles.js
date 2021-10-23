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
    width: 100,
    height: 48,
    margin: 5,
  },
  btnMp3: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 48,
    margin: 5,
    backgroundColor: '#E8E8E8', // Botón gris
  },
  btnMore: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 48,
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
  titleListDownloads: {
    fontSize: 14,
    letterSpacing: -1 / 2,
    lineHeight: 15,
  },
  statusStyle: {
    fontSize: 11,
    letterSpacing: 1,
    //lineHeight: 15,
    color: appYellow,
  },
  progressSize: {
    //width: 100,
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
  },
  currentBoxLeft: {
    width: 50,
    height: 70,
    overflow: 'hidden',
  },
  currentBoxRight: {
    //width: 'fill',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 8,
    marginRight: 8,
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
});

export default css;
