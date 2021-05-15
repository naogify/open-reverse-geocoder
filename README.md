## タイルのビルド方法

1. まず、[国土数値情報](https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03-v2_4.html#prefecture00)から行政区域データの最新版をダウンロードする。
2. ダウンロードしたファイルを解答したあとで、 `ogr2ogr -f GeoJSON prefs.json N03-20_200101.shp` のようなコマンドで GeoJSON に変換する。
3. 上のコマンドで生成されたファイル `prefs.json` を `data/` ディレクトリにコピー。
4. 以降、以下のコマンドを順番に実行。

```
$ wget https://nlftp.mlit.go.jp/ksj/gml/data/N03/N03-2020/N03-20200101_GML.zip
$ unzip ./N03-20200101_GML.zip
* ogr2ogr -f GeoJSON admins.json N03-20_200101.shp
$ NODE_OPTIONS=--max_old_space_size=4096 node bin/optimize-geojson.js > _admins.json
$ tippecanoe --no-tile-compression --maximum-zoom=10 -l japanese-admins -o admins.mbtiles _admins.json --force
$ rm -fr docs/tiles && mb-util --image_format=pbf admins.mbtiles docs/tiles
```