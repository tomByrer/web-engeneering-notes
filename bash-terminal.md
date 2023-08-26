## bash
```bash
### MaKe directory then CD
#### todo: recursion
mkcd () {
  mkdir "$1"
  cd "$1"
}
### GIT Clone then Code
gitcc () {
  echo "GIT Clone then Code $1"
  git clone $1
  reponame="https://github.com/[a-zA-Z0-9._-]+/([a-zA-Z0-9._-]+).git$"
  [[ $1 =~ $reponame ]]
  wait # for git
  cd ${BASH_REMATCH[1]}
  code .
}
### create png icons from SVG file for Chrome Extention
iconschrome () {
  inkscape -w 16 -h 16 -o icon16.png icon128.svg
  inkscape -w 32 -h 32 -o icon32.png icon128.svg
  inkscape -w 48 -h 48 -o icon48.png icon128.svg
  inkscape -w 128 -h 128 -o icon128.png icon128.svg
  inkscape -w 16 -h 16 -o icon16_disabled.png icon128_disabled.svg
  inkscape -w 32 -h 32 -o icon32_disabled.png icon128_disabled.svg
  inkscape -w 48 -h 48 -o icon48_disabled.png icon128_disabled.svg
  wait
  optipng *.png
}
```
