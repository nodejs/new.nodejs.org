'use strict'

const semver = require('semver')

const map = (release) => release && {
  node: release.version,
  nodeMajor: `v${semver.major(release.version)}.x`,
  npm: release.npm,
  v8: release.v8,
  openssl: release.openssl
}

// might be undefined if the current release line has not been cut yet
exports.current = (releases) => {
  const ltsVersion = exports.lts(releases).node
  const match = releases.find((release) => !release.lts && semver.gte(release.version, ltsVersion))
  return map(match)
}

// calculates the next upcoming major release version when the current release line
// has not yet been cut
exports.upcomingCurrent = (releases) => {
  const isCurrentReleased = exports.current(releases) !== undefined
  if (isCurrentReleased) {
    return undefined
  }

  const ltsMajor = semver.major(exports.lts(releases).node)
  const upcomingMajor = ltsMajor + 1
  const nextCurrentVersion = `v${upcomingMajor}.0.0`

  return {
    node: nextCurrentVersion,
    nodeMajor: `v${upcomingMajor}.x`
  }
}

exports.lts = (releases) => map(releases.find((release) => release.lts))
