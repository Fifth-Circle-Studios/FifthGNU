<p align="center">
  <a href="https://getcryst.al">
    <img src="https://getcryst.al/site/svg/crystal-logo.svg" alt="Logo" width="150" height="150">
  </a>
</p>
<p align="center"> 
<h2 align="center"> Crystal ISO </h2>
</p>

<p align="center"> Build or download the Arch-based Crystal Linux iso. </p>

## Dependencies:
* `pacman-contrib`
* `archiso`
* `squashfs-tools`
* [`crystal-mirrorlist`](https://git.getcryst.al/crystal/pkgbuilds/crystal-mirrorlist)

## How to Build:
You will have to use Arch or Arch-Based distros to build this ISO File.
* Install Dependencies
* Go to the project folder
* Run `./build.sh --build-iso` to build an iso image
* Or Run `./build.sh --build-bootstrap` to build a rootfs tarball    
### How to build inside of Docker or Podman:
* The container **MUST** be ran as root to build. 
  * Other than needing to be ran as root, it should function correctly. You may need to install a few more dependencies aside from the ones listed here.
  
  To enter a distrobox container as root, run `distrobox enter --root boxnamehere -- bash` 
  
  (the `-- bash` is to ensure the container opens properly. Install your host shell afterwards to get it to open using your host shell.)
