'use client';

import { CloudArrowDownIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import { useContext } from 'react';
import type { FC } from 'react';

import Button from '@/components/Common/Button';
import { ReleaseContext } from '@/providers/releaseProvider';
import { downloadUrlByOS } from '@/util/downloadUrlByOS';
import { OperatingSystem } from '@/util/downloadUtils';

type DownloadButtonProps = { kind: 'installer' | 'binary' | 'source' };

const DownloadButton: FC<DownloadButtonProps> = ({ kind = 'installer' }) => {
  const t = useTranslations();
  const { release, os, bitness } = useContext(ReleaseContext);

  const version = release.versionWithPrefix;
  const url = downloadUrlByOS(version, os, bitness, kind);

  return (
    <div className="mb-2 mt-6">
      <Button href={url} disabled={!version}>
        <CloudArrowDownIcon />

        {t('layouts.download.buttons.prebuilt', {
          version,
          os: OperatingSystem[os],
        })}
      </Button>
    </div>
  );
};

export default DownloadButton;
