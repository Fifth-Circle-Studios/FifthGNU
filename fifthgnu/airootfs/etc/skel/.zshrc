PROMPT="%n@%m %~ %# "

credentials() {
  echo "Live Credentials -"
  echo "fifthgnu: fifthgnu // root: fifthgnu"
  echo
}

main() {
  clear
  neofetch
  credentials
  cowsay \
    "Don't forget to set up Wi-Fi in the Settings app if required!"
}

main
