const Generator = require('yeoman-generator')
const path = require('path')
// const fs = require('fs')
const templatePath = require('../templatePath')
module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }
    ]).then(answers => {
      this.answers = answers
    })
  }

  writing() {
    const templates = templatePath(path.resolve(__dirname, './app/templates'))
    // const templates = [
    //   'README.md',
    //   'babel.config.js',
    //   'package.json',
    //   'public/favicon.ico',
    //   'public/index.html',
    //   'src/App.vue',
    //   'src/assets/logo.png',
    //   'src/components/HelloWorld.vue',
    //   'src/main.js',
    //   'yarn.lock'
    // ]
    templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
    // console.log('--templates--',path.resolve(__dirname, './app/templates'))
    // let files = templatePath(path.resolve(__dirname, './app/templates'))//fs.readdirSync('./templates');
    // console.log(files); //返回的是一个数组
  }
}