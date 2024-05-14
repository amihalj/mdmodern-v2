# README #

Mihalj-ent website


### Setup

```
git fetch
git checkout hugo
```

After that setup your local repo. This will remove master branch setup your repo to use master as a public folder.

```
./setup.sh
```

### Install prerequisites

#### NVM

Node version manager is a tool that allows us to use different nodejs versions on our host machine.

To use current setup we will require `node 10.15.0`

```
nvm install 10.15.0
nvm use 10.15.0
```

After that install required npm packages

```
npm install
```

#### Gulp

Gulp is a task runner, we will use it to invoke image processor, sass processor etc.

```
npm install -g gulp

npm rebuild node-sass
```

After installing gulp globally (this will install gulp in your node 10.15.0 global modules) run to verify:

```
gulp
```

#### Image Magick

Image Magick is an image processor, it will be used to resize/crop pictures to certain dimansions required for responsive layout.

```
sudo apt update

sudo apt install imagemagick
```

to verify your installation please run

```
gulp img-resize
```

#### Docker-compose

```
sudo apt install docker-compose
```

### Make changes



### Run locally

`docker-compose up`

[See web on localhost](http://localhost:18989)


### Troubleshooting

1. __ReferenceError: primordials is not defined__
most probably 
wrong node version is used so switch to correct one with `nvm use 10.15.0`
