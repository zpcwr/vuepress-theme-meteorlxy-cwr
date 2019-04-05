const path = require('path')
const personInfo = require('./personInfo')
const header = require('./header')
const footer = require('./footer')
const nav = require('./nav')
const gittalk = require('./gittalk')
const reward = require('./reward')
const aPlayer = require('./aPlayer')

const themeConfig = {
  // lang: require(path.resolve(__dirname, '../../lib/langs/en-US')),
  lang: require(path.resolve(__dirname, '../../../../lib/langs/zh-CN')),
  // lang: require(path.resolve(__dirname, '../../lib/langs/pt-BR')),
  lastUpdated: true,

  personalInfo: personInfo,

  header: header,

  footer: footer,

  nav: nav,

  comments: gittalk,

  reward: reward,

  aPlayer: aPlayer
}
module.exports = themeConfig
