<table width="100%">
    <tr>
        <td align="left" width="100%" colspan="2">
            <strong>WPImgOptimizer</strong><br />
            Dev Workflow for WordPress image optimization.
        </td>
    </tr>
    <tr>
        <td>
            A FOSS (Free & Open Source Software) project. Maintained by <a href="https://github.com/ahmadawais">@AhmadAwais</a>.
        </td>
        <td align="center">
            <a href="https://AhmadAwais.com/">
                <img src="https://i.imgur.com/Asg4d3k.png" width="100" />
            </a>
        </td>
    </tr>
</table>

Dev Workflow for WordPress image optimization.

# 🎗 WP Image Optimizer — Getting Set up
Let's get you setup for an automated dev-workflow for WordPress image optimization.

## → STEP #1: Install NodeJS & NPM
Make sure you have node installed. If not [download and install node](https://nodejs.org/en/download/).
After installing NodeJS you can verify the install of both NodeJS and Node Package Manager by typing the following commands. This step needs to be followed only once i.e. if you don't have NodeJS installed. No need to repeat it ever again.

```bash
node -v
# v7.10.0

npm -v
# 4.2.0
```

## → Step #2. Download [`package.json`](https://git.io/wpimgoptpkg) & [`gulpfile.js`](https://git.io/wpimgoptgf)

Download [`package.json`](https://git.io/wpimgoptpkg) & [`gulpfile.js`](https://git.io/wpimgoptgf) files inside the root folder of your WordPress plugin or WordPress theme
If you have cURL installed then you can run the following command to download it in one go (just make sure you open the root folder of your WordPress plugin or WordPress theme and download [`package.json`](https://git.io/vHLHg) file in it).

```bash
curl -L 'https://git.io/wpimgoptpkg' -o package.json && curl -L 'https://git.io/wpimgoptgf' -o gulpfile.js
```

## → STEP #3: Installing Node Dependencies

We are in the root folder of our WordPress plugin or WordPress theme at the moment, right where you downloaded the [`package.json`](https://git.io/wpimgoptpkg) & [`gulpfile.js`](https://git.io/wpimgoptgf) files — let's install the Node Dependencies. In the terminal run this command and wait for it to download all the NodeJS dependencies. It's a one time process and can take about a minute depending on the internet speed of your connection.

```bash
# For MAC OS X run the following command with super user
sudo npm install

# For Linux run the following command
npm install
```

## → STEP #4: Configure [`gulpfile.js`](https://git.io/wpimgoptgf)

Since this is an image optimization workflow. You need to configure paths to two directories. 

1. Image source or raw images directory
2. Image destination or optimized image directory

These two can be configured by editing the [`gulpfile.js`](https://git.io/wpimgoptgf). Do NOT change the variable names, just the values and the types of images you want to optimize.

```js
var imagesSRC         = './assets/img/raw/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,gif,GIF,svg,SVG}'; // Source folder of images which should be optimized.
var imagesDestination = './assets/img/opt/'; // Destination folder of optimized images. Must be different from the imagesSRC folder.

```

In default case, here's the structure
- Image source directory — `./assets/img/raw/`
- Image destination directory — `./assets/img/opt/`

> NOTE: That currently this little app has following file structure
```bash
    ├── assets
    |  └── img
    |     ├── opt
    |     |  └── cf7c.png
    |     └── raw
    |        └── cf7c.png
    ├── gulpfile.js
    └── package.json
```

## → STEP #5: Run Image Optimization Task

All that's left now is for you to run the image optimization task in the root folder of your WP project — where you downloaded the [`gulpfile.js`](https://git.io/wpimgoptgf) file.

```bash
# Run Image Optimization Task.
gulp imgopt
```
![Run](https://i.imgur.com/pu3z6cf.png)

## → STEP #6: Share!

Yup, there are no more steps. Just share it with your friends. Or [Click to Tweet about it](https://twitter.com/home?status=%F0%9F%94%A5%20WPImgOpt%3A%20A%20%23Gulp%20Dev-Workflow%20automation%20by%20%40MrAhmadAwais%20%26%20%40MaedahBatool%20to%20optimize%20your%20%23WordPress%20images%20%E2%86%92%20ahmda.ws/WPImgOpt).

## ⚡️ Contribute
Feel free to contribute. PR's are welcomed.

## 📣 Changelog

### Version 1.0.0 

- First version
- Image optimization for PNG, JPG, JPEG, SVG

## 🗞 License
Released under GPL v2 License.
Copyright [Ahmad Awais](https://AhmadAwais.com/).

---

🙌 — If 500 people [signup here](http://eepurl.com/cLwjeH), I will build a video series for this.
