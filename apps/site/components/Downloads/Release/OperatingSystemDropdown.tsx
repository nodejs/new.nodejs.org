'use client';

import { useTranslations } from 'next-intl';
import { useContext, useEffect, useMemo } from 'react';
import type { FC } from 'react';

import Select from '@/components/Common/Select';
import { useClientContext } from '@/hooks';
import { ReleaseContext } from '@/providers/releaseProvider';
import type { UserOS } from '@/types/userOS';
import { OPERATING_SYSTEMS, parseCompat } from '@/util/downloadUtils';

type OperatingSystemDropdownProps = { exclude?: Array<UserOS> };

const OperatingSystemDropdown: FC<OperatingSystemDropdownProps> = () => {
  const { os } = useClientContext();
  const release = useContext(ReleaseContext);
  const t = useTranslations();

  useEffect(() => {
    if (os !== 'LOADING') {
      release.setOS(os);
    }
    // Reacts on Client Context change of OS
    // Only this Hook is allowed to bypass the `setOS` from above
    // As this Hook is what defined the initial OS state
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [os]);

  // We parse the compatibility of the dropdown items
  const parsedOperatingSystems = useMemo(
    () => parseCompat(OPERATING_SYSTEMS, release),
    // We only want to react on the change of the Install Method
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [release.installMethod]
  );

  return (
    <Select<UserOS>
      values={parsedOperatingSystems}
      defaultValue={release.os !== 'LOADING' ? release.os : undefined}
      loading={release.os === 'LOADING'}
      placeholder={t('layouts.download.dropdown.unknown')}
      ariaLabel={t('layouts.download.dropdown.os')}
      onChange={value => release.setOS(value)}
      className="min-w-[8.5rem]"
      inline={true}
    />
  );
};

export default OperatingSystemDropdown;
