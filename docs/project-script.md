# Project Script

## package.json

```sh
scripts
|
+-- dev                      # 開発環境の実行
|
+-- test                    # Unit Test
|
+-- coverage    # Unit Test (Coverage)
|
+-- test:e2e          # E2E Test
|
+-- test:e2e:update             # E2E Test & Update Snapshots 最新のSnapshotsを作成する際に使用
|
+-- storybook               # Storybook の起動
|
+-- build-storybook         # Storybook のビルドのみを実行
|
+-- snapshot            # Sorycap を使用した VRT(Visual Regression Testing) 用の Snapshot の作成
|
+-- vrt            # VRT(Visual Regression Testing) の実行
|                  # ※事前に snapshot を実行しておくこと
+-- vrt:ok              # vrtsnapshot 実行時に作成された snapshot(__actual__) の内容を最新の snapshot(__current__) と差し替える
```
