# [nodejs.org](https://nodejs.org/)

[![Build Status](https://img.shields.io/travis/nodejs/nodejs.org/master.svg)](http://travis-ci.org/nodejs/nodejs.org)
[![Dependency Status](https://img.shields.io/david/nodejs/nodejs.org.svg)](https://david-dm.org/nodejs/nodejs.org)
[![MIT Licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## What is this repo?

[nodejs.org](https://nodejs.org) by the [Node.js Foundation](https://nodejs.org/foundation/) builds on the merged community's past website projects to form a self-publishing, community-managed version of the previous site.

On a technical level inspiration has been taken from the `iojs.org` repo while design and content has been migrated from the old [nodejs.org repo](https://github.com/nodejs/nodejs.org-archive). These technical changes have helped to facilitate community involvement and empower the foundation's internationalization communities to provide alternative website content in other languages.

This repo's issues section has become the primary home for the Website WG's coordination efforts (meeting planning, minute approval, etc.)

## Contributing

Please contribute! There's plenty of [good first contributions](https://github.com/nodejs/nodejs.org/labels/good%20first%20contribution) to do.

```bash
$ git clone https://github.com/nodejs/nodejs.org.git
$ cd nodejs.org
$ npm install
$ npm run serve
```

This will start the development server on http://localhost:8080/en/ and should reload automatically when you make changes but it's all just code and no code is perfect so sometimes you may need to restart it :)

Note: You'll need Node.js v4 or newer as the build system uses some native ES2015 features.

### Layout

* Page templates are in `/layouts`
* Global styles are in `/layouts/css`
* Global static files are in `/static`
* All content and localization specific styles are in `/locale`
 * Initial development usually happens in English: `/locale/en`
 * `/locale/{{locale}}/site.json` is where global localization information lives.
 * All content is in Markdown and is per locale.
  * The top of each Markdown file is a block of YAML for page specific localization information that is passed to various templates.
  * The bulk of the Markdown content for each page is referenced as `{{{content}}}` in the corresponding template.

### Deployment

Full set up is in https://github.com/nodejs/build/tree/master/setup/www minus secrets and certificates. The webhook is setup on GitHub for this project and talks to a small Node server on the host which does the work. See the [github-webhook](https://github.com/rvagg/github-webhook) package for this.

## Governance and Current Members

All of the Node.js Foundation websites, including this repo, are jointly governed by the **Website Working Group**. See [GOVERNANCE.md](./GOVERNANCE.md) to learn more about the group's structure and [CONTRIBUTING.md](./CONTRIBUTING.md) for guidance about the expectations for all contributors to this project.

### Website Working Group Members

- Frederic Hemberger ([fhemberger](https://github.com/fhemberger)): [@fhemberger](https://twitter.com/fhemberger), `mail``@``frederic-hemberger.de`
- Mikeal Rogers ([mikeal](https://github.com/mikeal)): [@mikeal](https://twitter.com/mikeal), `mikeal.rogers``@``gmail.com`
- Phillip Johnsen ([phillipj](https://github.com/phillipj)), `johphi``@``gmail.com`
- Rod Vagg ([rvagg](https://github.com/rvagg)): [@rvagg](https://twitter.com/rvagg), `rod``@``vagg.org`
- Trent Oswald ([therebelrobot](https://github.com/therebelrobot)): [@therebelrobot](https://twitter.com/therebelrobot), `trentoswald``@``therebelrobot.com`

### Website Working Group Collaborators

- Andy Gout ([andygout](https://github.com/andygout))
- Austin Winstanley ([AustinWinstanley](https://github.com/AustinWinstanley))
- Benget Nata ([bentinata](https://github.com/bentinata))
- &! (bitandbang) ([bnb](https://github.com/bnb))
- Divjot Singh ([bogas04](https://github.com/bogas04))
- Bryce Baril ([brycebaril](https://github.com/brycebaril))
- Csaba Palfi ([csabapalfi](https://github.com/csabapalfi))
- Bruno Heridet ([Delapouite](https://github.com/Delapouite))
- Steven Sinatra ([diagramatics](https://github.com/diagramatics))
- Evan Lucas ([evanlucas](https://github.com/evanlucas))
- Fábio Santos ([fabiosantoscode](https://github.com/fabiosantoscode))
- Jeremiah Senkpiel ([Fishrock123](https://github.com/Fishrock123))
- Wyatt Preul ([geek](https://github.com/geek))
- Jona ([59](https://github.com/59))
- Charlie Robbins ([indexzero](https://github.com/indexzero))
- Minwoo Jung ([JungMinu](https://github.com/JungMinu))
- Daniel Levy ([justsml](https://github.com/justsml))
- Kohei TAKATA ([kohei-takata](https://github.com/kohei-takata))
- Luigi Pinca ([lpinca](https://github.com/lpinca))
- marocchino ([marocchino](https://github.com/marocchino))
- Massimiliano Mura ([MassimilianoMura](https://github.com/MassimilianoMura))
- Matthew Loring ([matthewloring](https://github.com/matthewloring))
- Mike Dolan ([mkdolan](https://github.com/mkdolan))
- Kiffie Liversage ([mrkiffie](https://github.com/mrkiffie))
- Vladimir Varankin ([narqo](https://github.com/narqo))
- Patrick Heneise ([PatrickHeneise](https://github.com/PatrickHeneise))
- Paul Grock ([paulgrock](https://github.com/paulgrock))
- rnsloan ([rnsloan](https://github.com/rnsloan))
- Robert Kowalski ([robertkowalski](https://github.com/robertkowalski))
- Seth Thompson ([s3ththompson](https://github.com/s3ththompson))
- silverwind ([silverwind](https://github.com/silverwind))
- Sean Ouimet ([snostorm](https://github.com/snostorm))
- Steven R. Loomis ([srl295](https://github.com/srl295))
- Steve Mao ([stevemao](https://github.com/stevemao))
- Michaël Zasso ([targos](https://github.com/targos))
- Sakthipriyan Vairamani ([thefourtheye](https://github.com/thefourtheye))
- Anton Wilhelm ([timaschew](https://github.com/timaschew))
- Thomas Jensen ([tjconcept](https://github.com/tjconcept))
- Rich Trott ([Trott](https://github.com/Trott))
- wonderdogone ([wonderdogone](https://github.com/wonderdogone))
- Xcat Liu ([xcatliu](https://github.com/xcatliu))
- Francisco Baio Dias ([xicombd](https://github.com/xicombd))
- Yosuke Furukawa ([yosuke-furukawa](https://github.com/yosuke-furukawa))
- Chayoung You ([yous](https://github.com/yous))
- Zeke Sikelianos ([zeke](https://github.com/zeke))

testing nodejs-github-bot
5
