import * as React from 'react';
import { render } from 'react-dom';

const Main = (
  <h1>Markdown Editor</h1>
);

render(Main, document.getElementById('app'));

// npm run buildをすると
// srcファイルを元に、dist配下に配信用のファイルを生成する => 本番環境構築

// npm run serveをすると
// distは使われず、src内のファイルを利用し開発環境が立ち上げる