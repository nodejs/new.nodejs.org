import type { Meta as MetaObj, StoryObj } from '@storybook/react';

import Button from '@/components/Common/Button';
import ChangelogModal from '@/components/Downloads/ChangelogModal';
import { githubProfileAvatarUrl } from '@/util/gitHubUtils';

type Story = StoryObj<typeof ChangelogModal>;
type Meta = MetaObj<typeof ChangelogModal>;

const names = [
  'ovflowd',
  'bmuenzenmeyer',
  'AugustinMauroy',
  'HinataKah0',
  'Harkunwar',
  'rodion-arr',
  'mikeesto',
  'bnb',
  'benhalverson',
  'aymen94',
  'shanpriyan',
  'Wai-Dung',
  'manishprivet',
  'araujogui',
  'thefossildev',
];

const Content = (
  <main>
    <h3>Notable Changes</h3>
    <p dir="auto">The following CVEs are fixed in this release:</p>
    <ul dir="auto">
      <li>
        <a
          href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-44487"
          rel="nofollow"
        >
          CVE-2023-44487
        </a>
        : <code>nghttp2</code> Security Release (High)
      </li>
      <li>
        <a
          href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-45143"
          rel="nofollow"
        >
          CVE-2023-45143
        </a>
        : <code>undici</code> Security Release (High)
      </li>
      <li>
        <a
          href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-39332"
          rel="nofollow"
        >
          CVE-2023-39332
        </a>
        : Path traversal through path stored in Uint8Array (High)
      </li>
      <li>
        <a
          href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-39331"
          rel="nofollow"
        >
          CVE-2023-39331
        </a>
        : Permission model improperly protects against path traversal (High)
      </li>
      <li>
        <a
          href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-38552"
          rel="nofollow"
        >
          CVE-2023-38552
        </a>
        : Integrity checks according to policies can be circumvented (Medium)
      </li>
      <li>
        <a
          href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-39333"
          rel="nofollow"
        >
          CVE-2023-39333
        </a>
        : Code injection via WebAssembly export names (Low)
      </li>
    </ul>
    <p dir="auto">
      More detailed information on each of the vulnerabilities can be found in{' '}
      <a href="/nodejs/nodejs.org/blob/main/blog/vulnerability/october-2023-security-releases">
        October 2023 Security Releases
      </a>{' '}
      blog post.
    </p>
    <h3>Commits</h3>
    <ul dir="auto">
      <li>
        [
        <a href="https://github.com/nodejs/node/commit/c86883e844">
          <code>c86883e844</code>
        </a>
        ] - <strong>deps</strong>: update nghttp2 to 1.57.0 (James M Snell){' '}
        <a
          href="https://github.com/nodejs/node/pull/50121"
          data-hovercard-type="pull_request"
          data-hovercard-url="/nodejs/node/pull/50121/hovercard"
        >
          #50121
        </a>
      </li>
      <li>
        [
        <a href="https://github.com/nodejs/node/commit/2860631359">
          <code>2860631359</code>
        </a>
        ] - <strong>deps</strong>: update undici to v5.26.3 (Matteo Collina){' '}
        <a
          href="https://github.com/nodejs/node/pull/50153"
          data-hovercard-type="pull_request"
          data-hovercard-url="/nodejs/node/pull/50153/hovercard"
        >
          #50153
        </a>
      </li>
      <li>
        [
        <a href="https://github.com/nodejs/node/commit/cd37838bf8">
          <code>cd37838bf8</code>
        </a>
        ] - <strong>lib</strong>: let deps require <code>node</code> prefixed
        modules (Matthew Aitken){' '}
        <a
          href="https://github.com/nodejs/node/pull/50047"
          data-hovercard-type="pull_request"
          data-hovercard-url="/nodejs/node/pull/50047/hovercard"
        >
          #50047
        </a>
      </li>
      <li>
        [
        <a href="https://github.com/nodejs/node/commit/f5c90b2951">
          <code>f5c90b2951</code>
        </a>
        ] - <strong>module</strong>: fix code injection through export names
        (Tobias Nießen){' '}
        <a href="https://github.com/nodejs-private/node-private/pull/461">
          nodejs-private/node-private#461
        </a>
      </li>
      <li>
        [
        <a href="https://github.com/nodejs/node/commit/fa5dae1944">
          <code>fa5dae1944</code>
        </a>
        ] - <strong>permission</strong>: fix Uint8Array path traversal (Tobias
        Nießen){' '}
        <a href="https://github.com/nodejs-private/node-private/pull/456">
          nodejs-private/node-private#456
        </a>
      </li>
      <li>
        [
        <a href="https://github.com/nodejs/node/commit/cd35275111">
          <code>cd35275111</code>
        </a>
        ] - <strong>permission</strong>: improve path traversal protection
        (Tobias Nießen){' '}
        <a href="https://github.com/nodejs-private/node-private/pull/456">
          nodejs-private/node-private#456
        </a>
      </li>
      <li>
        [
        <a href="https://github.com/nodejs/node/commit/a4cb7fc7c0">
          <code>a4cb7fc7c0</code>
        </a>
        ] - <strong>policy</strong>: use tamper-proof integrity check function
        (Tobias Nießen){' '}
        <a href="https://github.com/nodejs-private/node-private/pull/462">
          nodejs-private/node-private#462
        </a>
      </li>
    </ul>
    <p>
      Windows 32-bit Installer:{' '}
      <a
        href="https://nodejs.org/dist/v20.8.1/node-v20.8.1-x86.msi"
        rel="nofollow"
      >
        https://nodejs.org/dist/v20.8.1/node-v20.8.1-x86.msi
      </a>{' '}
      <br />
      Windows 64-bit Installer:{' '}
      <a
        href="https://nodejs.org/dist/v20.8.1/node-v20.8.1-x64.msi"
        rel="nofollow"
      >
        https://nodejs.org/dist/v20.8.1/node-v20.8.1-x64.msi
      </a>{' '}
      <br />
      Windows ARM 64-bit Installer:{' '}
      <a
        href="https://nodejs.org/dist/v20.8.1/node-v20.8.1-arm64.msi"
        rel="nofollow"
      >
        https://nodejs.org/dist/v20.8.1/node-v20.8.1-arm64.msi
      </a>{' '}
      <br />
      Windows 32-bit Binary:{' '}
      <a href="https://nodejs.org/dist/v20.8.1/win-x86/node.exe" rel="nofollow">
        https://nodejs.org/dist/v20.8.1/win-x86/node.exe
      </a>{' '}
      <br />
      Windows 64-bit Binary:{' '}
      <a href="https://nodejs.org/dist/v20.8.1/win-x64/node.exe" rel="nofollow">
        https://nodejs.org/dist/v20.8.1/win-x64/node.exe
      </a>{' '}
      <br />
      Windows ARM 64-bit Binary:{' '}
      <a
        href="https://nodejs.org/dist/v20.8.1/win-arm64/node.exe"
        rel="nofollow"
      >
        https://nodejs.org/dist/v20.8.1/win-arm64/node.exe
      </a>{' '}
      <br />
      macOS 64-bit Installer:{' '}
      <a href="https://nodejs.org/dist/v20.8.1/node-v20.8.1.pkg" rel="nofollow">
        https://nodejs.org/dist/v20.8.1/node-v20.8.1.pkg
      </a>{' '}
      <br />
      macOS Apple Silicon 64-bit Binary:{' '}
      <a
        href="https://nodejs.org/dist/v20.8.1/node-v20.8.1-darwin-arm64.tar.gz"
        rel="nofollow"
      >
        https://nodejs.org/dist/v20.8.1/node-v20.8.1-darwin-arm64.tar.gz
      </a>{' '}
      <br />
      macOS Intel 64-bit Binary:{' '}
      <a
        href="https://nodejs.org/dist/v20.8.1/node-v20.8.1-darwin-x64.tar.gz"
        rel="nofollow"
      >
        https://nodejs.org/dist/v20.8.1/node-v20.8.1-darwin-x64.tar.gz
      </a>{' '}
      <br />
      Linux 64-bit Binary:{' '}
      <a
        href="https://nodejs.org/dist/v20.8.1/node-v20.8.1-linux-x64.tar.xz"
        rel="nofollow"
      >
        https://nodejs.org/dist/v20.8.1/node-v20.8.1-linux-x64.tar.xz
      </a>{' '}
      <br />
      Linux PPC LE 64-bit Binary:{' '}
      <a
        href="https://nodejs.org/dist/v20.8.1/node-v20.8.1-linux-ppc64le.tar.xz"
        rel="nofollow"
      >
        https://nodejs.org/dist/v20.8.1/node-v20.8.1-linux-ppc64le.tar.xz
      </a>{' '}
      <br />
      Linux s390x 64-bit Binary:{' '}
      <a
        href="https://nodejs.org/dist/v20.8.1/node-v20.8.1-linux-s390x.tar.xz"
        rel="nofollow"
      >
        https://nodejs.org/dist/v20.8.1/node-v20.8.1-linux-s390x.tar.xz
      </a>{' '}
      <br />
      AIX 64-bit Binary:{' '}
      <a
        href="https://nodejs.org/dist/v20.8.1/node-v20.8.1-aix-ppc64.tar.gz"
        rel="nofollow"
      >
        https://nodejs.org/dist/v20.8.1/node-v20.8.1-aix-ppc64.tar.gz
      </a>{' '}
      <br />
      ARMv7 32-bit Binary:{' '}
      <a
        href="https://nodejs.org/dist/v20.8.1/node-v20.8.1-linux-armv7l.tar.xz"
        rel="nofollow"
      >
        https://nodejs.org/dist/v20.8.1/node-v20.8.1-linux-armv7l.tar.xz
      </a>{' '}
      <br />
      ARMv8 64-bit Binary:{' '}
      <a
        href="https://nodejs.org/dist/v20.8.1/node-v20.8.1-linux-arm64.tar.xz"
        rel="nofollow"
      >
        https://nodejs.org/dist/v20.8.1/node-v20.8.1-linux-arm64.tar.xz
      </a>{' '}
      <br />
      Source Code:{' '}
      <a
        href="https://nodejs.org/dist/v20.8.1/node-v20.8.1.tar.gz"
        rel="nofollow"
      >
        https://nodejs.org/dist/v20.8.1/node-v20.8.1.tar.gz
      </a>{' '}
      <br />
      Other release files:{' '}
      <a href="https://nodejs.org/dist/v20.8.1/" rel="nofollow">
        https://nodejs.org/dist/v20.8.1/
      </a>{' '}
      <br />
      Documentation:{' '}
      <a href="https://nodejs.org/docs/v20.8.1/api/" rel="nofollow">
        https://nodejs.org/docs/v20.8.1/api/
      </a>
    </p>
    <h3>SHASUMS</h3>
    <div
      className="highlight highlight-text-roff notranslate position-relative rgh-seen--7626694588 rgh-linkified-code rgh-seen--9376378426 overflow-auto"
      dir="auto"
    >
      <pre>
        -----BEGIN PGP SIGNED MESSAGE----- Hash: SHA256
        eea26c68c1f4799fc3ac3f2da9bfd4038b987d51d19d9c4ba8b145b3eee53c7d
        node-v20.8.1-aix-ppc64.tar.gz
        93a5796c02c4e97378d6d0e2fcd8ac7b39418d97c21cf9aa6d9aa605814a1bff
        node-v20.8.1-arm64.msi
        5451f3651c89cd8f224e74961c84e68f4c8d63fe288431a3223b0465cc8b961e
        node-v20.8.1-darwin-arm64.tar.gz
        147e700ec86f8dbb8428600675673de303eb8710273b531031e5e9f3cde64644
        node-v20.8.1-darwin-arm64.tar.xz
        92b00b357c311eb45dd86516b032d80c63894aa069821c3ae3c8b3bbd00fdb9a
        node-v20.8.1-darwin-x64.tar.gz
        679843744b44ac897479fd53340fdc6d96e5b5c139e90b9cdcbad8a403eaf807
        node-v20.8.1-darwin-x64.tar.xz
        b2db83feb961721f17142e792643974b04456cf2da34c22da3ac29cd00123226
        node-v20.8.1-headers.tar.gz
        298e41b8d7fd17738049f9c5f6e315bb0f935ab90f9b542d1a55cf6488cc3d67
        node-v20.8.1-headers.tar.xz
        c0420fef5f6e637888be3f400e99297bb844932166fbad5ffa4f188ce59cfcdf
        node-v20.8.1-linux-arm64.tar.gz
        fec6edefa7ff959b29c7887735582ff2a2211b36a65a539da0f37db6797b7cff
        node-v20.8.1-linux-arm64.tar.xz
        679fb1cc74ecc460b4a8178b90be2847af28ee817fa2f39d986c832405c0ee1e
        node-v20.8.1-linux-armv7l.tar.gz
        f8370aaecd2cc2f26f8571aed7ffcf8efb6dc884a9a5e8e7a5e225e5ccfe6b74
        node-v20.8.1-linux-armv7l.tar.xz
        162bbf69b2c1aefc8163c371324cfd70582b8527e7623436d6e53823987a23d2
        node-v20.8.1-linux-ppc64le.tar.gz
        648d80fcb4a160e3078a66b3fc8c8eac669d28de3cfa533abed0bf8cb5af5785
        node-v20.8.1-linux-ppc64le.tar.xz
        d6a384293f18ba49b7507b67ce2ca1958050930768cae817d4705c3d3e672af2
        node-v20.8.1-linux-s390x.tar.gz
        4aa14458f2bac422989cc4526c431b14743c2f07889559fd1f2163cc6f3071f4
        node-v20.8.1-linux-s390x.tar.xz
        a42ac1f81704b14c7d07ddde989a8e290087b0487ee3f47185eb0240ba518195
        node-v20.8.1-linux-x64.tar.gz
        44096f6276cf735f3b25f47ffaaa1629b0abad4d9932c3a77d9dcdc743a3ff92
        node-v20.8.1-linux-x64.tar.xz
        abd016ae0dd943b196510e67277542c9cd31d24fbfa6834116a485d2c1d2b882
        node-v20.8.1-win-arm64.7z
        fbf7709c815f37577995d04b2cc41764033f06545c2c142d253ed257fe497960
        node-v20.8.1-win-arm64.zip
        6b3cb0e8d347ac52f0c45ba27a8c6f099b8053f18dfe7f6802e21c0b312aaedf
        node-v20.8.1-win-x64.7z
        90b27dab351a582edd3a8de2e8aaa80d95c41f19fe92ebbef83b9a45bac95d00
        node-v20.8.1-win-x64.zip
        ea692ad4bb1e80156aa6143c39afda2cfd0d46c36e14a1e03064a5bd084f05cc
        node-v20.8.1-win-x86.7z
        ba90977d0bee226db2dc89f55a3964eee4d844caef96e4db6994e1800d9c7dce
        node-v20.8.1-win-x86.zip
        c364cda2bab611b08404d5f8c93913b0007b3a19830a27dee5ff5d466807f5eb
        node-v20.8.1-x64.msi
        4f3daffb3124c08a31ebeca0a6b9aa4e4effcd5650c1fe1274c61343fb46689c
        node-v20.8.1-x86.msi
        097897aa8489962e955700d75238230e8295fbc02a27bcdd53d4462ead2c8c7e
        node-v20.8.1.pkg
        18aed385341bc16c7802e9d03189d1d0ad17b87923b2cdf11714d36534783b6a
        node-v20.8.1.tar.gz
        f799c66f6a6386bb8ac2c75a378f740c455e97f1fe964393dd39c9f9f6efbc70
        node-v20.8.1.tar.xz
        60a3d73fb1d376e6ed0a8b8e6734ab6c80aaa031fa023fd1be42276cc80dff93
        win-arm64/node.exe
        90cb9fbf80b276f2ed039533a8b67f1aeaf204f0aaf6396b290ae9c4dcd6d690
        win-arm64/node.lib
        6887174c70c5ca8941b9e2bad9b02bb5413158590ec5457f4497bb66d685a545
        win-arm64/node_pdb.7z
        3824fb4b85c8f8086f0c33c4e906c1ac448cd6259949a06d6956e2b1b300befe
        win-arm64/node_pdb.zip
        ccc62758d85434502141611b18af5fdbbc5c9087facaf4a7900d454f3d2fdd48
        win-x64/node.exe
        45d2519b3be3655e7b52ffcee613a484c38e768a59e9b9d4f08a3580d76a768a
        win-x64/node.lib
        e98706e1126309275692c0d318a0f1c54a50ae2447c11e3bcc1c6c261dced63a
        win-x64/node_pdb.7z
        9840a61ea4dea5128c20632f367e1bed2d2ace5fa008fe29b3ae28a9f4c21805
        win-x64/node_pdb.zip
        1c6ddd284a55664f0b2514bed7fcfe1fafcfec06f6dd07e82fefad9bb10aac60
        win-x86/node.exe
        0809f4b2f415581f7d932d80be4ac3ff7c4344421f7cccb34ff2f30c18c2ba0c
        win-x86/node.lib
        63f95d51077f2dd0360c57cc4286cc74a740391b04b63fd04914583007e8cf10
        win-x86/node_pdb.7z
        108b21fc46465197cb4c07df4b25143b2a5d348b30e0d64c2536472fd94cba3e
        win-x86/node_pdb.zip -----BEGIN PGP SIGNATURE-----
        iQGzBAEBCAAdFiEEiQwI24V5Fi/uDfnbi+q0389VXvQFAmUpqjgACgkQi+q0389V
        XvSSNwv/aDHgRKQ2/HEZ+VnltLMB3LPbjdchXBDMluHrJjNq75+qcGyOCfSbG8S3
        gWv4gI3glp8qfQLzOceMjqB2wXE7sGldfn9ppyDTX9Ppk5kMLnUxrjVqIC91QRzv
        XsBrpMhAgeoatJDCOyPHUjWbXBQRqMGxsfCdt73PJpUYlNk7c7n/PL4y8mZToikg
        u/km17/jxHYHnl7lbSSHBCKbW3JnFsaMuZkiHMUNTA3eiMWbTCQTUXiJG4iP6cNm
        8oTCQ/hYQi4SEbe5hGi+cAMCwnSaCB0U9BsSdw2p6o04evTygWG0GQi9YUfDhDxU
        ITuY+gtupA+5P1pRkAACrti9jmHSRqV50VYU2L50I3Ex4LeBOio9WwJYkqKs4BAl
        dOH02aVoZpQvS+OhOEOg1zIe18Q4QwG1NHnjxqcdUYgZpNiniLGdCL5LnjmsF/E8
        4pGNMerLlNL57KRVspIK84q0kVPOFoLK25gw3Mo36U9JV2F0AUI74yMIA4Ccu24l
        +jbDxn6K =gdqA -----END PGP SIGNATURE-----
      </pre>
    </div>
  </main>
);

export const Default: Story = {
  args: {
    trigger: <Button>Trigger</Button>,
    heading: 'Node v18.17.0',
    subheading: "2023-07-18, Version 18.17.0 'Hydrogen' (LTS), @danielleadams",
    avatars: [
      ...names.map(name => ({ src: githubProfileAvatarUrl(name), alt: name })),
    ],
    children: Content,
  },
};

export default { component: ChangelogModal } as Meta;
