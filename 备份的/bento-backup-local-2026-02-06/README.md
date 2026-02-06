# Bento 备份（本地图片版）

此文件夹是在原始备份（`备份的/`）基础上生成的“本地图片版”副本，用于把**已从 Bento 官方导出工具拿到的图片**替换为本地文件路径，便于后续离线还原/迁移。

生成日期：2026-02-06

## 做了什么

- `bento-backup.md`：将已导出的 5 张图片的在线 URL 替换为本地路径（`assets/...`），并更新了「图片资源清单」对应条目。
- `bento-raw-data.json`：将相同 5 张图片的 `url` 字段替换为本地路径（`assets/...`）。
- `assets/download-manifest.json`：将相同 5 张图片标记为 `LOCAL`，并把对应地址改为本地路径。
- `assets/`：新增这 5 张图片的本地文件（从 `备份的/bento-data-clx1nr6yd06oco20162ez35th/images` 复制而来，并按备份清单重命名）。

## 已本地化的图片（5 张）

- `assets/card-image-1-zhang-da-zui.png`
- `assets/card-image-2-photo.jpeg`
- `assets/card-image-3-photo.jpeg`
- `assets/card-image-4-vueconf-vapor-team.jpeg`
- `assets/card-image-5-github-contrib.png`

## 仍然是远程链接的图片

除上面 5 张外，其余图片（头像、OG 默认图、以及各链接卡片的 OG 图片覆盖等）仍保持原始远程 URL；你后续如果补齐图片文件，我也可以继续把剩余条目替换为本地路径。
