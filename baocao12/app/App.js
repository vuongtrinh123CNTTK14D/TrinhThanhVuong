import React, { Component } from 'react';
import Player from './Player';

export const TRACKS = [
  {
    title: 'em gi oi',
    artist: 'jack',
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/baocao12-8fc6a.appspot.com/o/2222.jpg?alt=media&token=656b8a8a-fbe0-42ca-959b-75b4e7e6d69b",
    audioUrl: "https://firebasestorage.googleapis.com/v0/b/baocao12-8fc6a.appspot.com/o/Em-Gi-Oi-Jack-K-ICM.mp3?alt=media&token=abf501d6-6b70-439b-862a-9fdaa965fbc3",
  },
  {
    title: 'buon lam em oi',
    artist: 'trinhdinhquang',
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/baocao12-8fc6a.appspot.com/o/2322.jpg?alt=media&token=13380b9d-e9b9-4211-a43e-6ecdd2956d97",
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/baocao12-8fc6a.appspot.com/o/Buon-Lam-Em-Oi-Trinh-Dinh-Quang.mp3?alt=media&token=25aad45a-c1fd-4a51-995d-6269daad0986',
  },
  {
    title: 'buoc qua doi nhau',
    artist: 'le bao binh',
    albumArtUrl: 'https://firebasestorage.googleapis.com/v0/b/baocao12-8fc6a.appspot.com/o/2345.jpg?alt=media&token=08b81c31-45d0-4b3d-b5d3-cef45f890003',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/baocao12-8fc6a.appspot.com/o/Buoc-Qua-Doi-Nhau-Le-Bao-Binh.mp3?alt=media&token=35b4ad9d-9c7f-444f-b5dc-7e5b225bea87',
  },
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}


