import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ToggleSwitch } from 'frontend/components/UI'
import useSetting from 'frontend/hooks/useSetting'
import ContextProvider from 'frontend/state/ContextProvider'
import SettingsContext from '../SettingsContext'
import InfoIcon from 'frontend/components/UI/InfoIcon'

const EnableFSR4Upgrade = () => {
  const { t } = useTranslation()
  const { platform } = useContext(ContextProvider)
  const { isLinuxNative } = useContext(SettingsContext)
  const isLinux = platform === 'linux'
  const [enableFSR4Upgrade, setEnableFSR4Upgrade] = useSetting(
    'enableFSR4Upgrade',
    false
  )

  if (!isLinux || isLinuxNative) {
    return <></>
  }

  return (
    <>
      <div className="toggleRow">
        <ToggleSwitch
          htmlId="fsr4UpgradeToggle"
          value={enableFSR4Upgrade || false}
          handleChange={() => setEnableFSR4Upgrade(!enableFSR4Upgrade)}
          title={t(
            'setting.fsr4Upgrade',
            'Enable FSR4 upgrade (Proton version needs to support it)'
          )}
        />

        <InfoIcon
          text={t('help.fsr4-upgrade', 'Supported by proton-cachyos')}
        />
      </div>
    </>
  )
}

export default EnableFSR4Upgrade
