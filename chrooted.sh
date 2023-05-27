#!/usr/bin/env bash
echo "Chrooted in the new system, running as $(whoami)"

# User setup
useradd -mG wheel fifthgnu
usermod -c "Password // \"fifthgnu\"" fifthgnu
usermod -p $(echo "fifthgnu" | openssl passwd -6 -stdin) fifthgnu
usermod -p $(echo "fifthgnu" | openssl passwd -6 -stdin) root
chsh -s /usr/bin/zsh fifthgnu

# Desktop icon for ouroboros's GUI
mkdir -p /home/fifthgnu/Desktop
cp /usr/share/applications/al.fifthgnu.ouroborosgui.desktop /home/fifthgnu/Desktop/Install.desktop

# Disable auto screen lock
mkdir -p /home/fifthgnu/.config/autostart
echo "[Desktop Entry]
Name=Deactive lock screen
Comment=Deactive the gnome lock screen in the live session
Type=Application
Icon=nautilus
Exec=sh -c \"gsettings set org.gnome.desktop.screensaver lock-enabled false\"" > /home/fifthgnu/.config/autostart/no-lock-screen.desktop

# Set default session to Onyx
echo "[User]
Session=onyx
Icon=/var/lib/AccountsService/icons/fifthgnu
SystemAccount=false" > /var/lib/AccountsService/users/fifthgnu

# ouroboros-GUI Autostart
cp /usr/share/applications/al.fifthgnu.ouroborosgui.desktop /home/fifthgnu/.config/autostart

# Permissions for fifthgnu user
chown -R fifthgnu:fifthgnu /home/fifthgnu/
chmod +x /home/fifthgnu/.config/autostart/*.desktop

# Services
systemctl enable vmtoolsd
systemctl enable vmware-vmblock-fuse
systemctl enable NetworkManager
systemctl enable reflector
systemctl enable gdm

# Mirrorlist
reflector > /etc/pacman.d/mirrorlist

# Hostname
echo "fifthgnu-live" > /etc/hostname

# Locale
echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen
echo "LANG=en_US.UTF-8" > /etc/locale.conf
locale-gen

echo "Configured the system. Exiting chroot."
